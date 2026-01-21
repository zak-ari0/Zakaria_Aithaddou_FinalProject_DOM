let slidesContainer = document.querySelector(".slides");
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");

let index = 0;

function MoveSlide(i) {

  //* moving-slides

  slidesContainer.style.transform = `translateX(-${i * 100}%)`;

  //* update-indicator

  dots.forEach(dot => dot.classList.remove("active"));
  dots[i].classList.add("active");
}

//* indicators-click

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    MoveSlide(index);
  });
});

//* auto-slide

setInterval(() => {
  index = (index + 1) % slides.length;
  MoveSlide(index);
}, 4000);


const Slides = document.querySelectorAll(".event-slide");
const Dots = document.querySelectorAll(".Dot");
const track = document.querySelector(".eventsTrack");

let current = 0; 
const visible = 3; 

function update() {
  const slideWidth = Slides[0].offsetWidth + 20; 
  track.style.transform = `translateX(-${current * slideWidth}px)`;

  Dots.forEach(d => d.classList.remove("Active"));
  if (Dots[current]){
    Dots[current].classList.add("Active");
  } 
}

//* indicators click
Dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    current = i;
    if (current > Slides.length - visible) current = Slides.length - visible;
    update();
  });
});

//* Auto-slide
setInterval(() => {
  current++;
  if (current > Slides.length - visible) current = 0;
  update();
}, 4000);

update();



