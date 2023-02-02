import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.getElementById('vimeo-player');

const keyForLocalStorage = 'videoplayer-current-time';

const player = new Player(iframe);

player.on('timeupdate', throttle(saveLocalStorage, 600));

player.setCurrentTime(loadLocalStorageValue(keyForLocalStorage));

function saveLocalStorage({ seconds }) {
  localStorage.setItem(keyForLocalStorage, seconds);
}

function loadLocalStorageValue(key) {
  const getLocalStorageKey = localStorage.getItem(key);
  return getLocalStorageKey === null
    ? undefined
    : JSON.parse(getLocalStorageKey);
}
