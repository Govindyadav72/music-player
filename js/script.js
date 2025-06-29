const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const songTitle = document.getElementById('song-title');
const sliderImages = document.querySelectorAll('.slider-image');
const audio = document.getElementById('audio');

const songs = [
    'Khud ko tere paas.m4a',
    'Aanewale kal.m4a',
    'Ajnabi hawayen.m4a',
    'Apna mujhe tu laga.m4a',
    'Tera hi bs hona chahu.m4a'
];

const images = [
    'images/image (1).jpg',
    'images/image (2).jpg',
    'images/image (3).jpg',
    'images/image (4).jpg',
    'images/image (5).jpg',
];

let songIndex = 0;

function loadSong(song, image) {
    songTitle.innerText = song;
    audio.src = `songs/${song}`;
    sliderImages.forEach((img, index) => {
        img.style.transform = `translateX(-${songIndex * 100}%)`;
        img.src = images[songIndex];
    });
}

function playSong() {
    audio.play();
    playBtn.innerText = 'Pause';
}

function pauseSong() {
    audio.pause();
    playBtn.innerText = 'Play';
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex], images[songIndex]);
    playSong();
}

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex], images[songIndex]);
    playSong();
}

function updateProgress() {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);

const slideLeftBtn = document.getElementById('slide-left');
const slideRightBtn = document.getElementById('slide-right');

slideLeftBtn.addEventListener('click', prevSong);
slideRightBtn.addEventListener('click', nextSong);

loadSong(songs[songIndex], images[songIndex]);