// scroll trigger animation // now switched off 

// gsap.registerPlugin(ScrollTrigger);
// // scroll trigger animation
// gsap.utils.toArray('.section').forEach(section => {
//   ScrollTrigger.create({
//     trigger: section,
//     start: 'top top',
//     pin: true,
//     pinSpacing: false
//   });
// });


// homepage animations 
// body 
gsap.from('.title', { 
    y: -50,
    opacity: 0,
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
    duration: 1,
    opacity: 0,
    x: 100,
    ease: 'Power2.easeOutIn',
    delay: 0.5
});

gsap.from('.scrl-button', {
    duration: 1,
    opacity: 0,
    x: 100,
    ease: 'Power1.easeOutIn',
    delay: 1,
});


// header animation
gsap.from('.header', {
    duration: 1,
    opacity: 0,
    ease: 'Power2.easeOutIn',
    delay: 1
});

gsap.from('.nav-list ul li', 1, {
    y: -100,
    opacity: 0,
    stagger: .2
});

// easy fade in of the main page (home)

const animationEnter = (container) => {
    return gsap.from(container, { autoAlpha: 0, duration: 2, clearProps: 'all', ease: 'none'});
}


barba.init({
    transitions: [
        {
            once({next}){
                animationEnter(next.container);
            }
        }
    ]
})

// scrolltrigger moves in text and pictures in about section
let tl = gsap.timeline({

    scrollTrigger: {
      trigger: "#about",
      pin:true,
      start: "top top",
      end: "+=150%",
      scrub: 1,
    },
    defaults:{duration:1, ease:'none'}
  });
  tl.from('.fromLeft',{ x:-400, opacity: 0})
  tl.to('.fromLeft',{width:'100%', height: '90%'})
  tl.from('.fromRight',{ x:500, opacity: 0})
  tl.to('.fromRight',{width:'100%', height: '100%'})
  tl.to({},{duration:0.8})