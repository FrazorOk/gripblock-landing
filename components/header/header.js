const menuBody = document.querySelector('.menu__body');
const menuIcon = document.querySelector('.menu__icon');
let navLinks = document.querySelectorAll('.menu__list a');

let toggleBurgerMenu = () => {
	document.body.classList.toggle('_lock');
	menuBody.classList.toggle('_active');
	menuIcon.classList.toggle('_active');
};

// burger menu
if (menuIcon) {
	menuIcon.addEventListener('click', () => {
		toggleBurgerMenu();
	});
}

// slow scroll on click
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks) {
	menuLinks.forEach((menuLink) => {
		menuLink.addEventListener('click', (e) => {
			const link = e.target;

			if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
				const gotoBlock = document.querySelector(link.dataset.goto);
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(`header`).offsetHeight;

				if (menuIcon.classList.contains('_active')) {
					toggleBurgerMenu();
				}
				window.scrollTo({
					top: gotoBlockValue,
					behavior: 'smooth',
				});
				e.preventDefault();
			}
		});
	});
}
