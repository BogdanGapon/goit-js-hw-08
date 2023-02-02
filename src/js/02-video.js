import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.getElementById('vimeo-player');

const keyForLocalStorage = 'videoplayer-current-time';

const player = new Player(iframe);

player.on('timeupdate', throttle(saveLocalStorage, 600));

updateTime(keyForLocalStorage);

function saveLocalStorage({ seconds }) {
  localStorage.setItem(keyForLocalStorage, seconds);
}

function updateTime(key) {
  const getCurrentTime = localStorage.getItem(key);
  if (getCurrentTime) {
    player.setCurrentTime(getCurrentTime);
  }
}
