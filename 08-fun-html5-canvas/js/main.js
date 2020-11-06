'use strict';

const canvas = document.querySelector('#draw');

const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 100;

let isDrawing = false; 
let lastX = 0; 
let lastY = 0; 
let hue = 0;
let direction = true; 

function draw(event) {
    if (!isDrawing) return;// stop the fn from running when they are not mouse down
    console.log(event);
    context.strokeStyle = `hsl$({hue}, 100%, 50%)`;
    context.beginPath();
    // start from
    context.moveTo(lastX, lastY);
    // go to 
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
    [lastX, lastY] = [event.offsetX, event.offsetY];
    hue++; 
    if (hue >= 360) {
        hue = 0;
    }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY];
});

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
