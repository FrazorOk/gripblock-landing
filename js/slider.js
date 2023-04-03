const swiper = new Swiper('.swiper', {
	spaceBetween: 20,
	autoHeignt: false,
	initialSlide: 0,
	slidesPerView: 1,
	grid: {
		rows: 1,
	},

	navigation: {
		nextEl: '.swiper-buttonNext',
		prevEl: '.swiper-buttonPrev',
	},

	breakpoints: {
		800: {
			slidesPerView: 3,
			spaceBetween: 20,
			grid: {
				rows: 2,
			},
			autoHeignt: false,
			initialSlide: 0,
		},

		600: {
			slidesPerView: 2,
			spaceBetween: 20,
			grid: {
				rows: 2,
			},
			autoHeignt: false,
			initialSlide: 0,
		},
	},
});

const swiper2 = new Swiper('.reviews__slider', {
	spaceBetween: 30,
	slidesPerView: 1,
	loop: true,

	navigation: {
		nextEl: '.swiper-buttonRight',
		prevEl: '.swiper-buttonLeft',
	},

	breakpoints: {
		900: {
			spaceBetween: 40,
			slidesPerView: 3,
		},

		680: {
			spaceBetween: 30,
			slidesPerView: 2,
		},
	},
});
