import {gsap, lenis, ScrollTrigger, sectionIds, sections, mobTimeline, mobTimelineIndicators, scrollToindicator} from '../scripts/setup.ts'
let pauseManualScroll = false // pause manual scroll when using the arrows

// onclick event listener for mobTimelineIndicatore
mobTimelineIndicators.forEach(mobIndicator =>{
    mobIndicator.addEventListener('click', () => {
        scrollToindicator(mobIndicator)
    })
})
// using section id to create scrollTriggers 
sectionIds.forEach(section => {
    ScrollTrigger.create({
        trigger: section,
        // start: 'top top',
        // endTrigger: '#otherID',
        // end: 'bottom 50%+=100px',
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter : () => {
            if(lenis.direction == 1) // check if scrolling down and not using the arrows
            location.hash = section
        },
        onEnterBack : () => {
            console.log('enter back is scrolling =>', lenis.isScrolling, lenis.direction)
            if(lenis.direction == -1) // check if scrolling up and not using the arrows
            location.hash = section
        },
    });
})
//////////////////////////////////////////////////////////////// 

/////////////////////////////////////////////////////////// up and down arrow navigation
// scroll functions


// sections box animation
sections.forEach(section => {
    gsap.fromTo(section.querySelectorAll('.box'),{
        xPercent : 0
    }, { 
        xPercent : 100,
        duration : 0.6,
        ease : "power1.out",
        stagger : 0.08,
        scrollTrigger: {
            trigger: section.querySelector('.box-parent'),  // Each element triggers individually
            start: "top 50%",  // Animation starts when the element is 80% in view
            end: "bottom 50%",
            // scrub : true,
            toggleActions: "play reverse play reset",  // Only plays once
            // markers : true,
        },
    });



})