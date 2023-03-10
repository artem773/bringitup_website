import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import VideoPlayer from "./modules/playVideo";
import Difference from "./modules/difference";
import Form from "./modules/form";
import ShowInfo from "./modules/show_info";
import Download from "./modules/download";

window.addEventListener('DOMContentLoaded', ()=> {
    'use strict';
    
    const slider = new MainSlider({ //main
        container: '.page', 
        btns: '.next',
    });
    slider.render();

    const moduleNextPageSlider = new MainSlider({
        container: '.moduleapp',
        btns: '.next'
    });
    moduleNextPageSlider.render();

    const showUpSlider = new MiniSlider({ //mini
        container: '.showup__content-slider', 
        next: '.showup__next', 
        prev: '.showup__prev',
        activeClass: 'card-active',
        animate: true,
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({ //mini
        container: '.modules__content-slider',
        next: '.modules__info-btns .slick-next', 
        prev: '.modules__info-btns .slick-prev',
        activeClass: 'card-active',
        animate: true,
        autoplay: true,
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({ //mini
        container: '.feed__slider',
        next: '.feed__slider .slick-next', 
        prev: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();

    new VideoPlayer('.showup .play','.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();

    new Form('.form').init();

    new ShowInfo('.module__info-show .plus').init();

    new Download('.download').init();

});