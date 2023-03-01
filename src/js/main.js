import Slider from "./modules/big_slider";

window.addEventListener('DOMContentLoaded', ()=> {
    'use strict';
    
    const slider = new Slider('.page','.next');
    slider.render();
});