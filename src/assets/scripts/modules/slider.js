import Swiper from 'swiper/bundle';

export function ourFeatures() {
  console.log('ourFeatures');
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
}

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
}

export function sverlaSlider() {
  try {
    const sverlaSlider = document.getElementById('sverlaSlider');
    const sverlaSliderItem = document.querySelectorAll('#sverlaSlider .swiper-slide picture');

    const sverlaModal = document.getElementById('sverlaModal');
    const sverlaSliderModal = document.getElementById('sverlaSliderModal');

    if (sverlaSliderModal) {
      sverlaSliderItem.forEach((el) =>
        el.addEventListener('click', function () {
          sverlaModal.classList.add('active');
        })
      );
    }

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
          }
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
// sverlaSlider modal
export function sverlaSliderModal() {
  try {
    const sverlaSliderModal = document.getElementById('sverlaSliderModal');
    if (sverlaSliderModal) {
      const swiperOptions = {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        navigation: {
          nextEl: '#sverlaSliderModal .swiper-button-next',
          prevEl: '#sverlaSliderModal .swiper-button-prev'
        },
        on: {
          init: function () {
            console.log('sverlaSliderModal initialized');
          }
        }
      };
      return new Swiper(sverlaSliderModal, swiperOptions);
    }
  } catch (error) {
    console.log('handle error', error);
  }
}

// 1
export function magneticSlider() {
  try {
    const magneticSlider = document.getElementById('magneticSlider');
    const magneticSliderItem = document.querySelectorAll('#magneticSlider .swiper-slide picture');

    const magneticModal = document.getElementById('magneticModal');
    const magneticSliderModal = document.getElementById('magneticSliderModal');

    if (magneticSliderModal) {
      magneticSliderItem.forEach((el) =>
        el.addEventListener('click', function () {
          magneticModal.classList.add('active');
        })
      );
    }

    if (magneticSlider) {
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
          }
        },
        on: {
          init: function () {
            console.log('magneticSlider initialized');
          }
        }
      };
      return new Swiper(magneticSlider, swiperOptions);
    }
  } catch (error) {
    console.log('handle error', error);
  }
}
// magneticSlider modal
export function magneticSliderModal() {
  try {
    const magneticSliderModal = document.getElementById('magneticSliderModal');
    if (magneticSliderModal) {
      const swiperOptions = {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        navigation: {
          nextEl: '#magneticSliderModal .swiper-button-next',
          prevEl: '#magneticSliderModal .swiper-button-prev'
        },
        on: {
          init: function () {
            console.log('magneticSliderModal initialized');
          }
        }
      };
      return new Swiper(magneticSliderModal, swiperOptions);
    }
  } catch (error) {
    console.log('handle error', error);
  }
}
// 1

export function burners1() {
  try {
    const burners1 = document.getElementById('burners1');
    const burners1Item = document.querySelectorAll('#burners1 .swiper-slide picture');
    
    const burners1SliderModal = document.getElementById('burners1SliderModal');
    const burners1Modal = document.getElementById('burners1Modal');

    if (burners1SliderModal) {
      burners1Item.forEach((el) =>
        el.addEventListener('click', function () {
          burners1Modal.classList.add('active');
        })
      );
    }

    if (burners1) {
      const swiperOptions = {
        slidesPerView: 3,
        spaceBetween: 10,
        breakpoints: {
          480: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          540: {
            slidesPerView: 3,
            spaceBetween: 10
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
            slidesPerView: 4,
            spaceBetween: 14
          },
          1430: {
            slidesPerView: 4,
            spaceBetween: 17
          }
        },
        on: {
          init: function () {
            console.log('burners1 initialized');
          }
        }
      };
      return new Swiper(burners1, swiperOptions);
    }
  } catch (error) {
    console.log('handle error', error);
  }
}
// burners1 modal
export function burners1SliderModal() {
  try {
    const burners1SliderModal = document.getElementById('burners1SliderModal');
    if (burners1SliderModal) {
      const swiperOptions = {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        navigation: {
          nextEl: '#burners1SliderModal .swiper-button-next',
          prevEl: '#burners1SliderModal .swiper-button-prev'
        },
        on: {
          init: function () {
            console.log('burners1SliderModal initialized');
          }
        }
      };
      return new Swiper(burners1SliderModal, swiperOptions);
    }
  } catch (error) {
    console.log('handle error', error);
  }
}

export function burners2() {
  try {
    const burners2 = document.getElementById('burners2');
    const burners2Item = document.querySelectorAll('#burners2 .swiper-slide picture');
    const burners2SliderModal = document.getElementById('burners2SliderModal');
    const burners2Modal = document.getElementById('burners2Modal');

    if (burners2SliderModal) {
      burners2Item.forEach((el) =>
        el.addEventListener('click', function () {
          burners2Modal.classList.add('active');
        })
      );
    }

    if (burners2) {
      const swiperOptions = {
        slidesPerView: 3,
        spaceBetween: 10,
        breakpoints: {
          480: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          540: {
            slidesPerView: 3,
            spaceBetween: 10
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
            slidesPerView: 4,
            spaceBetween: 14
          },
          1430: {
            slidesPerView: 4,
            spaceBetween: 17
          }
        },
        on: {
          init: function () {
            console.log('burners2 initialized');
          }
        }
      };
      return new Swiper(burners2, swiperOptions);
    }
  } catch (error) {
    console.log('handle error', error);
  }
}
// burners2 modal
export function burners2SliderModal() {
  try {
    const burners2SliderModal = document.getElementById('burners2SliderModal');
    if (burners2SliderModal) {
      const swiperOptions = {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        navigation: {
          nextEl: '#burners2SliderModal .swiper-button-next',
          prevEl: '#burners2SliderModal .swiper-button-prev'
        },
        on: {
          init: function () {
            console.log('burners2SliderModal initialized');
          }
        }
      };
      return new Swiper(burners2SliderModal, swiperOptions);
    }
  } catch (error) {
    console.log('handle error', error);
  }
}

export function burners3() {
  try {
    const burners3 = document.getElementById('burners3');
    const burners3Item = document.querySelectorAll('#burners3 .swiper-slide picture');
    const burners3SliderModal = document.getElementById('burners3SliderModal');
    const burners3Modal = document.getElementById('burners3Modal');

    if (burners3SliderModal) {
      burners3Item.forEach((el) =>
        el.addEventListener('click', function () {
          burners3Modal.classList.add('active');
        })
      );
    }

    if (burners3) {
      const swiperOptions = {
        slidesPerView: 3,
        spaceBetween: 10,
        breakpoints: {
          480: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          540: {
            slidesPerView: 3,
            spaceBetween: 10
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
            slidesPerView: 4,
            spaceBetween: 14
          },
          1430: {
            slidesPerView: 4,
            spaceBetween: 17
          }
        },
        on: {
          init: function () {
            console.log('burners3 initialized');
          }
        }
      };
      return new Swiper(burners3, swiperOptions);
    }
  } catch (error) {
    console.log('handle error', error);
  }
}
// burners3 modal
export function burners3SliderModal() {
  try {
    const burners3SliderModal = document.getElementById('burners3SliderModal');
    if (burners3SliderModal) {
      const swiperOptions = {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        navigation: {
          nextEl: '#burners3SliderModal .swiper-button-next',
          prevEl: '#burners3SliderModal .swiper-button-prev'
        },
        on: {
          init: function () {
            console.log('burners3SliderModal initialized');
          }
        }
      };
      return new Swiper(burners3SliderModal, swiperOptions);
    }
  } catch (error) {
    console.log('handle error', error);
  }
}

export function ourReviewsSlider() {
  try {
    const ourReviews = document.getElementById('ourReviews');
    const ourReviewsItem = document.querySelectorAll('#ourReviews .swiper-slide picture');
    const ourReviewsModal = document.getElementById('ourReviewsModal');

    if (ourReviews) {
      if (ourReviewsModal) {
        ourReviewsItem.forEach((el) =>
          el.addEventListener('click', function () {
            ourReviewsModal.classList.add('active');
          })
        );
      }

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
}
export function ourReviewsSliderModal() {
  try {
    const ourReviewsSliderModal = document.getElementById('ourReviewsSliderModal');
    if (ourReviewsSliderModal) {
      const swiperOptions = {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        freeMode: {
          enabled: false,
        },
        navigation: {
          nextEl: '#ourReviewsSliderModal .swiper-button-next',
          prevEl: '#ourReviewsSliderModal .swiper-button-prev'
        },
        on: {
          init: function () {
            console.log('ourReviewsSliderModal initialized');
          }
        }
      };
      return new Swiper(ourReviewsSliderModal, swiperOptions);
    }
  } catch (error) {
    console.log('handle error', error);
  }
}

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
        pagination: {
          el: '#allMaterials .swiper-pagination',
          type: 'bullets',
          clickable: true
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
}

export function ourProductionSlider() {
  try {
    const ourProductionMobile = document.getElementById('ourProductionMobile');
    const ourProductionDesktop = document.getElementById('ourProductionDesktop');

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
        }
      };
      
      return (new Swiper(ourProductionMobile, swiperOptionsMobile), new Swiper(ourProductionDesktop, swiperOptionsDesktop))
  } catch (error) {
    console.log('handle error', error);
  }
}

export function disksSwiper() {
  try {
    const disksSwiperElement = document.getElementById('disksSwiperElement');
    if (disksSwiperElement) {
      const disksSwiperOptions = {
        slidesPerView: 1.4,
        spaceBetween: 16,
        loop: true,
        breakpoints: {
          480: {
            slidesPerView: 2.1,
            spaceBetween: 15
          },
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
        }
      };
      return new Swiper(disksSwiperElement, disksSwiperOptions);
    }
  } catch (error) {}
}
