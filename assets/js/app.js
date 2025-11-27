const { createApp, ref, computed, onMounted } = Vue;

const EMAILJS_USER_ID = "cxK95TR9KOaNFZLtc";
const EMAILJS_SERVICE_ID = "service_5jkc97b";
const EMAILJS_TEMPLATE_ID = "template_pp5m389";

createApp({
  setup() {
    const currentLang = ref(localStorage.getItem("preferredLanguage") || "fr");
    const isDark = ref(
      localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
    const translations = ref({});
    const showLangMenu = ref(false);
    const selectedProject = ref(null);
    const showScrollTop = ref(false);

    // Calcul dynamique du lien CV selon la langue
    const cvLink = computed(() => {
      const lang = currentLang.value;
      const prefix = lang === "fr" ? "" : `${lang.toUpperCase()}_`;
      return `assets/pdf/CV_${prefix}Erwan_Luce_Guedon.pdf`;
    });

    // Fonction de formatage des dates (YYYY-MM -> Format Local)
    const formatDate = (dateString) => {
      if (!dateString) return "";
      const date = new Date(dateString + "-01"); // Ajout du jour pour éviter les problèmes de timezone
      return new Intl.DateTimeFormat(currentLang.value, {
        month: "short",
        year: "numeric",
      }).format(date);
    };

    const categories = ref([
      { key: "cat_all", id: "all" },
      { key: "cat_school", id: "school" },
      { key: "cat_personal", id: "personal" },
    ]);
    const currentCategoryId = ref("all");

    const certCategories = ref([
      { key: "cert_cat_all", id: "toutes" },
      { key: "cert_cat_free", id: "gratuites" },
      { key: "cert_cat_paid", id: "payantes" },
    ]);
    const currentCertCategoryId = ref("toutes");

    const experiences = ref([
      {
        id: 1,
        roleKey: "exp_thoreau_fullstack_title",
        company: "Ch. Thoreau",
        location: "Pantin",
        dateKey: "exp_thoreau_alternance_date",
        typeKey: "exp_type_alternance",
        descKey: "exp_thoreau_alternance_desc",
        isCurrent: true,
        colorClass: "bg-primary",
      },
      {
        id: 2,
        roleKey: "exp_thoreau_dev_title",
        company: "Ch. Thoreau",
        location: "Pantin",
        dateKey: "exp_thoreau_stage_date",
        typeKey: "exp_type_stage",
        descKey: "exp_thoreau_stage_desc",
        isCurrent: false,
        colorClass: "bg-gray-300 dark:bg-gray-600",
      },
      {
        id: 3,
        roleKey: "exp_seasonal_title",
        isGroup: true,
        dateKey: "exp_seasonal_date",
        jobs: [
          { companyKey: "job_mcdo", dateKey: "date_oct_jan" },
          { companyKey: "job_quick", dateKey: "date_apr_jun" },
          { companyKey: "job_monoprix", dateKey: "date_feb_apr" },
        ],
        colorClass: "bg-gray-300 dark:bg-gray-600",
      },
    ]);

    const skillGroups = ref([
      {
        id: "web",
        icon: "fas fa-code",
        color: "text-blue-500",
        border: "border-blue-500",
        titleKey: "skill_web",
        items: [
          "HTML / CSS / JS",
          "Vue.js / Angular",
          "TypeScript / Node.js / NestJS",
          "PHP / Symfony",
        ],
      },
      {
        id: "db",
        icon: "fas fa-database",
        color: "text-green-500",
        border: "border-green-500",
        titleKey: "skill_db",
        items: [
          "MySQL / MariaDB",
          "PostgreSQL / Oracle",
          "MongoDB (NoSQL)",
          "Redis / GraphQL",
        ],
      },
      {
        id: "prog",
        icon: "fas fa-terminal",
        color: "text-yellow-500",
        border: "border-yellow-500",
        titleKey: "skill_programming",
        items: [
          "Python (Data/Scripting)",
          "Java 21 / C / C++",
          "Bash / PowerShell",
          "VBA / Assembleur",
        ],
      },
      {
        id: "devops",
        icon: "fas fa-server",
        color: "text-purple-500",
        border: "border-purple-500",
        titleKey: "skill_devops",
        items: [
          "Docker / CI/CD",
          "n8n / Make (Automation)",
          "Linux (Debian) / Windows Admin",
          "Réseaux / Cloud / Git",
        ],
      },
    ]);

    const roadmapSteps = ref([
      {
        id: 1,
        colorClass:
          "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
        titleKey: "roadmap_1_title",
        descKey: "roadmap_1_desc",
        statusKey: "roadmap_status_ongoing",
        deadlineKey: "roadmap_1_deadline",
      },
      {
        id: 2,
        colorClass:
          "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
        titleKey: "roadmap_2_title",
        descKey: "roadmap_2_desc",
        statusKey: "roadmap_status_ongoing",
        deadlineKey: "roadmap_2_deadline",
      },
      {
        id: 3,
        colorClass:
          "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
        titleKey: "roadmap_3_title",
        descKey: "roadmap_3_desc",
        statusKey: null,
        deadlineKey: null,
      },
    ]);

    const projects = ref([
      {
        id: 14,
        titleKey: "proj_myges_title",
        image: "assets/images/project/web.webp",
        year: "2025",
        contextKey: "proj_myges_context",
        durationKey: "duration_continuous",
        tags: ["n8n", "API REST", "Airtable", "Google Calendar", "Discord"],
        categoryId: "personal",
        descKey: "proj_myges_desc",
        github: null,
      },
      {
        id: 10,
        titleKey: "proj_bcare_title",
        image: "assets/images/project/business-care.webp",
        year: "2025",
        contextKey: "proj_bcare_context",
        durationKey: "duration_jan_may",
        tags: [
          "NestJS",
          "VueJS",
          "Android/NFC",
          "Docker",
          "Architecture Hexagonale",
        ],
        categoryId: "school",
        descKey: "proj_bcare_desc",
        github: "https://github.com/2ESGI-PA",
      },
      {
        id: 13,
        titleKey: "proj_ocean_title",
        image: "assets/images/project/subdive.webp",
        year: "2024",
        contextKey: "proj_ocean_context",
        durationKey: "duration_3_months",
        tags: ["C", "Gestion Mémoire", "Algorithme", "Moteur Physique"],
        categoryId: "school",
        descKey: "proj_ocean_desc",
        github: "https://github.com/lennyblk/OceanDepth",
      },
      {
        id: 15,
        titleKey: "proj_asm_title",
        image: "assets/images/project/asm.webp",
        year: "2024",
        contextKey: "proj_asm_context",
        durationKey: "duration_oct_jan_4m",
        tags: ["Assembly x86", "Algorithmique", "Optimisation", "Bas niveau"],
        categoryId: "school",
        descKey: "proj_asm_desc",
        github: null,
      },
      {
        id: 11,
        titleKey: "proj_lol_title",
        image: "assets/images/project/python.webp",
        year: "2024",
        contextKey: "proj_lol_context",
        durationKey: "duration_2_months",
        tags: ["Python", "Data Analysis", "Riot API", "Pandas"],
        categoryId: "personal",
        descKey: "proj_lol_desc",
        github: "https://github.com/Erwanlg0/LoL-Optimizer",
      },
      {
        id: 12,
        titleKey: "proj_navale_title",
        image: "assets/images/project/navale.webp",
        year: "2024",
        contextKey: "proj_navale_context",
        tags: ["C", "SDL2", "Graphisme"],
        categoryId: "school",
        descKey: "proj_navale_desc",
        github: "https://github.com/Hitoyu22/BattleChip",
      },
      {
        id: 11.5,
        titleKey: "proj_idfm_title",
        image: "assets/images/project/web.webp",
        year: "2024",
        contextKey: "proj_idfm_context",
        tags: ["Android", "Kotlin", "API OpenData"],
        categoryId: "school",
        descKey: "proj_idfm_desc",
        github: "https://github.com/WissamCHERADI/Metro",
      },
      {
        id: 9,
        titleKey: "proj_portfolio_title",
        image: "assets/images/project/portfolio.webp",
        year: "2024",
        contextKey: "proj_portfolio_context",
        tags: ["Vue.js", "Tailwind", "CI/CD"],
        categoryId: "personal",
        descKey: "proj_portfolio_desc",
        github: "https://github.com/Erwanlg0/portfolio",
      },
      {
        id: 8,
        titleKey: "proj_tetris_title",
        image: "assets/images/project/tetris.webp",
        year: "2024",
        contextKey: "proj_tetris_context",
        tags: ["C", "SDL2", "Logique Jeu"],
        categoryId: "school",
        descKey: "proj_tetris_desc",
        github: "https://github.com/Erwanlg0/Tetris-C",
      },
      {
        id: 6,
        titleKey: "proj_asso_title",
        image: "assets/images/project/cmwnoir.webp",
        year: "2024",
        contextKey: "proj_asso_context",
        tags: ["PHP", "MVC", "MariaDB", "Debian"],
        categoryId: "school",
        descKey: "proj_asso_desc",
        github: "https://github.com/Erwanlg0/CMWFIGHTS",
      },
      {
        id: 5,
        titleKey: "proj_nas_title",
        image: "assets/images/project/nas.webp",
        year: "2023",
        contextKey: "proj_nas_context",
        tags: ["Linux", "Network", "Self-hosting", "TrueNAS"],
        categoryId: "personal",
        descKey: "proj_nas_desc",
        github: null,
      },
      {
        id: 1,
        titleKey: "proj_bot_title",
        image: "assets/images/project/discord.webp",
        year: "2023",
        contextKey: "proj_bot_context",
        tags: ["Node.js", "Discord API", "Événementiel"],
        categoryId: "personal",
        descKey: "proj_bot_desc",
        github: "https://github.com/Erwanlg0",
      },
    ]);

    const certifications = ref([
      {
        id: 17,
        name: "Artificial Intelligence Fundamentals",
        organization: "IBM SkillsBuild",
        date: "2025-11", // ISO format
        logo: "assets/images/certif/artificial-intelligence-fundamentals.webp",
        categoryId: "gratuites",
        url: "https://www.credly.com/badges/5e1d4894-b39a-41b0-808a-00a9ed866ea5/public_url",
      },
      {
        id: 16,
        name: "Getting Started with Artificial Intelligence",
        organization: "IBM SkillsBuild",
        date: "2025-11",
        logo: "assets/images/certif/getting-started-with-artificial-intelligence.webp",
        categoryId: "gratuites",
        url: "https://www.credly.com/badges/b6acbfd8-4a3d-4727-bdcf-13258a89ca8e/public_url",
      },
      {
        id: 15,
        name: "Networking Academy Learn-A-Thon 2025",
        organization: "Cisco",
        date: "2025-07",
        logo: "assets/images/certif/networking-academy-learn-a-thon-2025.webp",
        categoryId: "gratuites",
        url: "https://www.credly.com/badges/08374a1b-98f9-4fed-8220-86cf0350f1b4/public_url",
      },
      {
        id: 13,
        name: "IT Customer Support Basics",
        organization: "Cisco",
        date: "2025-04",
        logo: "assets/images/certif/it-customer-support-basics.webp",
        categoryId: "gratuites",
        url: "https://www.credly.com/badges/3211a5aa-8fc4-408c-88c9-be29562034da/linked_in_profile",
      },
      {
        id: 12,
        name: "Introduction to Modern AI",
        organization: "Cisco",
        date: "2025-02",
        logo: "assets/images/certif/introduction-to-modern-ai.webp",
        categoryId: "gratuites",
        url: "https://www.credly.com/badges/dd624677-4e8a-449b-8128-c3ab43ca7c5c/linked_in_profile",
      },
      {
        id: 11,
        name: "Networking Academy Learn-A-Thon 2024",
        organization: "Cisco",
        date: "2025-01",
        logo: "assets/images/certif/aca-2024.webp",
        categoryId: "gratuites",
        url: "https://www.credly.com/badges/527ca932-650b-4587-a104-481d85b1df7a/linked_in_profile",
      },
      {
        id: 10,
        name: "Cloud Digital Leader Certification",
        organization: "Google",
        date: "2024-12",
        logo: "assets/images/certif/google.webp",
        categoryId: "payantes",
        url: "https://cloud.google.com/learn/certification/cloud-digital-leader",
      },
      {
        id: 9,
        name: "Computer Hardware Basics",
        organization: "Cisco",
        date: "2024-11",
        logo: "assets/images/certif/computer-hardware-basics.webp",
        categoryId: "gratuites",
        url: "https://www.credly.com/badges/933c07b0-8890-41bb-b001-4d8a800a2143/linked_in_profile",
      },
      {
        id: 8,
        name: "Introduction to Data Science",
        organization: "Cisco",
        date: "2024-11",
        logo: "assets/images/certif/introduction-to-data-science.webp",
        categoryId: "gratuites",
        url: "https://www.credly.com/badges/5bbc8da9-3ac1-4f06-9cd6-cd2bd40f64a9/linked_in_profile",
      },
      {
        id: 7,
        name: "Operating Systems Basics",
        organization: "Cisco",
        date: "2024-11",
        logo: "assets/images/certif/operating-systems-basics.webp",
        categoryId: "gratuites",
        url: "https://www.credly.com/badges/e4ee794f-a211-453e-95d4-0da6fd48b920/linked_in_profile",
      },
      {
        id: 6,
        name: "Introduction to Cybersecurity",
        organization: "Cisco",
        date: "2024-10",
        logo: "assets/images/certif/introduction-to-cybersecurity.webp",
        categoryId: "gratuites",
        url: "https://www.credly.com/badges/b5526208-0a27-4446-8984-709763eac1da/linked_in_profile",
      },
      {
        id: 5,
        name: "Introduction to IoT",
        organization: "Cisco",
        date: "2024-10",
        logo: "assets/images/certif/introduction-to-iot.webp",
        categoryId: "gratuites",
        url: "https://www.credly.com/badges/0605da23-e589-4035-ab1d-5898cebc480c/linked_in_profile",
      },
      {
        id: 4,
        name: "Spécialisation OAW - Gestion de Projet",
        organization: "MOOC GdP",
        date: "2024-05",
        logo: "assets/images/certif/mooc.webp",
        categoryId: "payantes",
        url: "https://moocgdp.gestiondeprojet.pm/certificates/59bb58d01b724ceeac68f61460edb27f",
      },
      {
        id: 3,
        name: "Tronc commun - Gestion de Projet",
        organization: "MOOC GdP",
        date: "2024-04",
        logo: "assets/images/certif/mooc.webp",
        categoryId: "payantes",
        url: "https://certification.gestiondeprojet.pm/GdP23ATC/GdP23TcV-LuSDVqZQA.pdf",
      },
      {
        id: 2,
        name: "Attestation SecNum",
        organization: "ANSSI",
        date: "2023-11",
        logo: "assets/images/certif/anssi.webp",
        categoryId: "gratuites",
        url: "https://www.secnumacademie.gouv.fr/",
      },
      {
        id: 1,
        name: "Certificat Pix",
        organization: "Pix",
        date: "2023-01",
        logo: "assets/images/certif/pix.webp",
        categoryId: "gratuites",
        url: "https://app.pix.fr/partage-certificat/2466408",
      },
    ]);

    const languages = ref([
      { levelKey: "lang_native", nameKey: "lang_name_fr", percent: 100 },
      { levelKey: "lang_pro_b1", nameKey: "lang_name_en", percent: 60 },
      { levelKey: "lang_pro_b1", nameKey: "lang_name_es", percent: 60 },
      { levelKey: "lang_beginner_a2", nameKey: "lang_name_cn", percent: 25 },
    ]);

    const hobbies = ref([
      { nameKey: "hobby_triathlon", icon: "fas fa-running" },
      { nameKey: "hobby_diving", icon: "fas fa-water" },
      { nameKey: "hobby_electronics", icon: "fas fa-microchip" },
      { nameKey: "hobby_hardware", icon: "fas fa-desktop" },
    ]);

    const loadTranslations = async () => {
      try {
        const res = await fetch("assets/translations.json");
        translations.value = await res.json();
      } catch (e) {
        console.error("Traduction error:", e);
      }
    };

    const t = (key) => translations.value[currentLang.value]?.[key] || key;

    const switchLang = (lang) => {
      currentLang.value = lang;
      localStorage.setItem("preferredLanguage", lang);
      document.documentElement.lang = lang;
      showLangMenu.value = false;
      document.title = t("title");
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", t("cover_description"));
    };

    const toggleTheme = () => {
      isDark.value = !isDark.value;
      localStorage.setItem("theme", isDark.value ? "dark" : "light");
      updateThemeClass();
    };

    const updateThemeClass = () => {
      if (isDark.value) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    };

    const openProject = (project) => {
      selectedProject.value = project;
      document.body.style.overflow = "hidden";
    };

    const closeProject = () => {
      selectedProject.value = null;
      document.body.style.overflow = "";
    };

    const openLink = (url) => {
      if (url && url !== "#") window.open(url, "_blank");
    };

    const sendEmail = (e) => {
      emailjs
        .sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          e.target,
          EMAILJS_USER_ID
        )
        .then(() => alert(t("msg_sent_success")))
        .catch((err) => {
          console.error(err);
          alert(t("msg_sent_error"));
        });
    };

    const filteredProjects = computed(() => {
      if (currentCategoryId.value === "all") return projects.value;
      return projects.value.filter(
        (p) => p.categoryId === currentCategoryId.value
      );
    });

    const filteredCertifications = computed(() => {
      if (currentCertCategoryId.value === "toutes") return certifications.value;
      return certifications.value.filter(
        (c) => c.categoryId === currentCertCategoryId.value
      );
    });

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    onMounted(() => {
      loadTranslations();
      updateThemeClass();
      emailjs.init(EMAILJS_USER_ID);

      document.addEventListener("click", (e) => {
        if (showLangMenu.value) showLangMenu.value = false;
      });

      window.addEventListener("scroll", () => {
        showScrollTop.value = window.scrollY > 500;
      });
    });

    return {
      currentLang,
      isDark,
      t,
      switchLang,
      toggleTheme,
      showLangMenu,
      projects,
      categories,
      currentCategoryId,
      filteredProjects,
      certifications,
      certCategories,
      currentCertCategoryId,
      filteredCertifications,
      openLink,
      sendEmail,
      selectedProject,
      openProject,
      closeProject,
      languages,
      hobbies,
      showScrollTop,
      scrollToTop,
      experiences,
      skillGroups,
      roadmapSteps,
      cvLink,
      formatDate,
    };
  },
}).mount("#app");
