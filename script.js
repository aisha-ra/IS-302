document.addEventListener("DOMContentLoaded", () => {
  const letters = document.querySelectorAll(".letter");

  letters.forEach((letter, index) => {
    letter.style.animationDelay = `${index * 0.12}s`;
  });
});
