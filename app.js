'use strict';
const toggle = document.querySelector('#toggle'),
	nav = document.querySelector('#nav');

toggle.addEventListener('click', () => nav.classList.toggle('active'));
