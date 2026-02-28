// -----------------------------
// Ultra Smooth Parallax Effect
// -----------------------------
const heroContent = document.querySelector(".hero-content");
let scrollY = 0;

window.addEventListener("scroll", () => {
  scrollY = window.pageYOffset;
});

function animateParallax() {
  document.body.style.backgroundPositionY = scrollY * 0.2 + "px";
  heroContent.style.transform = `translateY(${scrollY * 0.5}px)`;
  requestAnimationFrame(animateParallax);
}

animateParallax();

// -----------------------------
// Reveal Animation on Scroll
// -----------------------------
function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);

// -----------------------------
// Animate Skill Bars
// -----------------------------
window.addEventListener("scroll", () => {
  document.querySelectorAll(".bar span").forEach((span) => {
    const position = span.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (position < screenPosition) {
      span.style.width = span.getAttribute("data-width");
    }
  });
});

// -----------------------------
// Copy Email Button
// -----------------------------
document.getElementById("copyEmail").addEventListener("click", () => {
  navigator.clipboard.writeText("Amani1Alshahrani@email.com")
    .then(() => alert("Copied!"))
    .catch(() => alert("Failed to Copy!"));
});