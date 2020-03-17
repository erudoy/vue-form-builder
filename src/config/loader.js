import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Toaster from 'v-toaster'
import underscoreDeepExtend from 'underscore-deep-extend';
import moment from 'moment';
import {FontAwesomeRegister} from "./font-awesome-register";

// load jquery
var $ = require('jquery');
window.$ = $;
window.jQuery = $;

// load jquery ui
require('webpack-jquery-ui');
require('webpack-jquery-ui/css');

// load bootstrap
require('popper.js');
require('bootstrap');
import 'bootstrap/dist/css/bootstrap.min.css';

// load font-awesome
FontAwesomeRegister.register();
Vue.component('font-awesome-icon', FontAwesomeIcon);

// load underscore
window._ = require('underscore');
require('@config/helper_function');
_.mixin({deepExtend: underscoreDeepExtend(_)});

// load moment
window.moment = moment;

// toaster
import 'v-toaster/dist/v-toaster.css';
Vue.use(Toaster, {timeout: 4000});
