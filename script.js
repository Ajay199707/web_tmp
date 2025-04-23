const menuToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav a');

let autoCloseTimer = null;

// Toggle nav menu
menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('show');
  menuToggle.classList.toggle('glow');

  if (isOpen) {
    startAutoCloseTimer();
  } else {
    clearAutoCloseTimer();
  }
});

// Close on nav link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('show')) {
      navMenu.classList.remove('show');
      menuToggle.classList.remove('glow');
      clearAutoCloseTimer();
    }
  });
});

// Close nav when clicking outside
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    if (navMenu.classList.contains('show')) {
      navMenu.classList.remove('show');
      menuToggle.classList.remove('glow');
      clearAutoCloseTimer();
    }
  }
});

// Start auto-close
function startAutoCloseTimer() {
  clearAutoCloseTimer();
  autoCloseTimer = setTimeout(() => {
    navMenu.classList.remove('show');
    menuToggle.classList.remove('glow');
  }, 5000);
}

// Clear auto-close
function clearAutoCloseTimer() {
  if (autoCloseTimer) {
    clearTimeout(autoCloseTimer);
    autoCloseTimer = null;
  }
}

// ======================
// Slideshow functionality
// ======================

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlidess");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

setInterval(() => {
  plusSlides(1);
}, 3000);
