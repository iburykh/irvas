import 'nodelist-foreach-polyfill';

import form from './modules/form';
import mask from './modules/maskTelNumber';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import popupGallery from './modules/popupGallery';
import changeModalState from './modules/changeModalState';
import lazyLoadMap from './modules/lazyLoadMap';

'use strict';

let modalState = {};

form(modalState);
mask();
slider();
tabs();
timer();
popupGallery();
changeModalState(modalState);
lazyLoadMap();