function isTouchDevice() {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}

import { yamapInit } from './modules/yamap.js';
import { ourFeatures, ourPublications, ourReviewsSlider, sliderWithThumbnailsAndModal, allMaterialsSlider, ourProductionSlider, disksSwiper } from './modules/slider.js';
import { defaultScripts } from './modules/base.js';
import { uiSizes } from './modules/uiSizes.js';
import { uiForms } from './modules/uiForm.js';
import { uiTabs } from './modules/uiTabs.js';
import { youtube } from './modules/youtube.js';
import { initPins } from './modules/pins.js';

let featuresSwiperSlider = null;
let publicationsSwiperSlider = null;

document.addEventListener(`DOMContentLoaded`, () => {
  defaultScripts();
  
  uiSizes();
  uiForms();
  uiTabs();

});

window.addEventListener('scroll', function (e) {
  if(!window["scrollInit"]){  // если еще не инициализирован scroll
      console.log("StartInitScroll")
      featuresSwiperSlider = ourFeatures();
      publicationsSwiperSlider = ourPublications();
      yamapInit();
      if(isTouchDevice()){ // для устройств с тачем
        initPins()
      }
      sliderWithThumbnailsAndModal();
      ourReviewsSlider();
      allMaterialsSlider();
      ourProductionSlider();
      disksSwiper();
      youtube();  

    window["scrollInit"] = true
  }
});

window.addEventListener('resize', function (e) {
  if (featuresSwiperSlider === null && window.innerWidth < 640) {
    featuresSwiperSlider = ourFeatures();
  } else if (featuresSwiperSlider !== null && window.innerWidth >= 640) {
    // FIXME: Нет такого метода. Исправить.
    try {
      featuresSwiperSlider.destroy();
    } catch (error) {
      console.log('исправить');
    }
    featuresSwiperSlider = null;
  }
});

