document.addEventListener("DOMContentLoaded", () => {
  const subtext = document.querySelector(".subtext");

  setTimeout(() => {
    subtext.textContent = "Our full site is coming soon. Stay tuned.";
    subtext.style.opacity = "1";
  }, 1500);
});
