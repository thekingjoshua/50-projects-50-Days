'use strict';
const images = document.querySelector('#imgs'),
	leftBtn = document.querySelector('#left'),
	rightBtn = document.querySelector('#right'),
	img = document.querySelectorAll('#imgs img');

let idx = 0,
	interval = setInterval(initFn, 2000);

function initFn(params) {
	idx++;
	changeImage();
}

function changeImage() {
	if (idx > img.length - 1) {
		idx = 0;
	} else if (idx < 0) {
		idx = img.length - 1;
	}
	images.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
	clearInterval(interval);
	interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
	idx++;
	changeImage();
	resetInterval();
});
leftBtn.addEventListener('click', () => {
	idx--;
	changeImage();
	resetInterval();
});
