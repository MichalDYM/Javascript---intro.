

const box = document.querySelector('#box');
const box1 = document.querySelector('#box1');
const startButton = document.querySelector('#startButton');
const stopButton = document.querySelector('#stopButton');

let animationId;

function animate() {
  let topBox = parseInt(getComputedStyle(box).getPropertyValue('top')); //parseInt - HTML , propertyValue - CSS//
  let rightBox = parseInt(getComputedStyle(box).getPropertyValue('right')); //parseInt - HTML , propertyValue - CSS//
  let topBox1 = parseInt(getComputedStyle(box1).getPropertyValue('top'));//parseInt - HTML , propertyValue - CSS//
  let leftBox1 = parseInt(getComputedStyle(box1).getPropertyValue('left'));//parseInt - HTML , propertyValue - CSS//

  if (topBox < 450) topBox += 1;
  if (rightBox < 450) rightBox += 1;
  if (topBox1 < 450) topBox1 += 3;
  if (leftBox1 < 450) leftBox1 += 3;

  box.style.top = `${topBox}px`;
  box.style.right = `${rightBox}px`; 
  box1.style.top = `${topBox1}px`;
  box1.style.left = `${leftBox1}px`;

  animationId = requestAnimationFrame(animate);
}

function changeToCircle(){
  box.classList.remove('box');
  box.classList.add('cube');
  box1.classList.remove('box1');
  box1.classList.add('cube1');
}


function restartAnimation() {
  box.style.top = '0px';
  box.style.right = '0px'; 
  box1.style.top = '0px';
  box1.style.left = '0px';

  box.classList.remove('box'); // Remove circle class when restarting
  box.classList.add('cube'); // Add cube class when restarting
  box1.classList.remove('box1'); // Remove circle class when restarting
  box1.classList.add('cube1'); // Add cube class when restarting
  
  


  cancelAnimationFrame(animationId);
  animationId = requestAnimationFrame(animate);
}

startButton.addEventListener('click', () => {
  restartAnimation();
});

stopButton.addEventListener('click', () => {
  cancelAnimationFrame(animationId);
});
