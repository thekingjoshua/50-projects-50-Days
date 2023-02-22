'use strict';
const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
	button.addEventListener('click', function (e) {
		const x = e.clientX,
			y = e.clientY,
			buttonTop = e.target.offsetTop,
			buttonLeft = e.target.offsetLeft,
			xInside = x - buttonLeft,
			yInside = y - buttonTop,
			cirle = document.createElement('span');
		cirle.classList.add('circle');
		cirle.style.top = yInside + 'px';
		cirle.style.left = xInside + 'px';

		this.appendChild(cirle);
	});
});
