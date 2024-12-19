document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const interest = document.getElementById("interest").value;

    if (name && email && interest) {
      alert(
        `Thank you, ${name}! We have received your interest in "${interest}".\nWe will contact you at ${email} soon.`
      );

      document.getElementById("contactForm").reset();
    } else {
      alert("Please fill out all fields before submitting the form.");
    }
  });

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider img");
let currentIndex = 0;

function autoSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  updateSlider();
}

function updateSlider() {
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

setInterval(autoSlide, 3000);
