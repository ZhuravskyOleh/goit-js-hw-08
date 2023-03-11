// import player from '@vimeo/player';

// const player = new Vimeo.Player(iframe);

   
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime() {
  player.getCurrentTime().then(function(seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
});


