'use strict';
// selecting the required elements

const leftContainer = document.querySelector('.left'),
	rightContainer = document.querySelector('.right'),
	mainContainer = document.querySelector('.container');

leftContainer.addEventListener('mouseenter', () => {
	mainContainer.classList.add('hover__left');
	mainContainer.classList.remove('hover__right');
});
leftContainer.addEventListener('mouseenter', () => mainContainer.classList.add('hover__left'));
rightContainer.addEventListener('mouseenter', () => {
	mainContainer.classList.add('hover__right');
	mainContainer.classList.remove('hover__left');
});
