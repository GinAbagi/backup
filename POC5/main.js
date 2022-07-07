let tl = gsap.timeline({

    scrollTrigger: {
      trigger: "#section2",
      pin:true,
      start: "top top",
      end: "+=150%",
      scrub: 1,
    },
    defaults:{duration:1, ease:'none'}
  });
  tl.from('.fromLeft',{ x:-400, opacity: 0})
  tl.to('.fromLeft',{width:'100%', height: '90%'})
  tl.from('.fromRight',{ x:400, opacity: 0})
  tl.to('.fromRight',{width:'100%', height: '100%'})
  tl.to({},{duration:1})

