document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("themeBtn");
  const languageBtn = document.getElementById("languageBtn");

  let currentLanguage =
    localStorage.getItem("language") || "no";

  /* THEME */

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  function updateThemeButton() {
    if (!themeBtn) return;

    const dark =
      document.body.classList.contains("dark-mode");

    themeBtn.textContent = dark ? "☀" : "☾";

    themeBtn.setAttribute(
      "aria-label",
      dark ? "Light mode" : "Dark mode"
    );
  }

  updateThemeButton();

  themeBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const dark =
      document.body.classList.contains("dark-mode");

    localStorage.setItem(
      "theme",
      dark ? "dark" : "light"
    );

    updateThemeButton();
  });

  /* LANGUAGE */

  function setLanguage(language) {
    currentLanguage = language;

    document.documentElement.lang =
      language === "no" ? "no" : "en";

    document
      .querySelectorAll("[data-no][data-en]")
      .forEach((element) => {
        element.textContent =
          language === "no"
            ? element.dataset.no
            : element.dataset.en;
      });

    if (languageBtn) {
      languageBtn.textContent =
        language === "no" ? "EN" : "NO";
    }

    localStorage.setItem("language", language);
  }

  languageBtn?.addEventListener("click", () => {
    const newLanguage =
      currentLanguage === "no" ? "en" : "no";

    setLanguage(newLanguage);
  });

  setLanguage(currentLanguage);

  /* HERO LETTER ANIMATION */

  document
    .querySelectorAll(".letter")
    .forEach((letter, index) => {
      letter.style.animationDelay =
        `${index * 0.12}s`;
    });
});
