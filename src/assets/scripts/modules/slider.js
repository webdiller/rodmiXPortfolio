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

export function sverlaSlider() {
  try {
    const sverlaSlider = document.getElementById('sverlaSlider');
    if (sverlaSlider) {
      const swiperOptions = {
        slidesPerView: 2,
        spaceBetween: 10,
        breakpoints: {
          480: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          540: {
            spaceBetween: 20
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          1020: {
            slidesPerView: 3, 
            spaceBetween: 30
          },
        },
        on: {
          init: function () {
            console.log('sverlaSlider initialized');
          }
        }
      };
      return new Swiper(sverlaSlider, swiperOptions);
    }
  } catch (error) {
    console.log('handle error', error);
  }
}

export function ourReviewsSlider() {
  try {
    const ourReviews = document.getElementById('ourReviews');
    if (ourReviews) {
      const swiperOptions = {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          1430: {
            slidesPerView: 2,
            spaceBetween: 32
          }
        },
        pagination: {
          el: '#ourReviews .swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.ui-reviews__navigation .swiper-button-next',
          prevEl: '.ui-reviews__navigation .swiper-button-prev'
        },
        on: {
          init: function () {
            console.log('ourReviews initialized');
          }
        }
      };
      return new Swiper(ourReviews, swiperOptions);
    }
  } catch (error) {
    console.log('handle error', error);
  }
};