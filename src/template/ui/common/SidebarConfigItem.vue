<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>ID</label>
                    <input type="text" readonly class="form-control" :value="control.name">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label>Тип</label>
                    <input type="text" readonly class="form-control" :value="typeFirstUpper">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label>Название</label>
                    <input type="text" class="form-control" v-model="control.fieldName"
                           data-toggle="tooltip" title="Название поля для секции должно быть уникальным!">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label>Ширина</label>
                    <select class="form-control" v-model="control.className">
                        <option v-for="(label, value) in widthOptions" :value="value">{{label}}</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="row mt-2">
            <div class="col-md-12">
                <label>
                    <input type="checkbox" name="isRequired" v-model="control.required"> Обязательное?
                </label>

                <label>
                    <input type="checkbox" name="isReadonly" v-model="control.readonly"> Только для чтения?
                </label>

                <!-- for text -->
                <label v-if="control.type === 'text'">
                    <input type="checkbox" name="isMultiLine" v-model="control.isMultiLine"> Несколько строк?
                </label>

                <!-- for number -->
                <label v-if="control.type === 'number'">
                    <input type="checkbox" name="isInteger" v-model="control.isInteger"> Целое число
                </label>

                <!-- for datepicker -->
                <label v-if="control.type === 'datepicker'">
                    <input type="checkbox" name="isTodayValue" v-model="control.isTodayValue"> Текущая дата?
                </label>

                <!-- for timepicker -->
                <label v-if="control.type === 'timepicker'">
                    <input type="checkbox" name="isNowTimeValue" v-model="control.isNowTimeValue"> Текущее время?
                </label>

                <!-- for checkbox -->
                <label v-if="control.type === 'checkbox'">
                    <input type="checkbox" name="isChecked" v-model="control.isChecked"> Отмеченный?
                </label>

                <!-- for select -->
                <label v-if="control.type === 'select'">
                    <input type="checkbox" name="isMultiple" v-model="control.isMultiple"> Множественный выбор
                </label>
            </div>
        </div>

        <!-- Decimal places for number -->
        <div class="row mt-2" v-if="control.type === 'number'">
            <div class="col-md-12">
                <div class="form-group">
                    <label>Знаков после запятой</label>
                    <input type="number" min="0" max="5" class="form-control decimalPlaces"
                           v-model="control.decimalPlace" :disabled="control.isInteger">
                </div>
            </div>
        </div>

        <!-- data options for select -->
        <div class="row mt-2" v-if="control.type === 'select'">
            <div class="col-md-12">
                <div class="form-group">
                    <label>Источник данных</label> <br />
                    <label><input type="radio" name="isAjax" v-model="control.isAjax":value="false">Статический</label>
                    <label><input type="radio" name="isAjax" v-model="control.isAjax" :value="true">Ajax-запрос</label>
                </div>

                <table class="table table-bordered table-striped" v-if="!control.isAjax">
                    <thead>
                        <tr>
                            <th class="text-center" width="10%">
                                <font-awesome-icon icon="plus" class="clickable" @click="addOption"></font-awesome-icon>
                            </th>
                            <th width="40%">Значение</th>
                            <th>Текст</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(option, index) in control.dataOptions" :class="'staticSource_' + index">
                            <td class="text-center">
                                <font-awesome-icon icon="times" class="clickable" @click="removeOption(index)"></font-awesome-icon>
                            </td>
                            <td>
                                <input type="text" class="form-control txtId" v-model="option.id">
                            </td>
                            <td>
                                <input type="text" class="form-control txtText" v-model="option.text">
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="form-group" v-else>
                    <label>
                        URL для Ajax-запроса
                        <a href="javascript:void(0)" @click="dataAjaxModal"><i class="fa fa-info-circle"></i></a>
                    </label>
                    <input type="text" class="form-control ajaxDataUrl" v-model="control.ajaxDataUrl">
                </div>
            </div>
        </div>

        <div class="row mt-2" v-if="control.type === 'datepicker'">
            <div class="col-md-12">
                <div class="form-group">
                    <label>Формат даты</label>
                    <select2-control :options="dateFormatOptions" v-model="control.dateFormat"></select2-control>
                </div>
            </div>
        </div>

        <div class="row mt-2" v-if="control.type === 'timepicker'">
            <div class="col-md-12">
                <div class="form-group">
                    <label>Формат времени</label>
                    <select2-control :options="timeFormatOptions" v-model="control.timeFormat"></select2-control>
                </div>
            </div>
        </div>

        <div class="row mt-2" v-if="control.type !== 'checkbox'">
            <div class="col-md-12">
                <div class="form-group">
                    <label>Значение по-умолчанию</label>
                    <input type="text" class="form-control" v-model="control.defaultValue">
                </div>
            </div>
        </div>

        <div class="row mt-2">
            <div class="col-md-12">
                <div class="form-group">
                    <label>Заголовок</label>
                    <input type="text" class="form-control" v-model="control.label">
                </div>
                <div class="form-group">
                    <label><input type="checkbox" v-model="control.labelBold"> Жирный</label>
                    <label><input type="checkbox" v-model="control.labelItalic"> Курсив</label>
                    <label><input type="checkbox" v-model="control.labelUnderline"> Подчеркивание</label>
                </div>
            </div>
        </div>

        <select-ajax-modal ref="SelectAjaxModal"></select-ajax-modal>
    </div>
</template>

<script>
    import {FORM_CONSTANTS, CONTROL_CONSTANTS} from "sethFormBuilder/config/constants";
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import Select2Control from "sethFormBuilder/third_party_controls/Select2Control";
    import SelectAjaxModal from "sethFormBuilder/template/ui/common/sidebar_config/SelectAjaxModal";

    export default {
        name: "sidebar-config-item",
        components: {
            SelectAjaxModal,
            Select2Control,
            FontAwesomeIcon},
        props: {
            control: {
                type: Object
            },
        },
        data: () => ({
            widthOptions: FORM_CONSTANTS.WidthOptions,
            dateFormatOptions: [],
            timeFormatOptions: [],
        }),
        methods: {
            addOption() {
                this.control.dataOptions.push(_.clone(FORM_CONSTANTS.OptionDefault));
            },
            removeOption(index) {
                this.control.dataOptions.splice(index, 1);
            },
            dataAjaxModal(e) {
                this.$refs.SelectAjaxModal.openModal();
            }
        },
        created() {
            this.dateFormatOptions = _.map(CONTROL_CONSTANTS.DateFormat, (value, key) => {
                return key;
            });
            this.timeFormatOptions = _.map(CONTROL_CONSTANTS.TimeFormat, (value, key) => {
                return key;
            });
        },
        mounted() {
            // add default options
            if (this.control.type === 'select' && this.control.dataOptions.length <= 0) {
                this.addOption();
            }
            $('[data-toggle="tooltip"]').tooltip(); // trigger tooltip
        },
        computed: {
            typeFirstUpper() {
                return this.control.type.charAt(0).toUpperCase() + this.control.type.slice(1);
            }
        }
    }
</script>

<style scoped>
    .clickable {
        cursor: pointer;
    }
</style>
