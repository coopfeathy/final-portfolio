const allSlides = Array.from(document.querySelectorAll('.slide'));
const next = document.querySelectorAll('.next');
const prev = document.querySelectorAll('.prev');

const nextSlide = (i, slice1, slice2) => {
  const currents = document.querySelectorAll('.current');
  const current = currents[i];
  const slides = allSlides.slice(slice1, slice2);

  current.classList.remove('current');
  
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = (i, slice1, slice2) => {
  const currents = document.querySelectorAll('.current');
  const current = currents[i];
  const slides = allSlides.slice(slice1,slice2);

  current.classList.remove('current');

  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
    console.log(slides)
  }
  setTimeout(() => current.classList.remove('current'));
};


// Button events
for (let i = 0; i < next.length; i++) {
  next[i].addEventListener('click', e => {
    if (i == 0) {
      nextSlide(i,0,2);
    } else if(i == 1){
      nextSlide(i,2,4);
    }
  });
}

for (let i = 0; i < prev.length; i++) {
  prev[i].addEventListener('click', e => {
    if (i == 0) {
      prevSlide(0,0,2);
    } else if(i == 1){
      prevSlide(1,2,4);
    } else {
      console.log("There is an error");
    }
  });
}
