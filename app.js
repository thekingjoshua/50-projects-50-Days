'use strict';
const toastButton = document.querySelector('#button'),
	toasts = document.querySelector('#toasts');

const toastMessagesArr = [
	'Toast Message One',
	'Toast Message Two',
	'Toast Message Three',
	'Toast Message Four',
	'Toast Message Five',
	'Toast Message Six',
	'Toast Message Seven',
	'Toast Message Eight',
	'Toast Message Nine',
	'Toast Message Ten',
];
let toastMessagesIdx;

const colors = [
	'red',
	'blue',
	'orange',
	'green',
	'purple',
	'indigo',
	'brown',
	'darkslategray',
	'violet',
	'black',
];

const Hello = `<h2> Hello </h2>`;

toastButton.addEventListener('click', notificationFn);

let toastHTML;
function notificationFn() {
	toastHTML = document.createElement('div');
	toastHTML.innerHTML = messagesFn();
	toastControl(5, toastHTML);
	removeToast(2, toastHTML);
}

function messagesFn() {
	toastMessagesIdx = Math.floor(Math.random() * toastMessagesArr.length);
	return toastMessagesArr[toastMessagesIdx];
}

function messagesColorFn() {
	return colors[toastMessagesIdx];
}

function toastControl(toastNum, toastHTMLPara) {
	if (toasts.children.length < toastNum) {
		toasts.append(toastHTMLPara);
	}
	toastHTMLPara.classList.add('toast');
	toastHTMLPara.style.color = messagesColorFn();
}

function removeToast(sec, toastHTMLPara) {
	setTimeout(() => {
		toastHTMLPara.remove();
	}, sec * 1000);
}
