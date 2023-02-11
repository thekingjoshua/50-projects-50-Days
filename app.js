'use strict';

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const containerEl = document.querySelector('.container');
sounds.forEach(sound => {
	const btn = document.createElement('button');
	btn.classList.add('btn');

	btn.innerHTML = sound;

	btn.addEventListener('click', () => {
        stopSong();
		const audioEl = document.querySelector(`#${sound}`);
		audioEl.play();
	});

	containerEl.appendChild(btn);
});

function stopSong() {
	sounds.forEach(sound => {
		const song = document.querySelector(`#${sound}`);
		song.pause();
		song.currentTime = 0;
	});
}
