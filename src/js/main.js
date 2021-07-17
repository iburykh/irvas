import 'nodelist-foreach-polyfill';

import form from './modules/form';
import mask from './modules/maskTelNumber';
import slider from './modules/slider';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    form();
    mask();
    slider();
    
});