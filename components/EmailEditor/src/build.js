import beautify from 'js-beautify';
window.beautify = beautify;

// jquery
import jQuery from './lib/jquery-3.4.1.min.js';
window.jQuery = jQuery;
window.$ = jQuery;

// bootstrap
require('./lib/popper.js');
require('./js/beepro.js');
require('./lib/bootstrap/bootstrap.min.js');

// something in builder ext
import {
  rgb2hex,
  removeModalGetLinkVideo,
  modal_display,
  htmlLoader,
} from './js/builder_ext.js';
window.rgb2hex = rgb2hex;
window.removeModalGetLinkVideo = removeModalGetLinkVideo;
window.modal_display = modal_display;
window.htmlLoader = htmlLoader;

// all thing from builder
import {
  createElementFromHTML,
  makeid,
  Editor,
  simulateClick,
} from './js/builder.js';
window.createElementFromHTML = createElementFromHTML;
window.makeid = makeid;
window.simulateClick = simulateClick;

// ClipboardJS
import ClipboardJS from './lib/clipboard.min.js';
window.ClipboardJS = ClipboardJS;

// ace JS
import * as ace from 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-html';
window.ace = ace;

window.Editor = Editor;

// Popup
import { PopUp } from './js/popup.js';
window.PopUp = PopUp;

import { helpPopUp } from './js/helpPopup.js';
window.helpPopUp = helpPopUp;

// Sweetalert2
import Swal from './lib/sweetalert/sweetalert2.min.js';
window.Swal = Swal;

// bootstrapGrowl
require('./lib/jquery.bootstrap-growl.min.js');

// Autocomplete
import {
  acpAutocomplete,
  acpAddCss,
  acpDictionary,
} from './js/autocomplete.js';
window.acpAutocomplete = acpAutocomplete;
window.acpAddCss = acpAddCss;
window.acpDictionary = acpDictionary;
