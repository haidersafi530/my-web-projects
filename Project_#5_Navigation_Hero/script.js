let active = 3;
let mncircle = document.querySelectorAll(".minicircle");
gsap.to(mncircle[active-1], {
    opacity : 1
})

mncircle.forEach(function(val){
    val.addEventListener('click', function(){
        alert('Hi');
    })
})

gsap.to("#circle", {
    rotate : 0,
    ease : Expo.easeInOut,
    duration : 4,
    duration: 3,
    ease: "power1.inOut",
    force3D: true,
    autoRound: false
})