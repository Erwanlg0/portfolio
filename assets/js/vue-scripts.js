const certificationsApp = Vue.createApp({
  data() {
    return {
      categories: ["Toutes", "Gratuites", "Payantes"],
      certifications: [
        {
          id: 12,
          name: "Introduction to Modern AI",
          organization: "Cisco",
          date: "Émise le févr. 2025",
          logo: "assets/images/certif/introduction-to-modern-ai.png",
          category: "Gratuites",
        },
        {
          id: 11,
          name: "Networking Academy Learn-A-Thon 2024",
          organization: "Cisco",
          date: "Émise le janv. 2025",
          logo: "assets/images/certif/aca-2024.png",
          category: "Gratuites",
        },
        {
          id: 10,
          name: "Cloud Digital Leader Certification",
          organization: "Google",
          date: "Émise le déc. 2024 · Expire le déc. 2027",
          logo: "assets/images/certif/google.png",
          category: "Payantes",
        },
        {
          id: 9,
          name: "Computer Hardware Basics",
          organization: "Cisco",
          date: "Date de délivrance : nov. 2024",
          logo: "assets/images/certif/computer-hardware-basics.png",
          category: "Gratuites",
        },
        {
          id: 8,
          name: "Introduction to Data Science",
          organization: "Cisco",
          date: "Date de délivrance : nov. 2024",
          logo: "assets/images/certif/introduction-to-data-science.png",
          category: "Gratuites",
        },
        {
          id: 7,
          name: "Operating Systems Basics",
          organization: "Cisco",
          date: "Date de délivrance : nov. 2024",
          logo: "assets/images/certif/operating-systems-basics.png",
          category: "Gratuites",
        },
        {
          id: 6,
          name: "Introduction to Cybersecurity",
          organization: "Cisco",
          date: "Date de délivrance : oct. 2024",
          logo: "assets/images/certif/introduction-to-cybersecurity.png",
          category: "Gratuites",
        },
        {
          id: 5,
          name: "Introduction to IoT",
          organization: "Cisco",
          date: "Date de délivrance : oct. 2024",
          logo: "assets/images/certif/introduction-to-iot.png",
          category: "Gratuites",
        },
        {
          id: 4,
          name: "Attestation de réussite - Spécialisation OAW",
          organization: "MOOC Gestion de Projet",
          date: "Émise le mai 2024 · Expire le mai 2027",
          logo: "assets/images/certif/mooc.png",
          category: "Payantes",
        },
        {
          id: 3,
          name: "Attestation de réussite - Tronc commun",
          organization: "MOOC Gestion de Projet",
          date: "Émise le avr. 2024 · Expire le mai 2027",
          logo: "assets/images/certif/mooc.png",
          category: "Payantes",
        },
        {
          id: 2,
          name: "Attestation de suivi SecNum",
          organization: "ANSSI",
          date: "Date de délivrance : nov. 2023",
          logo: "assets/images/certif/anssi.png",
          category: "Gratuites",
        },
        {
          id: 1,
          name: "Certificat Pix",
          organization: "Pix",
          date: "Émise le janv. 2023 · Expire le janv. 2026",
          logo: "assets/images/certif/pix.png",
          category: "Gratuites",
        },
      ],
      currentCategory: "Toutes",
    };
  },
  computed: {
    filteredCertifications() {
      if (this.currentCategory === "Toutes") return this.certifications;
      return this.certifications.filter(
        (cert) => cert.category === this.currentCategory
      );
    },
  },
  methods: {
    filterCategory(category) {
      this.currentCategory = category;
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
        },
        {
          id: 9,
          title: "Portfolio Personnel",
          image: "assets/images/project/portfolio.png",
          tags: ["HTML5", "CSS", "JavaScript", "VueJS", "TailwindCSS"],
          category: "Personnel",
        },
        {
          id: 8,
          title:
            "Développement d'une application en langage C avec interface graphique",
          image: "assets/images/project/tetris.png",
          tags: ["C", "Interface Graphique", "Traitement de Données"],
          category: "École",
        },
        {
          id: 7,
          title: "Circle Packing en assembleur",
          image: "assets/images/project/asm.png",
          tags: ["Assembleur"],
          category: "École",
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
        },
        {
          id: 5,
          title: "NAS à domicile",
          image: "assets/images/project/nas.png",
          tags: ["Serveur Linux", "Administration Réseau", "Ubuntu"],
          category: "Personnel",
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
        },
        {
          id: 3,
          title: "Pavage par des trapèzes en Python",
          image: "assets/images/project/python.png",
          tags: ["Python", "Script", "Graphique"],
          category: "École",
        },
        {
          id: 2,
          title: "Site Web",
          image: "assets/images/project/web.png",
          tags: ["Python", "HTML5", "CSS", "JavaScript", "Flask"],
          category: "École",
        },
        {
          id: 1,
          title: "Bot en JavaScript",
          image: "assets/images/project/discord.png",
          tags: ["Node.js", "JavaScript", "discord.js"],
          category: "Personnel",
        },
      ],
      currentCategory: "Tous",
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
    },
    getTagColor(tag) {
      return this.tagColors[tag] || "bg-gray-100 text-gray-800";
    },
  },
});

projectsApp.mount("#projectsApp");
