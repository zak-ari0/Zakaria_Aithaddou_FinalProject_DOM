const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

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
