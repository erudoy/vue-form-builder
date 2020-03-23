import {faEdit} from '@fortawesome/free-solid-svg-icons/faEdit';
import {faCalculator} from '@fortawesome/free-solid-svg-icons/faCalculator';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons/faCalendarAlt';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';
import {faDatabase} from '@fortawesome/free-solid-svg-icons/faDatabase';

var FORM_CONSTANTS = {};
var CONTROL_CONSTANTS = {};

FORM_CONSTANTS.SectionLayout = {
  collapse: "Обычный",
  tab: "Вкладки",
  // inner: "Inner Parent",
};

FORM_CONSTANTS.Section = {
    name: "",
    label: "",
    clientKey: "",
    order: 0,
    rows: [],

    // config
    labelPosition: "left", // left or top

    // for dynamic
    isDynamic: false,
    minInstance: 1,
    maxInstance: 0, //0 for unlimited
    instances: [], // for save data in GUI to easily to retrieve @@
};

FORM_CONSTANTS.Row = {
    name: "",
    label: "",
    order: 0,
    controls: [],
};

FORM_CONSTANTS.Control = {
    type: "",
    name: "",
    fieldName: "",
    label: "",
    order: 0,
    defaultValue: "",
    value: "",
    className: 'col-md-4',
    readonly: false,

    // label style
    labelBold: false,
    labelItalic: false,
    labelUnderline: false,

    // validation
    required: false,

    // attr for text
    isMultiLine: false,

    // attr for number
    isInteger: false,
    decimalPlace: 0,

    // attr for datePicker
    isTodayValue: false,
    dateFormat: "dd/mm/yy",

    // attr for timePicker
    isNowTimeValue: false,
    timeFormat: "HH:mm", // enhancement later

    // attr for select
    isMultiple: false,
    isAjax: false, // is ajax data source or not
    dataOptions: [], // static data source
    ajaxDataUrl: "", // ajax data source

    // attr for checkbox
    isChecked: false
};

FORM_CONSTANTS.Type = {
    text: {
        label:"Текстовое поле",
        icon: faEdit
    },
    number: {
        label:"Числовое поле",
        icon: faCalculator
    },
    datepicker: {
        label: "Выбор даты",
        icon: faCalendarAlt
    },
    timepicker: {
        label:"Выбор времени",
        icon: faClock
    },
    select: {
        label: "Список",
        icon: faDatabase
    },
    checkbox: {
        label:"Флажок",
        icon: faCheck
    },
};

FORM_CONSTANTS.WidthOptions = {
    "col-md-1": "Ширина - 1 часть",
    "col-md-2": "Ширина - 2 части",
    "col-md-3": "Ширина - 3 части",
    "col-md-4": "Ширина - 4 части",
    "col-md-5": "Ширина - 5 частей",
    "col-md-6": "Ширина - 6 частей",
    "col-md-7": "Ширина - 7 частей",
    "col-md-8": "Ширина - 8 частей",
    "col-md-9": "Ширина - 9 частей",
    "col-md-10": "Ширина - 10 частей",
    "col-md-11": "Ширина - 11 частей",
    "col-md-12": "Ширина - 12 частей",
};

FORM_CONSTANTS.OptionDefault = {
    id: "",
    text: ""
};

CONTROL_CONSTANTS.DateFormat = {
    // rule: date picker format => moment format
    'dd/mm/yy': "D/M/YYYY",
    'dd-mm-yy': "D-M-YYYY",
    'mm/dd/yy': "M/D/YYYY",
    'mm-dd-yy': "M/D/YYYY",
    'yy/mm/dd': "YYYY/M/D",
    'yy-mm-dd': "YYYY-M-D"
};

CONTROL_CONSTANTS.TimeFormat = {
    'H:m': 'H:m',
    'HH:mm': 'HH:mm',
    'h:m p': "h:m A",
    'hh:mm p': "hh:mm A"
};

export {
    FORM_CONSTANTS,
    CONTROL_CONSTANTS
}
