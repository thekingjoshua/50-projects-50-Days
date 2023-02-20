'use strict';
const body = document.body,
	slides = document.querySelectorAll('.slide'),
	leftBtn = document.querySelector('#left'),
	rightBtn = document.querySelector('#right');

let activeSlide = 0;

const setBgToBody = () => {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};

rightBtn.addEventListener('click', () => {
	activeSlide++;

	if (activeSlide > slides.length) {
		activeSlide = 0;
	}

	setBgToBody();
	setActiveSlide();
});
leftBtn.addEventListener('click', () => {
	activeSlide--;

	if (activeSlide < 0) {
		activeSlide = slides.length - 1;
	}

	setBgToBody();
	setActiveSlide();
});

setBgToBody();

const setActiveSlide = () => {
	slides.forEach(slide => {
		slide.classList.remove('active');
	});
	slides[activeSlide].classList.add('active');
};
