'use strict';
// Selecting all the needed elements
const container = document.querySelector('.container'),
	panels = document.querySelectorAll('.panel'),
	texts = document.querySelectorAll('h3');

// Expanding functionality
(function () {
	container.addEventListener('click', ({ target }) => {
		let closest = target.closest('.panel'); // selecting the closest elements with the class of panel
		if (!closest) return; // if the clicked target is not the closest elements the code is exited
		panels.forEach(panel => panel.classList.remove('active')); // making the width of all the panels small
		texts.forEach(text => (text.style.display = 'none')); // hidding the text of each panel 
		closest.classList.add('active'); // expanding the width of all the panels
		setTimeout(() => {
			closest.children[0].style.display = 'block';
		}, 700); // displaying the text after 7 milliseconds 
	});
})();
