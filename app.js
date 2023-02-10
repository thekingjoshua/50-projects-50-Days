'use strict';
const labels = document.querySelectorAll('label');

(function () {
	labels.forEach(label => {
		label.innerHTML = label.textContent
			.split('')
			.map((letter, i) => `<span style='transition-delay:${i * 50}ms'>${letter}</span>`)
			.join('');
	});
})();
