'use strict';

const sliderContainer = document.querySelector('.slider__container'),
	slideRight = document.querySelector('.right__slide'),
	slideLeft = document.querySelector('.left__slide'),
	upButton = document.querySelector('.up__button'),
	downButton = document.querySelector('.down__button'),
	slidesLenght = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;
slideLeft;
slideLeft.style.top = `-${(slidesLenght - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = direction => {
	const sliderHeight = sliderContainer.clientHeight;

	if (direction === 'up') {
		activeSlideIndex++;
		if (activeSlideIndex > slidesLenght - 1) {
			activeSlideIndex = 0;
		}
	} else if (direction === 'down') {
		activeSlideIndex--;
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesLenght - 1;
		}
	}
	slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
	slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};
