'use strict';

const container = document.querySelector('.container'),
	// squares = `<div class="square"></div>`,
	colors = ['red', 'orange', 'blue', 'yellow', 'green', 'purple', 'brown'];

function insertSquares() {
	const square = document.createElement('div');
	square.classList.add('square');

	container.appendChild(square);

	square.addEventListener('mouseover', () => {
		setColor(square);
	});
	square.addEventListener('mouseout', () => {
		removeColor(square);
	});
}

for (let i = 0; i < 500; i++) {
	insertSquares();
}

function setColor(el) {
	const color = getRandomColor();
	el.style.background = color;
	el.style.boxShadow = `0 0 0.2rem ${color}, 0 0 1rem ${color}`;
}

function removeColor(el) {
	const color = getRandomColor();
	el.style.background = `#1d1d1d`;
	el.style.boxShadow = `0 0 0.2rem #111`;
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}
