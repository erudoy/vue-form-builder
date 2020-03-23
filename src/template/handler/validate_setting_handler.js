var ValidateSettingHandler = {};

const CONTROL_ERROR_CLASS = "control-error";

ValidateSettingHandler.init = function (Hooks) {
    Hooks.push('Sidebar.beforeApplyConfig', validate_number_decimal);
    Hooks.push('Sidebar.beforeApplyConfig', validate_static_datasource);
    Hooks.push('Sidebar.beforeApplyConfig', validate_ajax_datasource);
};

// clear all control error
var clear_error_field = function() {
    $(".settingSidebar input").removeClass(CONTROL_ERROR_CLASS);
};

// validate number control
var validate_number_decimal = function (controlInfo) {
    clear_error_field();
    if (controlInfo.type === 'number' && controlInfo.decimalPlace < 0) {
        SethPhatToaster.error("Позиция десятичного разделителя не может быть отрицательной");
        $(".settingSidebar .decimalPlaces").addClass(CONTROL_ERROR_CLASS);
        return false;
    }
};

// validate control static data source
var validate_static_datasource = function (controlInfo) {
    if (controlInfo.type != 'select' || controlInfo.isAjax) {
        return;
    }

    clear_error_field();
    // validate here
    if (controlInfo.dataOptions.length <= 0) {
        SethPhatToaster.error("Источник статических данных не может быть пустым. Необходимо добавить хотя бы одну запись");
        return false;
    }

    // check all list
    let hasError = false;
    _.each(controlInfo.dataOptions, (data, index) => {
        if (_.isEmpty(data.id)) {
            hasError = true;
            $(`.settingSidebar .staticSource_${index} .txtId`).addClass(CONTROL_ERROR_CLASS);
        }
        if (_.isEmpty(data.text)) {
            hasError = true;
            $(`.settingSidebar .staticSource_${index} .txtText`).addClass(CONTROL_ERROR_CLASS);
        }
    });
    if (hasError) {
        SethPhatToaster.error("Источник статических двнных содержит пустое значение. Необходимо выполнить проверку и устранить ошибку");
        return false;
    }
};

// validate control ajax url
var validate_ajax_datasource = function (controlInfo) {
    if (controlInfo.type != 'select' || !controlInfo.isAjax) {
        return;
    }

    clear_error_field();
    if (_.isEmpty(controlInfo.ajaxDataUrl)) {
        $(".settingSidebar .ajaxDataUrl").addClass(CONTROL_ERROR_CLASS);
        SethPhatToaster.error("Данные из URL Ajax-запроса не могут быть пустыми");
        return false;
    }
};

export {
    ValidateSettingHandler
}
