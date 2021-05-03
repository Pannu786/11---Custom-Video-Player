//selecting elements  ===========>

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

//Creating FUn functions  ===========>

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateBtn() {
  const icon = this.paused ? '►' : '❚ ❚';
  console.log(icon);

  toggle.textContent = icon;
}

//Hooking up functionality to buttons and screen ===========>

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);

toggle.addEventListener('click', togglePlay);
