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

  if(orderForm) {
    orderForm.addEventListener('submit', function(e){
      e.preventDefault();
      orderModal.classList.remove('active');
      setTimeout(() => {
        callbackSuccess.classList.add('active');
      }, 250);
    })
  }

  if(callbackForm) {
    callbackForm.addEventListener('submit', function(e){
      e.preventDefault();
      callbackModal.classList.remove('active');
      setTimeout(() => {
        callbackSuccess.classList.add('active');
      }, 250);
    })
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
    let offsetTop = window.scrollY;

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
            console.log('swiper initialized');
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
ourFeatures();

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
            console.log('swiper initialized');
          }
        }
      };
      const publicationsSwiperSlider = new Swiper(publicationsSwiper, swiperOptions);
    }
  } catch (error) {
    console.log('handle error', error);
  }
};

ourPublications();
