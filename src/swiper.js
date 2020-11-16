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
});

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
});

// play video button
const playButtonFirst = document.querySelectorAll('.main-slider__play');

playButtonFirst.forEach((el) => {
	el.addEventListener('click', (e) => {
		let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
		video.play();
		e.currentTarget.style.display = 'none';
		setTimeout(() => {
			video.volume = 0.5;
		}, 1000);
	});
});


mySwiperFirst.on('transitionEnd', function () {
	let videos = document.querySelectorAll('.first__slider video');
	videos.forEach((el) => {
		el.pause();
		el.currentTime = 0;
	});
	playButtonFirst.forEach((el) => {
		el.style.display = 'block';
	});
});
