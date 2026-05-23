const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(event) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
    navLinks?.classList.remove("open");
  });
});

const signupForm = document.querySelector(".signup-form");

if (signupForm) {
  signupForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("You're on the SinzNation list. Connect this form to Mailchimp, Klaviyo, ConvertKit, or Shopify next.");
  });
}
