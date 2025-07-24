document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("subscribe-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = form.querySelector("input[type='email']");
      const email = emailInput.value.trim();

      if (email) {
        alert(`Thanks for subscribing, ${email}!`);
        form.reset();
      } else {
        alert("Please enter a valid email address.");
      }
    });
  }
});
