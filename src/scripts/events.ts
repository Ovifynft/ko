import {lenis, sectionIds, scrollToindicator, mobTimelineIndicators} from '../scripts/setup.ts'

// track current active section and section after and before active section
let currHashIndx = null
let upIndx =  null
let downIndx = null

function scrollUp(){
    let scrollTo = sectionIds[upIndx]
    lenis.scrollTo(scrollTo, {
        duration: 0,
        onStart : () => {
            // pauseManualScroll = true // pause manual scroll when using the arrows
            location.hash = scrollTo;
            // console.log('up clicked')
        },
    });
    // window.dispatchEvent(new CustomEvent('hash-update', { detail: downArrow.getAttribute('href').slice(1) }));
}

function scrollDown(){
    console.log('hit here 3')
    let scrollTo = sectionIds[downIndx]
    lenis.scrollTo(scrollTo, {duration: 2.5, 
        easing : (x) => x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2,
        onStart : () => {
            console.log('hello world')
            location.hash = scrollTo;
            // pauseManualScroll = true 
        },
    });
    // window.dispatchEvent(new CustomEvent('hash-update', { detail: upArrow.getAttribute('href').slice(1) }));
}

//scroll rvrnt listener
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowDown') {
        scrollDown()
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        scrollUp()
    }
});

// check location hase every 100ms and update the other guys
let lastHash = null;
setInterval(() => {
    if (location.hash !== lastHash) {
        lastHash = location.hash
        currHashIndx = sectionIds.indexOf(location.hash) // get current hash index
        scrollToindicator(mobTimelineIndicators[currHashIndx])
        // mobTimelineIndicators.find(mobTimelineIndicator => mobTimelineIndicator.getAttribute('href') === location.hash)?.click()
        upIndx =  currHashIndx != 0? currHashIndx - 1 : 0
        downIndx = currHashIndx != sectionIds.length - 1 ? currHashIndx + 1 : sectionIds.length - 1
    }
    // console.log(location.hash)
}, 100); 