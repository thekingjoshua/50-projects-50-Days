'use strict';
// selecting the required elements

const container = document.querySelector('.container'),
	text = document.querySelector('.text');

let value = 0;

let interval = setInterval(increment, 30); // increasing the value every 1000/30 seconds

function increment() {
	value++; // incrementing the value
	text.innerHTML = `${value}%`; // updating the text
	if (value > 99) clearInterval(interval); // the value is 100 the counting is stopped
	text.style.opacity = `${scale(value, 0, 100, 1, 0)}`;
	container.style.filter = `blur(${scale(value, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
	console.log(((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min);
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
// scale(0, 0, 100, 30, 0);
