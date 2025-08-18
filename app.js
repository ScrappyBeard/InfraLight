// ==============================
// Mobile Nav Toggle
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close nav on link click (mobile only)
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if (nav.classList.contains("open")) {
          nav.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // ==============================
  // Formspree AJAX handling
  // ==============================
  const form = document.querySelector("form[action*='formspree']");
  if (form) {
    const status = form.querySelector(".status");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const data = new FormData(form);
      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          if (status) status.textContent = "✅ Thanks! Your message has been sent.";
          form.reset();
        } else {
          const err = await response.json();
          if (status) status.textContent =
            err.errors ? err.errors.map(er => er.message).join(", ") : "❌ Oops, something went wrong.";
        }
      } catch (error) {
        if (status) status.textContent = "❌ Network error. Please try again.";
      }
    });
  }
});
