'use strict';
const fill = document.querySelector('.fill'),
	empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
	empty.addEventListener('dragover', dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
}

function dragStart() {
	this.className += ' hold';
	setTimeout(() => (this.className = 'invisble'), 0);
}
function dragEnd() {
	this.className = 'fill';
}
function dragOver(e) {
	e.preventDefault();
}
function dragEnter(e) {
	e.preventDefault();
	this.className += ' hovered';
}
function dragLeave() {
	this.className = 'empty';
}
function dragDrop() {
	this.className = 'empty';
	this.append(fill);
}
console.log(document.body.clientWidth);
if (document.body.clientWidth < 1024) {
	document.querySelector('.error__modal').style.display = 'flex';
} else {
	document.querySelector('.error__modal').style.display = 'none';
}
