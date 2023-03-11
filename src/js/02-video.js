// import player from '@vimeo/player';

// const player = new Vimeo.Player(iframe);

   
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

document.addEventListener('DOMContentLoaded', setCurrentTime);

const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime() {
  player.getCurrentTime().then(function(seconds) {
    localStorage.setItem(STORAGE_KEY, seconds);
  });
}


 function setCurrentTime() {
  const savedTime = localStorage.getItem(STORAGE_KEY);
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
};


