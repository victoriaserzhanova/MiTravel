import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

let mySwiper = new Swiper('.swiper-container',  {
	loop: true,
	loopedSlides: 3,
	centeredSlides: true,
	slidesPerView: 'auto',
	spaceBetween: 105,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})