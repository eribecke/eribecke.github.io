import { animate, createDraggable, spring } from 'https://esm.sh/animejs';

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


