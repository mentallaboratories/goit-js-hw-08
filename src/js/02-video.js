import throttle from 'lodash.throttle'

import Vimeo from '@vimeo/player'



const iframe = document.querySelector('iframe');

const player = new Vimeo(iframe);

let savedCurrentTime = 0;

const onPlay = function(data) {
    savedCurrentTime = data.seconds;

    localStorage.setItem('videoplayer-current-time', JSON.stringify(savedCurrentTime));
    // data is an object containing properties specific to that event
};

player.on('timeupdate', throttle(onPlay,1000));
  





player.getVideoTitle().then(function(title) {
    console.log('title:', title);
    console.log('on')
});
 
const time = JSON.parse(localStorage.getItem('videoplayer-current-time'))

player.setCurrentTime(time).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});