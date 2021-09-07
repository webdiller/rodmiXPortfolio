import Swiper from 'swiper/bundle';

export function ourFeatures() {
  console.log("ourFeatures")
  try {
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
            slidesPerView: 2,
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
          1140: {
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

export function allMaterialsSlider() {
  try {
    const allMaterials = document.getElementById('allMaterials');
    if (allMaterials) {
      const swiperOptions = {
        slidesPerView: 1.3,
        spaceBetween: 10,
        breakpoints: {
          480: {
            spaceBetween: 19
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          1020: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          1430: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        },
        navigation: {
          nextEl: '.ui-materials__navigation .swiper-button-next',
          prevEl: '.ui-materials__navigation .swiper-button-prev'
        },
        on: {
          init: function () {
            console.log('allMaterials initialized');
          }
        }
      };
      return new Swiper(allMaterials, swiperOptions);
    }
  } catch (error) {
    console.log('handle error', error);
  }
};

export function ourProductionSlider() {
  try {
    const ourProductionMobile = document.getElementById('ourProductionMobile');
    const ourProductionDesktop = document.getElementById('ourProductionDesktop');

    if (ourProductionMobile && window.innerWidth <= 639) {
      const swiperOptionsMobile = {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          480: {
            slidesPerView: 2,
            spaceBetween: 15
          }
        },
        on: {
          init: function () {
            console.log('ourProductionMobile initialized');
          }
        }
      };
      return new Swiper(ourProductionMobile, swiperOptionsMobile);
    }

    if (ourProductionDesktop && window.innerWidth >= 640) {
      const swiperOptionsDesktop = {
        slidesPerView: 3,
        spaceBetween: 11,
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          1430: {
            spaceBetween: 30
          }
        },
        navigation: {
          nextEl: '.our-production__navigation .swiper-button-next',
          prevEl: '.our-production__navigation .swiper-button-prev'
        },
        on: {
          init: function () {
            console.log('ourProductionDesktop initialized');
          }
        },
      };
      return new Swiper(ourProductionDesktop, swiperOptionsDesktop);
    }
  } catch (error) {
    console.log('handle error', error);
  }
};

export function disksSwiper() {
  try {
  const disksSwiperElement = document.getElementById('disksSwiperElement');
  if (disksSwiperElement) {
    const disksSwiperOptions = {
      slidesPerView: 1.4,
      spaceBetween: 16,
      loop: true,
      breakpoints: {
        540: {
          slidesPerView: 2.1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 2.3,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2.6,
          spaceBetween: 24
        },
        1020: {
          slidesPerView: 3.5,
          spaceBetween: 24
        },
        1430: {
          slidesPerView: 5,
          spaceBetween: 24
        }
      },
      pagination: {
        el: '#disksSwiperElement .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.ui-disk-sizes__navigation .swiper-button-next',
        prevEl: '.ui-disk-sizes__navigation .swiper-button-prev'
      },
      on: {
        init: function () {
          console.log('disksSwiperElement initialized');
        }
      },
    };
    return new Swiper(disksSwiperElement, disksSwiperOptions);
  }
  } catch (error) {
    
  }
}

