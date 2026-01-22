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


let Slides = document.querySelectorAll(".event-slide");
let Dots = document.querySelectorAll(".Dot");
let track = document.querySelector(".eventsTrack");

let current = 0; 
let visible = 3; 

function update() {
  let slideWidth = Slides[0].offsetWidth + 20; 
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





let bookBtn = document.getElementById("bookBtn");
let modal = document.getElementById("bookingModal");
let closeBtn = document.querySelector(".close");
let form = document.getElementById("bookingForm");
let errorMsg = document.getElementById("errorMsg");

let bookings = [];

bookBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  errorMsg.textContent = "";
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  let name = fullName.value.trim();
  let mealType = meal.value;
  let start = startTime.value;
  let end = endTime.value;
  let persons = people.value;

  if (!start || !end) return;

  let isBooked = bookings.some(b => b.start === start);

  if (isBooked) {
    errorMsg.textContent = " This time is already booked!";
    return;
  }
    errorMsg.textContent = ''

  bookings.push({ name, mealType, start, end, persons });

  alert(" Booking confirmed!");

  modal.style.display = "none";
  form.reset();
  console.log(bookings);
  
});


