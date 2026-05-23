const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });

    if (navLinks) {
      navLinks.classList.remove("open");
    }
  });
});

document.querySelectorAll(".size-grid button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".size-grid button").forEach((btn) => {
      btn.classList.remove("selected");
    });

    button.classList.add("selected");
  });
});

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("You're on the SinzNation list. Connect this form to Shopify, Klaviyo, Mailchimp, or ConvertKit next.");
  });
});

const cartButtons = document.querySelectorAll(".add-cart, .buy-now");

cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Checkout is not connected yet. Next step: connect Shopify Buy Button, Stripe, or Shopify store.");
  });
});
