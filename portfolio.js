// ================== TYPEWRITER ==================
const typewriterText = "AIML Student | Python & SQL Certified";
const typewriter = document.querySelector(".typewriter");
let i = 0;
function typeWriter() {
  if (i < typewriterText.length) {
    typewriter.textContent += typewriterText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// ================== SMOOTH SCROLL & ACTIVE NAV ==================
const navLinks = document.querySelectorAll(".navbar a");
window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 150;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if(section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos){
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// ================== SCROLL TO TOP ==================
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ================== DARK/LIGHT MODE ==================
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeToggle.innerHTML = document.body.classList.contains("dark-mode") 
    ? '<i class="fas fa-sun"></i>' 
    : '<i class="fas fa-moon"></i>';
});

// ================== FADE IN ON SCROLL ==================
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'all 0.6s ease';
  observer.observe(card);
});

