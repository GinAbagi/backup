const animationEnter = (container) => {
    return gsap.from(container, { autoAlpha: 0, duration: 1, clearProps: 'all', ease: 'none'});
}

const animationLeave = (container, done) => {
    return gsap.to(container, { autoAlpha: 0, duration: 1, clearProps: 'all', ease: 'none', onComplete: () => done()});
}

barba.init({
    transitions: [
        {
            once({next}){
                animationEnter(next.container);
            },
            leave({current}){
                console.log('leaving');
                const done = this.async();
                animationLeave(current.container, done);
            },
            enter({next}){
                console.log('entering');
                animationEnter(next.container);
            }
        }
    ]
})