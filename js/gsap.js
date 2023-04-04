const tLine = gsap.timeline();

// head

tLine
	.from('.head__img', {
		x: '25%',
		opacity: 0,
		duration: 0.7,
	})
	.from('.head h1', {
		x: '-25%',
		opacity: 0,
		duration: 0.5,
	})
	.from('.head p', {
		y: '25%',
		opacity: 0,
		duration: 0.5,
	})
	.from('.head ._head-btn', {
		y: '25%',
		opacity: 0,
		duration: 0.5,
	});

gsap.from('.head__decorator', {
	duration: 2,
	scale: 0.6,
	opacity: 0,
	delay: 1,
	stagger: 0.2,
	ease: 'elastic',
});

gsap.from('.head__brands', {
	scrollTrigger: {
		trigger: '.head',
		start: '60% 50% ',
	},
	y: '20%',
	opacity: 0,
	duration: 0.4,
});

gsap.from('.head__brand', {
	scrollTrigger: {
		trigger: '.head',
		start: '60% 50% ',
	},
	duration: 0.5,
	opacity: 0,
	scale: 0.1,
	delay: 0.3,
	y: '100%',
	stagger: 0.15,
	ease: 'power1.inOut',
});

// advantages

gsap.from('.advantages h2', {
	scrollTrigger: {
		trigger: '.advantages',
		start: 'top 75%',
	},
	y: '100%',
	opacity: 0,
	duration: 0.7,
	ease: 'power1.in',
});

gsap.from('.advantages .under-title', {
	scrollTrigger: {
		trigger: '.advantages',
		start: 'top 75%',
	},
	y: '100%',
	delay: 0.5,
	opacity: 0,
	duration: 0.7,
	ease: 'power1.in',
});

//markers: true,

let allRows = gsap.utils.toArray('.advantages__row');

allRows.forEach((row) => {
	let itemLeft = row.querySelector('._advantages-container-left');
	let itemRight = row.querySelector('._advantages-container-right');

	gsap.from(itemLeft, {
		scrollTrigger: {
			trigger: row,
			start: 'top 75%',
		},

		x: '-50%',
		opacity: 0,
		duration: 0.5,
		ease: 'power1.in',
	});

	gsap.from(itemRight, {
		scrollTrigger: {
			trigger: row,
			start: 'top 75%',
		},

		x: '50%',
		opacity: 0,
		duration: 0.5,
		ease: 'power1.in',
	});
});

gsap.from('.advantages__decorator', {
	scrollTrigger: {
		trigger: '.advantages__decorator',
		start: 'top 60%',
	},
	duration: 2,
	scale: 0.6,
	opacity: 0,
	ease: 'elastic',
});

// about us

let tl = gsap.timeline({
	scrollTrigger: {
		trigger: '.about',
		start: 'top 75%',
	},
});

tl.from('.about__contant-container h2', {
	x: '-50%',
	opacity: 0,
	duration: 0.5,
	ease: 'power1.in',
})
	.from('.about__contant-container .under-title', {
		x: '-50%',
		opacity: 0,
		duration: 0.5,
		ease: 'power1.in',
	})
	.from('.about__btn-white-container', {
		y: '50%',
		opacity: 0,
		duration: 0.5,
		ease: 'power1.in',
	})
	.from('.about__btn-green-container', {
		y: '50%',
		opacity: 0,
		duration: 0.5,
		ease: 'power1.in',
	})
	.from(
		'.about__card-continer',
		{
			duration: 0.5,
			opacity: 0,
			scale: 0.1,
			y: '100%',
			stagger: 0.15,
			ease: 'power1.inOut',
		},
		'1.5'
	)
	.from(
		'.about__decorator',
		{
			duration: 2,
			scale: 0.6,
			opacity: 0,
			stagger: 0.4,
			ease: 'elastic',
		},
		'0.7'
	);

// partners
let tlPartners = gsap.timeline({
	scrollTrigger: {
		trigger: '.partners',
		start: 'top 75%',
	},
});
tlPartners
	.from('.partners h2', {
		y: '50%',
		opacity: 0,
		duration: 0.5,
		ease: 'power1.in',
	})
	.from('.partners__img', {
		y: '50%',
		duration: 0.4,
		opacity: 0,
		scale: 0.1,
		delay: 0,
		stagger: 0.15,
		ease: 'power1.inOut',
	})
	.from('._partners-btn', {
		y: '50%',
		duration: 0.5,
		opacity: 0,
	});

// gallery

let tlGallery = gsap.timeline({
	scrollTrigger: {
		trigger: '.gallery',
		start: 'top 75%',
	},
});
tlGallery
	.from('.gallery h2', {
		y: '50%',
		opacity: 0,
		duration: 0.5,
		ease: 'power1.in',
	})

	.from('.gallery .swiper', {
		y: '30%',
		opacity: 0,
		duration: 0.5,
		ease: 'power1.in',
	})
	.from('.gallery__btns', {
		x: '50%',
		opacity: 0,
		duration: 0.5,
		ease: 'power1.in',
	});

// reviews

gsap.from('.reviews__decorator', {
	scrollTrigger: {
		trigger: '.reviews__decorator',
		start: 'top 75%',
	},
	duration: 2,
	scale: 0.6,
	opacity: 0,
	ease: 'elastic',
});

let tlReviews = gsap.timeline({
	scrollTrigger: {
		trigger: '.reviews',
		start: 'top 75%',
	},
});
tlGallery
	.from('.reviews h2', {
		y: '50%',
		opacity: 0,
		duration: 0.5,
		ease: 'power1.in',
	})

	.from('.reviews .under-title', {
		y: '50%',
		opacity: 0,
		duration: 0.5,
		ease: 'power1.in',
	})
	.from('.reviews__slider-container', {
		y: '30%',
		opacity: 0,
		duration: 0.5,
		ease: 'power1.in',
	});

// getStart

gsap.from('._getStart .getStart__decorator', {
	scrollTrigger: {
		trigger: '.getStart',
		start: 'top 75%',
	},
	duration: 2,
	scale: 0.6,
	opacity: 0,
	ease: 'elastic',
});

gsap.from('._getStart .getStart__ellipses', {
	scrollTrigger: {
		trigger: '.getStart',
		start: 'top 75%',
	},
	duration: 1.3,
	opacity: 0,
	rotation: '-180',
	transformOrigin: '50% 0%',
});

let tlGetStart = gsap.timeline({
	scrollTrigger: {
		trigger: '.getStart',
		start: 'top 75%',
	},
});
tlGetStart
	.from('._getStart h2', {
		y: '50%',
		opacity: 0,
		duration: 0.5,
		ease: 'power1.in',
	})

	.from('._getStart .under-title', {
		y: '50%',
		opacity: 0,
		duration: 0.5,
		ease: 'power1.in',
	})
	.from('._getStart .getStart__form', {
		y: '30%',
		opacity: 0,
		duration: 0.5,
		ease: 'power1.in',
	});
