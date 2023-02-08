'use strict';
// selecting all the needed elements

const closeBtn = document.querySelector('.close'),
	openBtn = document.querySelector('.open'),
	container = document.querySelector('.container');

// open Button Functionality
openBtn.addEventListener('click', () => container.classList.add('show__nav'));

// close Button Functionality
closeBtn.addEventListener('click', () => container.classList.remove('show__nav'));
