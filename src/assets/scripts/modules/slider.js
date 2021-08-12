import Swiper from 'swiper/bundle';

export function ourFeatures() {
  console.log("ourFeatures")
  try {
    const featuresSwiper = document.getElementById('featuresSwiper');
    //console.log(featuresSwiper)
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
            console.log('ourFeatures initialized');
          }
        }
      };

      if (window.innerWidth < 640) {
        return new Swiper(featuresSwiper, swiperOptions);
      }
    }
  } catch (error) {
    console.log('handle error', error);
  }
};

// ourPublications start
export function ourPublications() {
  try {
    const publicationsSwiper = document.getElementById('publicationsSwiper');
    if (publicationsSwiper) {
      const swiperOptions = {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          1020: {
            slidesPerView: 2,
            spaceBetween: 15
          }
        },
        pagination: {
          el: '.publications__bottom .swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.publications__bottom .swiper-button-next',
          prevEl: '.publications__bottom .swiper-button-prev'
        },
        on: {
          init: function () {
            console.log('ourPublications initialized');
          }
        }
      };
      return new Swiper(publicationsSwiper, swiperOptions);
    }
  } catch (error) {
    console.log('handle error', error);
  }
};