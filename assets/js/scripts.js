(function () {
  emailjs.init(EMAILJS_USER_ID);
})();

let translations = {};

async function loadTranslations() {
  try {
    const response = await fetch("/assets/translations.json");
    translations = await response.json();
  } catch (error) {
    console.error("Erreur de chargement des traductions : ", error);
  }
}

function translatePage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      element.setAttribute("placeholder", translations[lang][key]);
    }
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadTranslations();

  const languageSelector = document.getElementById("lang");
  const preferredLanguage = localStorage.getItem("preferredLanguage") || "fr";

  languageSelector.value = preferredLanguage;
  translatePage(preferredLanguage);

  languageSelector.addEventListener("change", (e) => {
    const selectedLang = e.target.value;
    translatePage(selectedLang);
    localStorage.setItem("preferredLanguage", selectedLang);
  });

  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  const tabs = document.querySelectorAll(".tab");
  const panes = document.querySelectorAll(".tab-pane");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab");

      tabs.forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");

      panes.forEach((pane) => pane.classList.remove("active"));
      const activePane = document.getElementById(target);
      activePane.classList.add("active");
    });
  });

  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const preferredLanguage =
        localStorage.getItem("preferredLanguage") || "fr";

      emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert(
            preferredLanguage === "en"
              ? "Thank you! Your message has been sent."
              : "Merci ! Votre message a bien été envoyé."
          );
          contactForm.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          alert(
            preferredLanguage === "en"
              ? "An error occurred. Please try again."
              : "Une erreur est survenue. Veuillez réessayer."
          );
        }
      );
    });
  }

  const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  elementsToAnimate.forEach((element) => observer.observe(element));

  const contactButtons = document.querySelectorAll(".contact_caps");

  contactButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const contactType = button.getAttribute("data-contact");
      if (contactType === "linkedin") {
        window.open("https://www.linkedin.com/in/erwan-luce-guedon", "_blank");
      } else if (contactType === "download_cv") {
        window.location.href = "assets/pdf/CV_Erwan_Luce_Guedon.pdf";
      } else if (contactType === "github") {
        window.open("https://github.com/Erwanlg0", "_blank");
      }
    });
  });
});
