
// Landing Page animations
const tl = gsap.timeline({defaults: { ease: 'power1.out' } });

tl.to('.text', { y:'0%', duration: 1, stagger: 0.5 })
tl.to('.slider', { y: "-100%", duration: 1.5, delay: 0.5 })
tl.to('.intro', { y: '-100%', duration: 1 }, '-=1')
tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 })
tl.fromTo('.big-text', { opacity: 0 }, { opacity: 1, duration: 1 })

// Smooth Scrolling animations
function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    // var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation)
    }

    function ease(t, b, c, d) {
        t /= d /2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) -1) + b;
    }

    requestAnimationFrame(animation);
}
// var section1 = document.querySelector('.page-one');
var section2 = document.querySelector('.page-two');
var section3 = document.querySelector('.page-three');
var section4 = document.querySelector('.page-four');
// var section5 = document.querySelector('.a');
// var section6 = document.querySelector('.arrowdown')

// section1.addEventListener('click', function(){
//     smoothScroll('.landing', 1000)
// })

section2.addEventListener('click', function(){
    smoothScroll('.projects', 1000)
})

section3.addEventListener('click', function(){
    smoothScroll('.about', 1000)
})

section4.addEventListener('click', function(){
    smoothScroll('.contact', 1000)
})

// section5.addEventListener('click', function(){
//     smoothScroll('.box1', 1000)
// })
// section6.addEventListener('click', function(){
//     smoothScroll('.box2', 1000)
// })

// Collapsible Project tabs
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}