const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
    navLinks.classList.remove("open");
  });
});

document.querySelector(".signup-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("You’re on the list. Connect this form to Mailchimp, Klaviyo, or ConvertKit next.");
});
