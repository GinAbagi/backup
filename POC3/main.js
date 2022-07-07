pageTransition = () => {
    var timeline = gsap.timeline();

    timeline.to("header", {
        zIndex: 1
    });

    timeline.to(".page-transition", {
        duration: 1,
        width: "100%",
        right: "0%"
    });

    timeline.to(".page-transition", {
        duration: .8,
        width: "100%",
        right: "100%",
        delay: .3
    });

    timeline.set(".page-transition", {
        right: "-100%"
    });
}

mainAnimation = () => {
    var timeline = gsap.timeline();
    
    timeline.from(".content h1, .nav li", {
        duration: 2,
        x: 150,
        opacity: 0,
        delay: .8
    });
}

delay = (n) => {
    n = n || 2000;
    return new Promise((done)=> {
        setTimeout(()=> {
            done();
        }, n);
    })
}

barba.init({
    sync: true,
    transitions: [
        {
            async leave(data){
                const done = this.async();
                pageTransition();
                await delay(500);
                done();
            },

            async enter (data){
                mainAnimation();
            },

            async once(data){
                mainAnimation();
            }
        }
    ]
});