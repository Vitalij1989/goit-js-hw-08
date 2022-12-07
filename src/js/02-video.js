import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(saveTime, 1000));

function saveTime(data) {
  console.log(data);
  localStorage.setItem(STORAGE_KEY, data.seconds);
}
player.setCurrentTime;
