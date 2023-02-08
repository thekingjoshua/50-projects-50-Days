'use strict';
// selecting the required elements

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', init);

function init() {
	boxes.forEach((box, i) => {
		let trigger = (window.innerHeight / 5) * 4;
		let boxTop = box.getBoundingClientRect().top;
		console.log(`Trigger:${trigger}`, `Boxtop:${boxTop}`, `number: ${i}`);
		if (trigger < boxTop) {
			box.classList.add('show');
		} else {
			box.classList.remove('show');
		}
	});
}
