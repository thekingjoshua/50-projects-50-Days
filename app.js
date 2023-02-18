'use strict';
const smallCups = document.querySelectorAll('.cup-small'),
	liters = document.querySelector('#liters'),
	percentage = document.querySelector('#percentage'),
	remained = document.querySelector('#remained');

updateBigCup();

smallCups.forEach((cup, i) => {
	cup.addEventListener('click', () => highlightCups(i));
});

function highlightCups(i) {
	if (
		smallCups[i].classList.contains('full') &&
		!smallCups[i].nextElementSibling.classList.contains('full')
	) {
		i--;
	}
	smallCups.forEach((cup, i2) => {
		if (i2 <= i) {
			cup.classList.add('full');
		} else {
			cup.classList.remove('full');
		}
	});
	updateBigCup();
}
function updateBigCup() {
	const fullCups = document.querySelectorAll('.cup-small.full').length,
		totalCups = smallCups.length;
	console.log(totalCups);

	if (fullCups === 0) {
		percentage.style.visibility = 'hidden';
		percentage.style.height = 0;
	} else {
		percentage.style.visibility = 'visible';
		percentage.style.height = `${(fullCups / totalCups) * 330}px`;
		percentage.innerText = `${(fullCups / totalCups) * 100}%`;
	}
	if (fullCups === totalCups) {
		remained.style.visibility = 'hidden';
		remained.style.height = 0;
	} else {
		remained.style.visibility = 'visible';
		liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
	}
}
