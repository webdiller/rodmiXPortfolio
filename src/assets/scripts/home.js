const featuresSwiper = document.getElementById('featuresSwiper');
if (featuresSwiper) {
  const swiperOptions = {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    on: {
      init: function () {
        console.log('swiper initialized');
      },
    },
  };

  const featuresSwiperSlider = new Swiper('#featuresSwiper', swiperOptions);
  if (window.innerWidth >= 640) {
    featuresSwiperSlider.destroy(true, true);
  }
}
