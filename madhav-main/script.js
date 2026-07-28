const swiper = new Swiper(".partnerSwiper", {
  loop: true,
  speed: 3500,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  freeMode: true,
  freeModeMomentum: false,

  grabCursor: true,

  slidesPerView: "auto",
  spaceBetween: 30,
});