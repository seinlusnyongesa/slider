const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slides = document.querySelectorAll(".frame");
const dots = document.querySelectorAll(".dot");

let slideIdx = 0;
showSlide(slideIdx);

function showSlide(n) {
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  slides[n].style.display = "block";
  dots[n].classList.add("active");
}

function next() {
  if (slideIdx > slides.length - 1) {
    slideIdx = 0;
  }
  const n = slideIdx;
  slideIdx += 1;

  return n;
}

function prev() {
  if (slideIdx < 0) {
    slideIdx = slides.length - 1;
  }
  const n = slideIdx;
  slideIdx -= 1;

  return n;
}

setInterval(() => {
  showSlide(prev());
}, 5000);
prevBtn.addEventListener("click", () => {
  showSlide(prev());
});
nextBtn.addEventListener("click", () => showSlide(next()));

dots.forEach((dot, i) => dot.addEventListener("click", () => currentSlide(i)));

function currentSlide(n) {
  slideIdx = n;
  showSlide(n);
}
