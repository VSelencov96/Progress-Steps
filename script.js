// get all element by Id
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');


let currentActive = 1;

// next listener function
next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
      currentActive = circles.length;

    };

    update();                               // call update DOM func...
});

// prev listener function
prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  };
  
  update();                                 // call update DOM func...
});

// Update DOM func, 'add' and 'remove' classList(active)
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    };
  });

  const actives = document.querySelectorAll('.active');

  // set the progress bar
  progress.style.width = (actives.length - 1) / (circles.length -1) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  };
};