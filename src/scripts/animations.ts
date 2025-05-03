import {gsap} from "../scripts/setup.ts"

let dissappearBottomNav = gsap.fromTo('.bottom-nav', { opacity : 1}, {
    opacity : 0,
    display : 'none',
    duration: 2,
    paused : true,
    ease: "circ.inOut"
});

export {dissappearBottomNav}