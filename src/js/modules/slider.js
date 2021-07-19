import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);
// import Swiper from 'swiper/bundle'; (подключение со всеми свойствами)

const slider = () => {
	const mainSlider = new Swiper('.swiper-container', {

		breakpoints: {
			993: {
				watchOverflow: true,
				slidesPerView: 5,
				loop: false,
			},
			769: {
				slidesPerView: 4,
			},
			500: {
				slidesPerView: 3,
			},
		},

		navigation: {
			nextEl: '.next',
			prevEl: '.prev',
		},


		grabCursor: true,
		slidesPerGroup: 1,
		initialSlide: 0,
		slidesPerView: 2,
		speed: 800,
	});
};
export default slider;