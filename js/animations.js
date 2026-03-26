import { animate, createDraggable, spring } from 'https://esm.sh/animejs';


const cursorBuddy = document.getElementById("buddy");
let currX = 0;
let currY = 0;
const distanceOffset = -20;

document.addEventListener('mousemove', e => {
    cursorBuddy.style.transform = `translate(${e.clientX + (distanceOffset + window.scrollX)}px, ${e.clientY + (distanceOffset + window.scrollY)}px)`;
    currX = e.clientX + distanceOffset;
    currY = e.clientY + distanceOffset;

});

document.addEventListener('scroll', e => {
    cursorBuddy.style.transform = `translate(${currX + window.scrollX}px, ${currY + window.scrollY}px)`;
});




let jeffry = document.getElementsByClassName("logo");



animate(jeffry, {
    y: {
        to: '1em',
    },
    duration: 1650,
    ease: 'inOut(1.68)',
    loop: true,
    alternate: true


});


