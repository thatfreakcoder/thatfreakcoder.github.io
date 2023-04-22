let play = false;
var bg_music = new Audio('bg_music.mp3');
const imgDesktop = document.getElementById('img-desktop')
const imgMobile = document.getElementById('img-mobile')

document.getElementById('play').addEventListener('click', function() {
    if (play === false) {
        bg_music.loop = true;
        bg_music.play();
        document.getElementById('icon').setAttribute('src', 'unmute.png');
        play = true;
        bg_music.volume = 0.5;
    } else {
        bg_music.pause();
        document.getElementById('icon').setAttribute('src', 'mute.png');
        play = false;
    }
});

document.addEventListener('scroll', function(event) {
    let scroll = window.scrollY;
    let blur = scroll * 0.05;
    let opacity = 1 - (scroll * 0.005)
    imgDesktop.style.filter = `blur(${blur}px)`;
    imgDesktop.style.opacity = `${opacity}`;

    let blur2 = scroll * 0.05;
    let opacity2 = 1 - (scroll * 0.005)
    imgMobile.style.filter = `blur(${blur2}px)`;
    imgMobile.style.opacity = `${opacity2}`;
});