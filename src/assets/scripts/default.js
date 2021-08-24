import { yamapInit } from "./modules/yamap.js"
import {ourFeatures, ourPublications, sverlaSlider} from "./modules/slider.js"
import { defaultScripts } from "./modules/base.js"

let counterSwiperFeatures = 0;
let counterSwiperPublications = 0;
let counterMap = 0;
let featuresSwiperSlider = null;
let publicationsSwiperSlider = null;

window.addEventListener('scroll', function (e) {
  if (window.scrollY > 100) {
    if(counterMap <= 0){
      counterMap++;
      yamapInit()
    }
    if(counterSwiperFeatures <= 0){
      counterSwiperFeatures++;
      featuresSwiperSlider = ourFeatures()
    }
    if(counterSwiperPublications <= 0){
      counterSwiperPublications++;
      publicationsSwiperSlider = ourPublications()
    }
  }
});

window.addEventListener('resize', function (e) {
  if (!featuresSwiperSlider && window.innerWidth < 640){
    featuresSwiperSlider = ourFeatures();
  }else if(featuresSwiperSlider !== null){
    featuresSwiperSlider.destroy()
    featuresSwiperSlider = null
  }
});

document.addEventListener(`DOMContentLoaded`, () => {
  defaultScripts();
});

sverlaSlider()