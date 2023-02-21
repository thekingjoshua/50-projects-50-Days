'use strict';
const hourEl = document.querySelector('.hour'),
	minuteEl = document.querySelector('.minute'),
	secondEl = document.querySelector('.second'),
	timeEl = document.querySelector('.time'),
	toggle = document.querySelector('.toggle');
let dateEl = document.querySelector('.date');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

toggle.addEventListener('click', ({ target }) => {
	const html = document.querySelector('html');
	if (html.classList.contains('dark')) {
		html.classList.remove('dark');
		target.textContent = 'Dark Mode';
	} else {
		html.classList.add('dark');
		target.textContent = 'Light Mode';
	}
});

const setTime = () => {
	const time = new Date(),
		month = time.getMonth(),
		day = time.getDay(),
		date = time.getDate(),
		hours = time.getHours(),
		hoursForClock = hours % 12,
		minutes = time.getMinutes(),
		seconds = time.getSeconds(),
		amp = hours >= 12 ? 'PM' : 'AM';

	hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		hoursForClock,
		0,
		11,
		0,
		360
	)}deg)`;
	minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
	secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

	timeEl.textContent = `${String(hoursForClock).padStart(2, 0)}:${String(minutes).padStart(
		2,
		0
	)} ${amp}`;
	dateEl.innerHTML = `${days[day]}, ${months[month]} <span class='circle'>${date}</span>`;
};

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
	console.log(((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min);
};
setTime();

setInterval(setTime, 1000);
