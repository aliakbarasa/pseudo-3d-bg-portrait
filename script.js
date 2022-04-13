//asadesignerweb
var kim = document.querySelector('.bill');
var kimEars = document.querySelector('.bill__ears');
var kimHead = document.querySelector('.bill__head');
var kimFace = document.querySelector('.bill__face');
var kimEyes = document.querySelector('.bill__eyes');
var kimGlasses = document.querySelector('.bill__glasses');
var kimNose = document.querySelector('.bill__nose');

function fitBetween(value, min, max) {
  return Math.min(Math.max(min, value), max);
}

kim.style.pointerEvents = 'none'
document.addEventListener('mousemove', function(e) {  
  var xpos = e.layerX || e.offsetX;
  var ypos = e.layerY || e.offsetY;
  var ax = -(window.innerWidth / 2 - xpos) / 10;
  var ay = (window.innerHeight / 2 - ypos) / 10;
	
	ax = fitBetween(ax, -20, 20);
	ay = fitBetween(ay, -15, 15);
	
  kimEars.style.transform = 'rotateY('+ax+'deg) rotateX('+ay+'deg) translateZ(0px)';
  kimHead.style.transform = 'rotateY('+ax+'deg) rotateX('+ay+'deg) translateZ(3vh)';
  kimFace.style.transform = 'rotateY('+ax+'deg) rotateX('+ay+'deg) translateZ(4vh)';
  kimEyes.style.transform = 'rotateY('+ax+'deg) rotateX('+ay+'deg) translateZ(5vh)';
	kimGlasses.style.transform = 'rotateY('+ax+'deg) rotateX('+ay+'deg) translateZ(6vh)';
  kimNose.style.transform = 'rotateY('+ax+'deg) rotateX('+ay+'deg) translateZ(5.5vh)';
})

// Cursor eyes - forked from https://codepen.io/stack-findover/pen/qBRgqyX

const eye1 = document.querySelector("#pupil__left");
const eye2 = document.querySelector("#pupil__right");
window.addEventListener("mousemove", (evt) => {
  const x = -(window.innerWidth / 2 - evt.pageX) / 100;
  const y = -(window.innerHeight / 2 - evt.pageY) / 70;
  eye1.style.transform = `translateY(${y}px) translateX(${x}px)`;
  eye2.style.transform = `translateY(${y}px) translateX(${x}px)`;
});