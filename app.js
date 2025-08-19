// Mobile nav + Formspree enhancement
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close on link click (mobile)
    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        if (nav.classList.contains("open")) {
          nav.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // Optional: AJAX submit Formspree for nicer UX (still works without JS)
  const form = document.querySelector("form[action*='formspree']");
  if (form) {
    const status = form.querySelector(".status");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      try {
        const res = await fetch(form.action, { method: form.method, body: data, headers: { Accept: "application/json" } });
        if (res.ok) {
          if (status) status.textContent = "✅ Thanks! Your message has been sent.";
          form.reset();
        } else {
          const j = await res.json().catch(() => null);
          if (status) status.textContent = j && j.errors ? j.errors.map(x => x.message).join(", ") : "❌ Something went wrong.";
        }
      } catch (err) {
        if (status) status.textContent = "❌ Network error. Please try again.";
      }
    });
  }
});
