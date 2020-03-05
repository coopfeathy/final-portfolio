const allSlides = Array.from(document.querySelectorAll('.slide'));
const next = document.querySelectorAll('.next');
const prev = document.querySelectorAll('.prev');

const first = 5;
const second = 3;
const third = 3;
const fourth = 4;



const num1 = 0;
const num2 = first;

const num3 = first;
const num4 = num3 + second;

const num5 = num3 + second;
const num6 = num5 + third;

const num7 = num5 + third;
const num8 = num7 + fourth;



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
  }
  setTimeout(() => current.classList.remove('current'));
};



// Button events
for (let i = 0; i < next.length; i++) {
  next[i].addEventListener('click', e => {
    if (i == 0) {
      nextSlide(i,num1,num2);
    } else if(i == 1){
      nextSlide(i,num3,num4);
    } else if(i == 2){
      nextSlide(i,num5,num6);
    } else if(i == 3){
      nextSlide(i,num7,num8);

    } else {
      console.log("There is an error");
    }
  });
}

for (let i = 0; i < prev.length; i++) {
  prev[i].addEventListener('click', e => {
    if (i == 0) {
      prevSlide(i,num1,num2);
    } else if(i == 1){
      prevSlide(i,num3,num4);
    } else if(i == 2){
      prevSlide(i,num5,num6);
    } else if(i == 3){
      prevSlide(i,num7,num8);

    } else {
      console.log("There is an error");
    }
  });
}
