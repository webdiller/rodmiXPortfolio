import { yamapInit } from './modules/yamap.js';
import { ourFeatures, ourPublications, ourReviewsSlider, sverlaSlider, allMaterialsSlider, ourProductionSlider, disksSwiper, burnersSlider1, burnersSlider2, burnersSlider3 } from './modules/slider.js';
import { defaultScripts } from './modules/base.js';
import { uiSizes } from './modules/uiSizes.js';
import { uiForms } from './modules/uiForm.js';

let counterSwiperFeatures = 0;
let counterSwiperPublications = 0;
let counterMap = 0;
let featuresSwiperSlider = null;
let publicationsSwiperSlider = null;

yamapInit()

window.addEventListener('scroll', function (e) {
  if (window.scrollY > 100) {
    if (counterSwiperFeatures <= 0) {
      counterSwiperFeatures++;
      featuresSwiperSlider = ourFeatures();
    }
    if (counterSwiperPublications <= 0) {
      counterSwiperPublications++;
      publicationsSwiperSlider = ourPublications();
    }
  }
});

window.addEventListener('resize', function (e) {
  if (!featuresSwiperSlider && window.innerWidth < 640) {
    featuresSwiperSlider = ourFeatures();
  } else if (featuresSwiperSlider !== null) {
    // FIXME: Нет такого метода. Исправить.
    try {
      featuresSwiperSlider.destroy();
    } catch (error) {
      console.log('исправить');
    }
    featuresSwiperSlider = null;
  }
});

document.addEventListener(`DOMContentLoaded`, () => {
  defaultScripts();
});

sverlaSlider();
burnersSlider1()
burnersSlider2()
burnersSlider3()
ourReviewsSlider();
allMaterialsSlider();
ourProductionSlider();
uiSizes();
uiForms();
disksSwiper();