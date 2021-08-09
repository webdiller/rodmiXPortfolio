const defaultScripts = () => {
  const sidebar = document.getElementById('sidebar');
  const header = document.getElementById('header');
  const menuOpen = document.getElementById('menuOpen');
  const menuClose = document.getElementById('menuClose');

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
defaultScripts()


const ourFeatures = () => {
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
};
ourFeatures();

const ourPublications = () => {
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
};

ourPublications();
