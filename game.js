//event listener
//this
//when you click it falls
//pass it at the first argument
//it's fine if you click on one and all of them fall

//HECHO POR MI - cheated with the ball-wrapper
// document.querySelector('.ball-wrapper').addEventListener('click', function() {
//     TweenMax.staggerTo('.ball', 1.5, { y: 500 }, 0.25)
// })

//SPELLING MISTAKE BUT THIS IS THE CORRECT SOLUTION
// document.querySelectorAll('.ball').forEach(domBall => {
//    domBall.addEventListener('click', function() {
//       TweenMax.to(this, 2.5, { y: 500, ease: Bounce.easeOut })
//   })})

//FIRST TWEENMAXes

// TweenMax.to('.ball', 1.5, { y: 500 })

// TweenMax.staggerFromTo(
//     '.ball',
//     1.5,
//     { y: 0, scale: 0.1, opacity: 0 },
//     { y: 500, scale: 1, opacity: 1, ease: Bounce.easeOut },
//     0.25
// )

// TweenMax.staggerFromTo(
//     '.ball',
//     1.5,
//     { y: 0, scale: 0.1, opacity: 0 },
//     { y: 500, scale: 1, opacity: 1, ease: Bounce.easeOut, yoyo: true, repeat: -1 },
//     0.25
// )
