import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);


//swiper in slider section
const mySwiper = new Swiper('.gallery__swiper-container',  {
	loop: true,
	loopedSlides: 3,
	centeredSlides: true,
	slidesPerView: 'auto',
	spaceBetween: 105,
	pagination: {
		el: '.gallery__swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

//swiper in first section
const mySwiperFirst = new Swiper('.first__swiper-container',  {
	loop: true,
	centeredSlides: true,
	slidesPerView: 1,
	spaceBetween: 1,
	fadeEffect: {
    crossFade: true
	},
	effect: 'fade',
	navigation: {
		nextEl: '.first__slider-btn--next',
		prevEl: '.first__slider-btn--prev',
	},
})