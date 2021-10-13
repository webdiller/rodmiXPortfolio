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

/** Слайдер для сверл с модалкой */
export function sliderWithThumbnailsAndModal() {
  try {
    const mainSlider = document.querySelectorAll('[data-slider-with-modal]');
    const swiperModal = document.getElementById('swiperModal');
    const swiperModalClose = document.getElementById('swiperModalClose');
    const slideSelector = '.swiper-slide';

    swiperModalClose.addEventListener('click', function () {
      swiperModal.classList.remove('active');
    });

    var swiperModalInstance = new Swiper('#swiperModal .swiper', {
      navigation: {
        nextEl: '#swiperModal .swiper-button-next',
        prevEl: '#swiperModal .swiper-button-prev'
      },
      observer: true
    });

    // new Swiper(swiperModal, swiperModalOptions);

    if (mainSlider.length > 0) {
      const swiperOptionsThumbnails = {
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
            slidesPerView: 4,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15
          },
          1020: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        },
        on: {
          init: function () {
            console.log('sliderWithThumbnailsAndModal initialized');
          }
        }
      };

      mainSlider.forEach((slider) => {
        new Swiper(slider, swiperOptionsThumbnails);
        const slides = slider.querySelectorAll(slideSelector);
        slides.forEach((sliderElement) => {
          sliderElement.addEventListener('click', function (e) {

            /**
             * Забираем массив с картинками из маленького слайдера
             */
            const imgElements = [];
            const nodeElements = Array.from(e.target.parentElement.children);
            nodeElements.forEach((el) => imgElements.push(el.dataset.sliderSrc));

            /**
             * Создаем html со слайдами и картинками для слайдера-модалки
             * Открываем слайдер-модалку
             */
            let html = '';
            for(let i = 0; i < imgElements.length; i++) {
              html += `<div class="swiper-slide"><img src=${imgElements[i]} alt=""/></div>`
            }
            document.querySelector("#swiperModal .swiper-wrapper").innerHTML = "";
            document.querySelector("#swiperModal .swiper-wrapper").insertAdjacentHTML( 'beforeend', html );
            swiperModal.classList.add('active');
          });
        });
      });
    }
  } catch (error) {}
}

export function ourReviewsSlider() {
  try {
    const ourReviews = document.getElementById('ourReviews');

    if (ourReviews) {
      
      const swiperOptions = {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,
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

    return new Swiper(ourProductionMobile, swiperOptionsMobile), new Swiper(ourProductionDesktop, swiperOptionsDesktop);
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
