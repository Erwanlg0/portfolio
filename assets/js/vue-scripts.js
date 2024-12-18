const certificationsApp = Vue.createApp({
  data() {
    return {
      categories: ["Toutes", "Gratuites", "Payantes"],
      certifications: [
        {
          id: 1,
          name: "Cloud Digital Leader Certification",
          organization: "Google",
          date: "Émise le déc. 2024 · Expire le déc. 2027",
          logo: "assets/images/certif/google.png",
          category: "Payantes",
        },
        {
          id: 2,
          name: "Computer Hardware Basics",
          organization: "Cisco",
          date: "Date de délivrance : nov. 2024",
          logo: "assets/images/certif/computer-hardware-basics.png",
          category: "Gratuites",
        },
        {
          id: 3,
          name: "Introduction to Data Science",
          organization: "Cisco",
          date: "Date de délivrance : nov. 2024",
          logo: "assets/images/certif/introduction-to-data-science.png",
          category: "Gratuites",
        },
        {
          id: 4,
          name: "Operating Systems Basics",
          organization: "Cisco",
          date: "Date de délivrance : nov. 2024",
          logo: "assets/images/certif/operating-systems-basics.png",
          category: "Gratuites",
        },
        {
          id: 5,
          name: "Introduction to Cybersecurity",
          organization: "Cisco",
          date: "Date de délivrance : oct. 2024",
          logo: "assets/images/certif/introduction-to-cybersecurity.png",
          category: "Gratuites",
        },
        {
          id: 6,
          name: "Introduction to IoT",
          organization: "Cisco",
          date: "Date de délivrance : oct. 2024",
          logo: "assets/images/certif/introduction-to-iot.png",
          category: "Gratuites",
        },
        {
          id: 7,
          name: "Attestation de réussite - Spécialisation OAW",
          organization: "MOOC Gestion de Projet",
          date: "Émise le mai 2024 · Expire le mai 2027",
          logo: "assets/images/certif/mooc.png",
          category: "Payantes",
        },
        {
          id: 8,
          name: "Attestation de réussite - Tronc commun",
          organization: "MOOC Gestion de Projet",
          date: "Émise le avr. 2024 · Expire le mai 2027",
          logo: "assets/images/certif/mooc.png",
          category: "Payantes",
        },
        {
          id: 9,
          name: "Attestation de suivi SecNum",
          organization: "ANSSI",
          date: "Date de délivrance : nov. 2023",
          logo: "assets/images/certif/anssi.png",
          category: "Gratuites",
        },
        {
          id: 10,
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
      categories: ["Tous", "Perso", "École"],
      projects: [
        {
          id: 1,
          title:
            "Développement d'une application en langage C avec interface graphique",
          image: "assets/images/project/tetris.png",
          tags: ["C", "Interface Graphique", "Traitement de Données"],
          category: "École",
        },
        {
          id: 2,
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
          id: 3,
          title: "NAS à domicile",
          image: "assets/images/project/nas.png",
          tags: ["Serveur Linux", "Administration Réseau", "Ubuntu"],
          category: "Perso",
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
          id: 5,
          title: "Pavage par des trapèzes en Python",
          image: "assets/images/project/python.png",
          tags: ["Python", "Script", "Graphique"],
          category: "École",
        },
        {
          id: 6,
          title: "Site Web",
          image: "assets/images/project/web.png",
          tags: ["Python", "HTML5", "CSS", "JavaScript", "Flask"],
          category: "École",
        },
        {
          id: 7,
          title: "Bot en JavaScript",
          image: "assets/images/project/discord.png",
          tags: ["Node.js", "JavaScript", "discord.js"],
          category: "Perso",
        },
      ],
      currentCategory: "Tous",
    };
  },
  computed: {
    filteredProjects() {
      if (this.currentCategory === "Tous") return this.projects;
      return this.projects.filter(
        (project) => project.category === this.currentCategory
      );
    },
  },
  methods: {
    filterCategory(category) {
      this.currentCategory = category;
    },
  },
});

projectsApp.mount("#projectsApp");
