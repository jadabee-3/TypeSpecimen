let index = 0;

function updateSlide() {
  const slider = document.querySelector(".slider");
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % 3; // Adjust if you have more slides
  updateSlide();
}

function prevSlide() {
  index = (index - 1 + 3) % 3; // Adjust for looping
  updateSlide();
}
