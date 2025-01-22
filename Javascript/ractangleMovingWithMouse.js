const movingContainer = document.getElementById("movingContainer");
const movingItem = document.getElementById("movingItem");

// const circleWidth = movingItem.offsetWidth;
// console.log(movingItem.offsetWidth);

// movingContainer.addEventListener("mousemove", (e) => {
//   const maxX = window.innerWidth - circleWidth;
//   const clampedX = Math.min(Math.max(0, e.clientX), maxX);
//   gsap.to(movingItem, {
//     x: clampedX + "px",
//     y: e.clientY + "px", 
//     duration: 0.5,
//     ease: "power4.out"
//   });
// });

movingContainer.addEventListener("mousemove", (e) => {
 const xval =  gsap.utils.clamp(0, window.innerWidth - movingItem.offsetWidth, e.clientX);
 const yval = gsap.utils.clamp(0, window.innerHeight - movingItem.offsetHeight, e.clientY);
 gsap.to(movingItem, {
  x: xval + "px",
  y: yval + "px",
  duration: 0.5,
  ease: "power4.out"
 });

});

movingContainer.addEventListener("mouseleave", () => {
  gsap.to(movingItem, {
    height: "0px",
    width: "0px",
    duration: 0.5,
    ease: "power4.out"
  });
});

movingContainer.addEventListener("mouseenter", () => {

  gsap.to(movingItem, {
    height: "40px",
    width: "40px",
    duration: 0.5,
    ease: "power4.out"
  });
});
