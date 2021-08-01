import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);

const slider = () => {
	const mainSlider = new Swiper('.glazing-slider', {

		breakpoints: {
			993: {
				watchOverflow: true,
				slidesPerView: 5,
			},
			769: {
				slidesPerView: 4,
			},
			500: {
				slidesPerView: 3,
			},
		},

		navigation: {
			nextEl: '.glazing-slider__next',
			prevEl: '.glazing-slider__prev',
		},


		grabCursor: true,
		slidesPerGroup: 1,
		initialSlide: 0,
		slidesPerView: 2,
		speed: 800,
	});

	const secondSlider = new Swiper('.decoration-slider', {

		breakpoints: {
			577: {
				watchOverflow: true,
				slidesPerView: 4,
			},
			440: {
				slidesPerView: 3,
			},
		},

		grabCursor: true,
		slidesPerGroup: 1,
		initialSlide: 0,
		slidesPerView: 2,
		speed: 800,
	});
};
export default slider;