'use strict';
const textEl = document.querySelector('#text'),
	speedEl = document.querySelector('#speed'),
	text = "I'm a developer!";

let idx = 1,
	speed = 300 / speedEl.value;

displayText();

function displayText() {
	textEl.innerHTML = text.slice(0, idx);

	idx++;

	if (idx > text.length) {
		idx = 1;
	}
	setTimeout(displayText, speed);
}

speedEl.addEventListener('input', ({ target }) => (speed = 300 / target.value));
