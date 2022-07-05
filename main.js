
// body 
gsap.from('.title', { 
    opacity: 0, 
    duration: 0.7,
    y: -50, 
    ease: 'Power2.easeOutIn',
    delay: 0.3
});

gsap.from('.media-title', { 
    duration: 0.7, 
    opacity:0,
    y:50, 
    ease: 'Power2.easeOutIn',
    delay: 0.3
});

gsap.from('.orange-title', {
    duration: 0.7,
    opacity: 0,
    y: 50,
    ease: 'Power2.easeOutIn',
    delay: 0.3,
});

gsap.from('.home-image', {
    duration: 0.7,
    opacity: 0,
    x: 100,
    ease: 'Power1.easeOutIn',
    delay: 0.3,
});

gsap.from('.scrl-button', {
    duration: 1,
    opacity: 0,
    x: 100,
    ease: 'Power1.easeOutIn',
    delay: 1,
});


// header
gsap.from('.header', {
    duration: 1,
    opacity: 0,
    ease: 'Power2.easeOutIn',
    delay: 1
});

gsap.from('.nav-list', {
    duration: 1,
    opacity: 0,
    ease: 'Power2.easeOutIn',
    delay: 1
});