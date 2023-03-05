import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const currentTime = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));
   
function onPlay ({ seconds }) {
    localStorage.setItem(currentTime, seconds)
}
player.setCurrentTime(localStorage.getItem(currentTime));