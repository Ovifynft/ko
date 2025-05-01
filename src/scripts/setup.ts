import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
gsap.ticker.lagSmoothing(0);

const lenis = new Lenis({
    // anchors: true,
    autoRaf: true,
    syncTouch: true,
    syncTouchLerp : 0.04,
});

gsap.config({
    nullTargetWarn: false,
})

document.addEventListener("click", function (e) {
    const currentScroll = window.scrollY;

    let Etarget = e.target as HTMLElement
    const anchor = Etarget.closest("a[href^='#']");
    if (!anchor) return;

    e.preventDefault();
    const targetId = anchor.getAttribute("href");
    const target = document.querySelector(targetId) as HTMLElement;

    if (target) {
        let targetPos = target.offsetTop;

        if(targetPos < currentScroll) //scroll up
            lenis.scrollTo(target, {duration: 0, onStart : () => {
                // pauseManualScroll = true
            }});
        else // scroll down
            lenis.scrollTo(target, {duration: 2.5, 
            easing : (x) => x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2,
            onStart : () => {
                // pauseManualScroll = true
            },
        });

        history.pushState(null, "", targetId);
    }
});

// get all the sections and sectionsId
const sections = Array.from(document.querySelectorAll('section[id], div[id], footer[id]') as NodeListOf<HTMLElement>)
const sectionIds = sections.map(section => section.getAttribute('id')).filter(id => id !== null).map(id => '#'+id) as string[]

// header indicators and scroll for mobile
let scrollTl = gsap.timeline()
let mobTimeline = document.querySelector('.mob-timeline')
let mobTimelineIndicators = Array.from(document.querySelectorAll('.mob-timeline-indicator') as NodeListOf<HTMLElement>)

// function that scrolls active mobile timeline into view
function scrollToindicator(indicator){
    if(mobTimeline && indicator){
        scrollTl.kill();
        scrollTl = gsap.timeline();
        let centerPos = mobTimeline.clientWidth / 2 //get center offset of indicator
        let indicatorPos = indicator.getBoundingClientRect().left - mobTimeline.getBoundingClientRect().left //check if indicator left or right of center
        let scroll =  indicatorPos - centerPos
        gsap.to(mobTimelineIndicators,{
            backgroundColor : '#e5e7eb'
        })
        gsap.to(indicator,{
            backgroundColor : 'black'
        })
        scrollTl.to('.mob-timeline',{
            // opacity : 0,
            // scrollLeft: '0', 
            scrollLeft : mobTimeline.scrollLeft + scroll,
            duration: 1
        })
    }
}

export {lenis, gsap, ScrollTrigger, sections, sectionIds, scrollToindicator, mobTimeline, mobTimelineIndicators}
