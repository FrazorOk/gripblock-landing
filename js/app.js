const forms = document.querySelectorAll('.getStart__form');

forms.forEach((form) => {
	const email = form.querySelector('.getStart__email');
	const validText = form.querySelector('.getStart__under-input');
	const popup = document.querySelector('.select-popup');

	let validRegex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		if (email.value) {
			if (email.value.match(validRegex)) {
				if (email.classList.contains('_novalid')) {
					email.classList.remove('_novalid');
				}

				popup.classList.add('active');
				setTimeout(() => {
					popup.classList.remove('active');
				}, 1500);

				console.log(email.value);

				email.value = '';
				validText.innerHTML = '';

				const popupActive = document.querySelector('.popup.open');
				if (popupActive) {
					popupClose(popupActive);
				}
			} else {
				validText.innerHTML = 'Invalid email';
				email.classList.add('_novalid');
			}
		} else {
			validText.innerHTML = 'Required';
			email.classList.add('_novalid');
		}
	});
});
