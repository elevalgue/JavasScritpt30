'use strict'; 

/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon; 
}

function skip() {
    video[this.name] = this.value;
}

function handleRangeUpdate() {
    video[this.name] = this.value; 
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100; 
    progressBar.getElementsByClassName.flexBasis = `${percent}%`;    
}

function scrub(event) {
    const scrubTime = (event.offsetx / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime; 
}


