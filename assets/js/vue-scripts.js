const certificationsApp = Vue.createApp({
  data() {
    return {
      categories: ["toutes", "gratuites", "payantes"],
      certifications: [
        {
          id: 12,
          name: "Introduction to Modern AI",
          organization: "Cisco",
          date: "Émise le févr. 2025",
          logo: "assets/images/certif/introduction-to-modern-ai.png",
          category: "gratuites",
          url: "https://www.credly.com/badges/dd624677-4e8a-449b-8128-c3ab43ca7c5c/linked_in_profile",
        },
        {
          id: 11,
          name: "Networking Academy Learn-A-Thon 2024",
          organization: "Cisco",
          date: "Émise le janv. 2025",
          logo: "assets/images/certif/aca-2024.png",
          category: "gratuites",
          url: "https://www.credly.com/badges/527ca932-650b-4587-a104-481d85b1df7a/linked_in_profile",
        },
        {
          id: 10,
          name: "Cloud Digital Leader Certification",
          organization: "Google",
          date: "Émise le déc. 2024 · Expire le déc. 2027",
          logo: "assets/images/certif/google.png",
          category: "payantes",
          url: "https://cloud.google.com/learn/certification/cloud-digital-leader",
        },
        {
          id: 9,
          name: "Computer Hardware Basics",
          organization: "Cisco",
          date: "Date de délivrance : nov. 2024",
          logo: "assets/images/certif/computer-hardware-basics.png",
          category: "gratuites",
          url: "https://www.credly.com/badges/933c07b0-8890-41bb-b001-4d8a800a2143/linked_in_profile",
        },
        {
          id: 8,
          name: "Introduction to Data Science",
          organization: "Cisco",
          date: "Date de délivrance : nov. 2024",
          logo: "assets/images/certif/introduction-to-data-science.png",
          category: "gratuites",
          url: "https://www.credly.com/badges/5bbc8da9-3ac1-4f06-9cd6-cd2bd40f64a9/linked_in_profile",
        },
        {
          id: 7,
          name: "Operating Systems Basics",
          organization: "Cisco",
          date: "Date de délivrance : nov. 2024",
          logo: "assets/images/certif/operating-systems-basics.png",
          category: "gratuites",
          url: "https://www.credly.com/badges/e4ee794f-a211-453e-95d4-0da6fd48b920/linked_in_profile",
        },
        {
          id: 6,
          name: "Introduction to Cybersecurity",
          organization: "Cisco",
          date: "Date de délivrance : oct. 2024",
          logo: "assets/images/certif/introduction-to-cybersecurity.png",
          category: "gratuites",
          url: "https://www.credly.com/badges/b5526208-0a27-4446-8984-709763eac1da/linked_in_profile",
        },
        {
          id: 5,
          name: "Introduction to IoT",
          organization: "Cisco",
          date: "Date de délivrance : oct. 2024",
          logo: "assets/images/certif/introduction-to-iot.png",
          category: "gratuites",
          url: "https://www.credly.com/badges/0605da23-e589-4035-ab1d-5898cebc480c/linked_in_profile",
        },
        {
          id: 4,
          name: "Attestation de réussite - Spécialisation OAW",
          organization: "MOOC Gestion de Projet",
          date: "Émise le mai 2024 · Expire le mai 2027",
          logo: "assets/images/certif/mooc.png",
          category: "payantes",
          url: "https://moocgdp.gestiondeprojet.pm/certificates/59bb58d01b724ceeac68f61460edb27f",
        },
        {
          id: 3,
          name: "Attestation de réussite - Tronc commun",
          organization: "MOOC Gestion de Projet",
          date: "Émise le avr. 2024 · Expire le mai 2027",
          logo: "assets/images/certif/mooc.png",
          category: "payantes",
          url: "https://certification.gestiondeprojet.pm/GdP23ATC/GdP23TcV-LuSDVqZQA.pdf",
        },
        {
          id: 2,
          name: "Attestation de suivi SecNum",
          organization: "ANSSI",
          date: "Date de délivrance : nov. 2023",
          logo: "assets/images/certif/anssi.png",
          category: "gratuites",
          url: "https://www.secnumacademie.gouv.fr/",
        },
        {
          id: 1,
          name: "Certificat Pix",
          organization: "Pix",
          date: "Émise le janv. 2023 · Expire le janv. 2026",
          logo: "assets/images/certif/pix.png",
          category: "gratuites",
          url: "https://app.pix.fr/partage-certificat/2466408",
        },
      ],
      currentCategory: "toutes",
    };
  },
  computed: {
    filteredCertifications() {
      if (this.currentCategory === "toutes") return this.certifications;
      return this.certifications.filter(
        (cert) => cert.category === this.currentCategory
      );
    },
  },
  methods: {
    filterCategory(category) {
      this.currentCategory = category;
    },
    goToCertification(url) {
      if (url) {
        window.open(url, "_blank");
      }
    },
  },
});

certificationsApp.mount("#certificationsApp");

const projectsApp = Vue.createApp({
  data() {
    return {
      categories: ["Tous", "Personnel", "École"],
      projects: [
        {
          id: 10,
          title: "Business Care",
          image: "assets/images/project/business-care.png",
          tags: ["Typescript", "JavaScript", "NestJS", "VueJS", "HTML5"],
          category: "École",
          description:
            "Business Care est une application web complète (front-end et back-end) développée en équipe.  Elle permet la gestion des rendez-vous, des clients, et des services pour les professionnels.  J'ai principalement travaillé sur le back-end avec NestJS, en utilisant une architecture hexagonale et en implémentant des tests unitaires et d'intégration.",
        },
        {
          id: 9,
          title: "Portfolio Personnel",
          image: "assets/images/project/portfolio.png",
          tags: ["HTML5", "CSS", "JavaScript", "VueJS", "TailwindCSS"],
          category: "Personnel",
          description:
            "Ce portfolio a été créé pour présenter mes compétences et mes projets. Il est construit avec VueJS et TailwindCSS pour un rendu moderne et réactif. L'accent a été mis sur la simplicité d'utilisation et la clarté de la présentation.",
        },
        {
          id: 8,
          title:
            "Développement d'une application en langage C avec interface graphique",
          image: "assets/images/project/tetris.png",
          tags: ["C", "Interface Graphique", "Traitement de Données"],
          category: "École",
          description:
            "Ce projet consistait à développer un jeu de Tetris en C en utilisant la bibliothèque SDL pour l'interface graphique.  Le projet a permis d'approfondir mes connaissances en C, en gestion de la mémoire et en algorithmique.",
        },
        {
          id: 7,
          title: "Circle Packing en assembleur",
          image: "assets/images/project/asm.png",
          tags: ["Assembleur"],
          category: "École",
          description:
            "Ce projet, réalisé en assembleur x86-64, implémente un algorithme de 'circle packing'.  Il génère une image où des cercles de tailles aléatoires sont disposés sans se chevaucher.  Ce projet m'a permis de comprendre les bases de la programmation en assembleur.",
        },
        {
          id: 6,
          title: 'Développement d\'un site web dynamique "from scratch"',
          image: "assets/images/project/cmwnoir.png",
          tags: [
            "PHP",
            "JavaScript",
            "Gestion de Projet",
            "CSS",
            "HTML5",
            "Bootstrap",
            "MariaDB",
            "Linux",
            "Debian",
          ],
          category: "École",
          description:
            "Développement complet d'un site web pour une association, incluant la conception de la base de données, le back-end en PHP, le front-end avec HTML, CSS, JavaScript et Bootstrap, ainsi que le déploiement sur un serveur Debian.  Ce projet a été un excellent exercice de gestion de projet de A à Z.",
        },
        {
          id: 5,
          title: "NAS à domicile",
          image: "assets/images/project/nas.png",
          tags: ["Serveur Linux", "Administration Réseau", "Ubuntu"],
          category: "Personnel",
          description:
            "- Installation d'Ubuntu sur un PC personnel suivi du branchement d'un disque dur externe. \n- Mise en place de FreeNAS sur la machine et configuration du serveur NAS pour le partage de fichiers. \n- Vérification de la fonctionnalité du système et mise en œuvre d'une stratégie de sauvegarde en utilisant les outils fournis par FreeNAS.",
        },
        {
          id: 4,
          title: "Site Web avec Base de Données (BDD)",
          image: "assets/images/project/web.png",
          tags: [
            "Python",
            "HTML5",
            "SQLite",
            "SQL",
            "CSS",
            "PHP",
            "JavaScript",
          ],
          category: "École",
          description:
            "Création d'un site web interactif permettant de gérer des données stockées dans une base de données SQLite.  Le projet combine des technologies front-end (HTML, CSS, JavaScript) et back-end (Python, PHP) pour une expérience utilisateur complète.",
        },
        {
          id: 3,
          title: "Pavage par des trapèzes en Python",
          image: "assets/images/project/python.png",
          tags: ["Python", "Script", "Graphique"],
          category: "École",
          description:
            "Ce script Python génère un pavage aléatoire de l'écran avec des trapèzes.  Il utilise la bibliothèque turtle pour le rendu graphique.  Ce projet a été une projet intéressant pour améliorer nos compétences déjà acquises en Python.",
        },
        {
          id: 2,
          title: "Site Web",
          image: "assets/images/project/web.png",
          tags: ["Python", "HTML5", "CSS", "JavaScript", "Flask"],
          category: "École",
          description:
            "Développement d'un site web simple utilisant le framework Flask en Python.  Le site comprend des pages HTML, du style CSS, et des interactions JavaScript. Le but était de se familiariser avec le développement web côté serveur avec Flask.",
        },
        {
          id: 1,
          title: "Bot en JavaScript",
          image: "assets/images/project/discord.png",
          tags: ["Node.js", "JavaScript", "discord.js"],
          category: "Personnel",
          description:
            "Création d'un bot Discord en JavaScript avec la bibliothèque discord.js.  Le bot peut répondre à des commandes, gérer des rôles, et interagir avec les utilisateurs.  Ce projet a permis d'apprendre les bases de la programmation de bots Discord et l'utilisation de l'API Discord.",
        },
      ],
      currentCategory: "Tous",
      selectedProject: null,
      tagColors: {
        C: "bg-blue-200 text-blue-900",
        "Interface Graphique": "bg-green-200 text-green-900",
        "Traitement de Données": "bg-amber-200 text-amber-900",
        PHP: "bg-purple-200 text-purple-900",
        JavaScript: "bg-yellow-200 text-yellow-900",
        "Gestion de Projet": "bg-teal-200 text-teal-900",
        CSS: "bg-blue-300 text-blue-900",
        HTML5: "bg-orange-200 text-orange-900",
        Bootstrap: "bg-indigo-200 text-indigo-900",
        MariaDB: "bg-red-200 text-red-900",
        Linux: "bg-gray-200 text-gray-900",
        Debian: "bg-gray-300 text-gray-900",
        "Serveur Linux": "bg-gray-200 text-gray-900",
        "Administration Réseau": "bg-green-300 text-green-900",
        Ubuntu: "bg-red-300 text-red-900",
        Python: "bg-lime-200 text-lime-900",
        SQLite: "bg-fuchsia-200 text-fuchsia-900",
        SQL: "bg-pink-200 text-pink-900",
        Script: "bg-violet-200 text-violet-900",
        Graphique: "bg-cyan-200 text-cyan-900",
        Flask: "bg-emerald-200 text-emerald-900",
        "Node.js": "bg-emerald-300 text-emerald-900",
        "discord.js": "bg-sky-200 text-sky-900",
        VueJS: "bg-emerald-400",
        NestJS: "bg-red-400",
        TailwindCSS: "bg-blue-400",
        Typescript: "bg-yellow-400",
        Assembleur: "bg-gray-400",
        Linux: "bg-gray-400",
      },
    };
  },
  computed: {
    filteredProjects() {
      return this.currentCategory === "Tous"
        ? this.projects
        : this.projects.filter(
            (project) => project.category === this.currentCategory
          );
    },
  },
  methods: {
    filterCategory(category) {
      this.currentCategory = category;
      this.selectedProject = null;
    },
    getTagColor(tag) {
      return this.tagColors[tag] || "bg-gray-100 text-gray-800";
    },
    showProjectDetails(project) {
      this.selectedProject = project;
    },
    closeProjectDetails() {
      this.selectedProject = null;
    },
  },
});

projectsApp.mount("#projectsApp");
