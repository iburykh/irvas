import 'nodelist-foreach-polyfill';

import form from './modules/form';
import mask from './modules/maskTelNumber';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    form();
    mask();
    
});