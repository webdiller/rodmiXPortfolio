// Наши преимущества
(() => {
  const featuresSwiper = document.getElementById('featuresSwiper');
  if (featuresSwiper) {
    const swiperOptions = {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: '#featuresSwiper .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      on: {
        init: function () {
          console.log('swiper initialized');
        }
      }
    };

    const featuresSwiperSlider = new Swiper(featuresSwiper, swiperOptions);
    if (window.innerWidth >= 640) {
      featuresSwiperSlider.destroy(true, true);
    }
  }
})();


// Наши публикации
(()=>{
  const publicationsSwiper = document.getElementById('publicationsSwiper');
  if (publicationsSwiper) {
    const swiperOptions = {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: '.publications__bottom .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      on: {
        init: function () {
          console.log('swiper initialized');
        }
      }
    };

    const publicationsSwiperSlider = new Swiper(publicationsSwiper, swiperOptions);
  }
})()