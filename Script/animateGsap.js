console.log('gsap')

TweenMax.from('#coffee .info-box', 1, {
    delay: .5,
    opacity:0,
    borderRadius:'100%',
    ease: Circ.easeInOut
})


TweenMax.from('.header .title', 2, {
    delay: .6,
    x: -700,
    ease: Circ.easeInOut
})

TweenMax.from('.header .subtitle', 2, {
    delay: .8,
    x: -700,
    ease: Circ.easeInOut
})


TweenMax.from('.header .subtitle2', 2, {
    delay: 1,
    x: -700,
    ease: Circ.easeInOut
})


TweenMax.from('.header', 1, {
    delay: .5,
    height: 600,
    ease: Power3.easeInOut
})




TweenMax.from('.shadow', 1, {
    delay: .6,
    marginTop:50,
    ease: Power3.easeInOut
})


TweenMax.staggerFrom('.header img', 1, {
    delay: 1.5,
    x:800,
    ease: Power3.easeInOut
},0.09)

TweenMax.staggerFrom('.header img', 2, {
    delay: 1,
    opacity:0,
    ease: Power3.easeInOut
},0.09)

TweenMax.from('.nav', 1, {
    delay: .6,
    opacity:0,
    ease: Power3.easeInOut
})

TweenMax.staggerFrom('.nav ul li', 1, {
    delay: 1,
    y:-100,
    ease: Power3.easeInOut
},0.2)

TweenMax.from('body', 1, {
    delay: .2,
    overflowX: "hidden",
    ease: Power3.easeInOut
})







gsap.registerPlugin(ScrollTrigger);


gsap.to(".box-data", {
    scrollTrigger: {
    trigger: ".box-data",
 
    toggleActions: "restart none none none"
    },
    opacity: 1,
    duration:.8,
    stagger:{
        each:0.5,
        from: "start"
    },
    y:50
});

gsap.to(".box-galery", {
    scrollTrigger: {
    trigger: ".galeria",
   
    toggleActions: "restart none none none"
    },
    opacity:1,
    duration:1,
    
});


gsap.to(".img-gallery", {
    scrollTrigger: {
    trigger: ".img-gallery",

    toggleActions: "restart none none none"
    },
    borderRadius: '0%',
    duration:1,
    stagger:{
        each:0.5,
        from: "start"
    }
});


gsap.to(".parallax .title-parallax", {
    scrollTrigger: {
    trigger: ".parallax",

    toggleActions: "restart none none none"
    },
    opacity:1,
   
    duration:4,
});

gsap.to(".parallax", {
    scrollTrigger: {
    trigger: ".parallax",

    toggleActions: "restart none none none"
    },
    opacity:1,
    duration:3
});



gsap.to(".parallax .info-parallax", {
    scrollTrigger: {
    trigger: ".parallax",

    toggleActions: "restart none none none"
    },
    opacity:1,
    
    duration:4
});

gsap.to(".parallax .box-parallax", {
    scrollTrigger: {
        trigger: ".parallax",
    
        toggleActions: "restart none none none"
        },
        duration:5,
        stagger:{
            each:0.5,
            from: "start"
        },
        y:-100
});



gsap.to(".parallax .btn-parallax", {
    scrollTrigger: {
    trigger: ".parallax",

    toggleActions: "restart none none none"
    },
    opacity:1,
    y:-100,
    duration:5
});


gsap.to(".info-box", {
    scrollTrigger: {
    trigger: ".coffee-best",
    toggleActions: "restart none none none"
    },
    stagger: {
        each:0.6,
        from: "start"
    },
    scale:1,
    duration:3
});

gsap.to(".gallery-box", {
    scrollTrigger: {
    trigger: ".coffee-best",
    toggleActions: "restart none none none"
    },
    stagger: {
        each:0.6,
        from: "start"
    },
    scale:1,
    duration:3
});

gsap.to(".most-popular .title-popular", {
    scrollTrigger: {
    trigger: ".most-popular",

    toggleActions: "restart none none none"
    },
    opacity:1,
    y:-40,
    duration:2
});

gsap.to(".popular .item", {
    scrollTrigger: {
    trigger: ".most-popular",
    toggleActions: "restart none none none"
    },
    stagger: {
        each:0.5,
        from: "center"
    },
    scale:1,
    opacity:1,
    duration:3
});