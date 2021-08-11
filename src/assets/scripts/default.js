import Swiper from 'swiper/bundle';
import ymaps from 'ymaps';

let offsetTop = window.scrollY;
let counterSwiperFeatures = 0;
let counterSwiper = 0;
let counterMap = 0;

const yamapScript = async () => {
  console.log('yamapScript start');
  const mapWrapper = document.getElementById("mapWrapper");
  try {
    const maps = await ymaps.load();
    const mapContainer = document.createElement("div");
    mapContainer.style.height = `${mapWrapper.offsetHeight}px`;
    mapContainer.style.width = `${mapWrapper.offsetWidth}px`;
    mapWrapper.appendChild(mapContainer);
    new maps.Map(mapContainer, {
      center: [-8.369326, 115.166023],
      zoom: 8
    });
  } catch (error) {
    console.error("Something went wrong", error);
  }
}

window.addEventListener('scroll', function (e) {
  if (window.scrollY > 400 && counterMap <= 0) {
    counterMap++;
    yamapScript()
  } else {
    return true;
  }
})

const defaultScripts = () => {
  const sidebar = document.getElementById('sidebar');
  const header = document.getElementById('header');
  const menuOpen = document.getElementById('menuOpen');
  const menuClose = document.getElementById('menuClose');

  const callbackModal = document.getElementById('callbackModal');
  const callbackModalButtons = document.querySelectorAll('[data-id="callbackModal"]');

  const orderModal = document.getElementById('orderModal');
  const orderModalButtons = document.querySelectorAll('[data-id="orderModal"]');

  const callbackSuccess = document.getElementById('callbackSuccess');
  const callbackSuccessButtons = document.querySelectorAll('[data-id="callbackSuccess"]');

  const orderForm = document.getElementById('orderForm');
  const callbackForm = document.getElementById('callbackForm');

  if (orderForm) {
    orderForm.addEventListener('submit', function (e) {
      e.preventDefault();
      orderModal.classList.remove('active');
      setTimeout(() => {
        callbackSuccess.classList.add('active');
      }, 250);
    });
  }

  if (callbackForm) {
    callbackForm.addEventListener('submit', function (e) {
      e.preventDefault();
      callbackModal.classList.remove('active');
      setTimeout(() => {
        callbackSuccess.classList.add('active');
      }, 250);
    });
  }

  // callbackModal
  if (callbackModalButtons && callbackModal) {
    callbackModalButtons.forEach((element) => {
      element.addEventListener('click', function () {
        callbackModal.classList.toggle('active');
      });
    });

    callbackModal.addEventListener('click', function (e) {
      if (e.target === this) {
        callbackModal.classList.remove('active');
      }
    });
  }

  // orderModal
  if (orderModalButtons && orderModal) {
    orderModalButtons.forEach((element) => {
      element.addEventListener('click', function () {
        orderModal.classList.toggle('active');
      });
    });

    orderModal.addEventListener('click', function (e) {
      if (e.target === this) {
        orderModal.classList.remove('active');
      }
    });
  }

  // callbackSuccess
  if (callbackSuccessButtons && callbackSuccess) {
    callbackSuccessButtons.forEach((element) => {
      element.addEventListener('click', function () {
        callbackSuccess.classList.toggle('active');
      });
    });

    callbackSuccess.addEventListener('click', function (e) {
      if (e.target === this) {
        callbackSuccess.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', function (e) {
    if (offsetTop > 0 && window.innerWidth >= 1915) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (sidebar && header && menuOpen && menuClose) {
    menuOpen.addEventListener('click', function (e) {
      sidebar.classList.add('active');
    });

    menuClose.addEventListener('click', function (e) {
      sidebar.classList.remove('active');
    });

    sidebar.addEventListener('click', function (e) {
      if (e.target === this) {
        sidebar.classList.remove('active');
      }
    });
  }
};
defaultScripts();

const ourFeatures = () => {
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

      const featuresSwiperSlider = new Swiper(featuresSwiper, swiperOptions);
      if (window.innerWidth >= 640) {
        featuresSwiperSlider.destroy(true, true);
      }
    }
  } catch (error) {
    console.log('handle error', error);
  }
};

// TODO: Доработать
window.addEventListener('scroll', function (e) {
  if (offsetTop > 10) {
    window.addEventListener('resize', function (e) {
      if (counterSwiperFeatures !== 1 && window.innerWidth <= 639) {
        counterSwiperFeatures = 1;
        ourFeatures();
      } else {
        return true;
      }
    });
  }
});

// ourPublications start
const ourPublications = () => {
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
      const publicationsSwiperSlider = new Swiper(publicationsSwiper, swiperOptions);
    }
  } catch (error) {
    console.log('handle error', error);
  }
};

window.addEventListener('scroll', function (e) {
  if (offsetTop > 10) {
    if (counterSwiper !== 1) {
      counterSwiper = 1;
      ourPublications();
    } else {
      return true;
    }
  }
});
// ourPublications end
