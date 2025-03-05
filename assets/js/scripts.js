(function () {
  emailjs.init(EMAILJS_USER_ID);
})();

let translations = {};

async function loadTranslations() {
  try {
    const response = await fetch("assets/translations.json");
    translations = await response.json();
  } catch (error) {
    console.error("Erreur de chargement des traductions :", error);
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
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabPanes.forEach((pane) => {
    pane.classList.add("hidden");
  });

  function activateTab(tab) {
    tabs.forEach((t) => {
      t.classList.remove("active", "bg-blue-500", "text-white");
      t.classList.remove("bg-opacity-75");
      t.classList.remove("bg-gray-200", "hover:bg-gray-300", "text-gray-800");
      t.classList.add("bg-gray-100", "hover:bg-gray-200", "text-gray-700");
    });

    tabPanes.forEach((pane) => pane.classList.add("hidden"));

    tab.classList.add("active", "bg-blue-500", "text-white");
    const tabId = tab.dataset.tab;
    const selectedTabPane = document.getElementById(tabId);
    selectedTabPane.classList.remove("hidden");

    tabs.forEach((t) => {
      if (!t.classList.contains("active")) {
        t.classList.add("bg-gray-100", "hover:bg-gray-200", "text-gray-700");
      }
    });
  }

  const firstTab = document.querySelector('.tab[data-tab="presentation"]');
  if (firstTab) {
    tabs.forEach((tab) => {
      tab.classList.add("bg-gray-100", "hover:bg-gray-200", "text-gray-700");
    });
    activateTab(firstTab);
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      activateTab(this);
    });

    tab.addEventListener("mouseover", function () {
      if (!this.classList.contains("active")) {
        this.classList.add("bg-opacity-75");
      }
    });

    tab.addEventListener("mouseout", function () {
      if (!this.classList.contains("active")) {
        this.classList.remove("bg-opacity-75");
      }
    });
  });

  const projectCards = document.querySelectorAll(".card");
  const certificationCards = document.querySelectorAll(".certification-card");

  function addCardListeners(cards) {
    cards.forEach((card) => {
      card.addEventListener("mouseover", () => {
        card.classList.add(
          "transition",
          "duration-300",
          "transform",
          "scale-105",
          "shadow-lg"
        );
      });

      card.addEventListener("mouseout", () => {
        card.classList.remove(
          "transition",
          "duration-300",
          "transform",
          "scale-105",
          "shadow-lg"
        );
      });

      card.addEventListener("click", (event) => {
        if (event.target.closest(".tag")) {
          return;
        }

        const cardType = card.classList.contains("card")
          ? "project"
          : "certification";
        const cardId = card.dataset[`${cardType}Id`];

        if (cardId) {
          let link = "";
          if (cardType === "project") {
            switch (cardId) {
              case "10":
                link = "https://github.com/Erwanlg0";
                break;
              case "9":
                link = "#";
                break;
              case "8":
                link = "https://github.com/Erwanlg0";
                break;
              case "7":
                link = "https://github.com/Erwanlg0";
                break;
              case "6":
                link = "https://github.com/Erwanlg0";
                break;
              case "5":
                link = "https://github.com/Erwanlg0";
                break;
              case "4":
                link = "https://github.com/Erwanlg0D";
                break;
              case "3":
                link = "https://github.com/Erwanlg0";
                break;
              case "2":
                link = "https://github.com/Erwanlg0";
                break;
              case "1":
                link = "https://github.com/Erwanlg0";
                break;
              default:
                link = "#";
            }
          } else {
            switch (cardId) {
              case "12":
                certificationLink =
                  "https://www.credly.com/badges/dd624677-4e8a-449b-8128-c3ab43ca7c5c/public_url";
                break;
              case "11":
                certificationLink =
                  "https://www.credly.com/badges/527ca932-650b-4587-a104-481d85b1df7a/public_url";
                break;
              case "10":
                certificationLink =
                  "https://www.credly.com/badges/8ce84f5b-3a9b-4e5b-9650-1d1e3f5e4f49/public_url";
                break;
              case "9":
                certificationLink =
                  "https://www.credly.com/badges/933c07b0-8890-41bb-b001-4d8a800a2143/public_url";
                break;
              case "8":
                certificationLink =
                  "https://www.credly.com/badges/5bbc8da9-3ac1-4f06-9cd6-cd2bd40f64a9/public_url";
                break;
              case "7":
                certificationLink =
                  "https://www.credly.com/badges/e4ee794f-a211-453e-95d4-0da6fd48b920/public_url";
                break;
              case "6":
                certificationLink =
                  "https://www.credly.com/badges/b5526208-0a27-4446-8984-709763eac1da/public_url";
                break;
              case "5":
                certificationLink =
                  "https://www.credly.com/badges/0605da23-e589-4035-ab1d-5898cebc480c/public_url";
                break;
              case "4":
                certificationLink =
                  "https://moocgdp.gestiondeprojet.pm/certificates/59bb58d01b724ceeac68f61460edb27f";
                break;
              case "3":
                certificationLink =
                  "https://certification.gestiondeprojet.pm/GdP23ATC/GdP23TcV-LuSDVqZQA.pdf";
                break;
              case "2":
                certificationLink = "";
                break;
              case "1":
                certificationLink =
                  "https://app.pix.fr/partage-certificat/2466408";
                break;
              default:
                certificationLink = "#";
            }
          }
          if (link) {
            window.open(link, "_blank");
          }
        }
      });
    });
  }

  addCardListeners(projectCards);
  addCardListeners(certificationCards);

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
              : preferredLanguage === "es"
              ? "¡Gracias! Tu mensaje ha sido enviado."
              : "Merci ! Votre message a bien été envoyé."
          );
          contactForm.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          alert(
            preferredLanguage === "en"
              ? "An error occurred. Please try again."
              : preferredLanguage === "es"
              ? "Ocurrió un error. Por favor, inténtalo de nuevo."
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
    {
      threshold: 0.5,
    }
  );

  elementsToAnimate.forEach((element) => observer.observe(element));

  const contactButtons = document.querySelectorAll(".contact_caps");

  contactButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const contactType = button.getAttribute("data-contact");
      if (contactType === "linkedin") {
        window.open("https://www.linkedin.com/in/erwan-luce-guedon", "_blank");
      } else if (contactType === "download_cv") {
        const preferredLanguage =
          localStorage.getItem("preferredLanguage") || "fr";
        let cvFile = "CV_Erwan_Luce_Guedon.pdf";
        if (preferredLanguage === "en") {
          cvFile = "CV_EN_Erwan_Luce_Guedon.pdf";
        } else if (preferredLanguage === "es") {
          cvFile = "CV_ES_Erwan_Luce_Guedon.pdf";
        }
        window.location.href = `assets/pdf/${cvFile}`;
      } else if (contactType === "github") {
        window.open("https://github.com/Erwanlg0", "_blank");
      }
    });
  });
});
