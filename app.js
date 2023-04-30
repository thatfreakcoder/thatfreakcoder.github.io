let play = false;
var bg_music = new Audio('./assets/music/bg_music.mp3');

document.getElementById('play').addEventListener('click', function() {
    if (play === false) {
        bg_music.loop = true;
        bg_music.play();
        document.getElementById('icon').setAttribute('src', './assets/img/unmute.png');
        play = true;
        bg_music.volume = 0.5;
    } else {
        bg_music.pause();
        document.getElementById('icon').setAttribute('src', './assets/img/mute.png');
        play = false;
    }
});