
import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Vimeo(iframe);

player.on('play', function() {
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
    console.log('on')
});
 