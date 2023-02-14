'use strict';
const toggles = document.querySelectorAll('.faq__toggle');

toggles.forEach(toggle => {
	toggle.addEventListener('click', () => {
		console.log('okay');
		toggle.parentNode.classList.toggle('active');
	});
});
