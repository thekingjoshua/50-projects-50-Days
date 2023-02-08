'use strict';
// selecting all the neededn elements
const searchIcon = document.querySelector('button'),
	container = document.querySelector('.container'),
	input = document.querySelector('input');

searchIcon.addEventListener('click', () => {
	container.classList.toggle('active'); //adding and removing the active class to the container when the user clickes the button
	input.focus(); // focusing on the input field when teh user clicks the button
});
