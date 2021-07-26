const featuresSwiper = document.getElementById('featuresSwiper');
if (featuresSwiper) {
  const swiperOptions = {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    }
  };

  const featuresSwiperSlider = new Swiper('#featuresSwiper', swiperOptions);
  if (window.innerWidth >= 640) {
    featuresSwiperSlider.destroy(true, true);
  }
}
