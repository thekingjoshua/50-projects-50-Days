'use strict';
// selecting all the needed elements

const btns = document.querySelectorAll('.btn'),
	prev = document.querySelector('.prev'),
	next = document.querySelector('.next'),
	progressBar = document.querySelector('.progress'),
	circles = document.querySelectorAll('.circle'),
	actives = document.querySelectorAll('.active');

let width = 0,
	currentCircleIndex = 1;
btns.forEach(btn => {
	btn.addEventListener('click', ({ target }) => {
		let nextBtn = target.classList.contains('next'); // the defining a boolean value for the next button
		if (nextBtn) {
			// the code below will be executed if the next button is clicked
			if (width > 66) return; // exiting the code when the width is greater than 100
			width += 33; // incrementing the width by 33
			progressBar.style.width = `${width}%`;
			currentCircleIndex++; // incrementing the current circle index
			circles[currentCircleIndex - 1].classList.add('active');
			console.log(currentCircleIndex);
			if (currentCircleIndex === 1) {
				// if it is on the first step the disabled attribute will be added
				prev.disabled = true;
			} else if (currentCircleIndex === 4) {
				// if it is not on the first step the disabled attribute will be removed
				next.disabled = true;
			} else {
				prev.disabled = false;
				next.disabled = false;
			}
		} else {
			// the code below will be executed if the prev button is clicked
			if (width <= 0) return; // exiting the code when the width is greater than 100
			width -= 33; // decrementing the width by 33
			progressBar.style.width = `${width}%`;
			currentCircleIndex--; // decrementing the current circle index
			circles[currentCircleIndex].classList.remove('active');
			if (currentCircleIndex === 1) {
				// if it is on the first step the disabled attribute will be added
				next.disabled = false;
				prev.disabled = true;
			} else if (currentCircleIndex < 4) {
				// if it is below the fourth step the disabled attribute on next btn will be removed
				next.disabled = false;
			} else {
				// if it is not on the first step and is above the fourth step the disabled attribute on the prev btn will be removed,
				// while the attribute on the next btn will be added
				prev.disabled = false;
				next.disabled = true;
			}
		}
	});
});
