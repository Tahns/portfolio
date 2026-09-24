// ============================================================
//  TOUT LE CONTENU DU PORTFOLIO EST ICI.
//  Modifie ce fichier, la page se met à jour toute seule.
//  Laisse un champ vide ("") ou une liste vide ([]) pour le masquer.
// ============================================================

window.PORTFOLIO = {
  nom: "Léo Dellouve",
  titre: "Technicien en maintenance des systèmes · Développeur web autodidacte",
  localisation: "Métropole lilloise (Nord) · Permis B",
  accroche:
    "Formé à la maintenance industrielle en alternance, j'aime comprendre comment les choses fonctionnent, trouver la panne et la réparer. En parallèle, je conçois des sites web qui vont chercher et vérifier leurs données tout seuls.",
  photo: "", // ex : "photo.jpg" (dépose le fichier dans le dépôt) — sinon tes initiales s'affichent
  disponible: "En recherche d'alternance · licence pro 2027",

  liens: {
    linkedin: "https://www.linkedin.com/in/leo-dellouve/",
    github: "https://github.com/Tahns",
    email: "", // ex : "prenom.nom@mail.com"
    cv: "", // ex : "cv.pdf" (dépose le fichier dans le dépôt)
  },

  apropos: [
    "Après un bac STI2D, j'ai préparé un BTS Maintenance des systèmes en alternance à l'AFPI de Marcq-en-Barœul, chez Kiloutou et Fives ECL. Diagnostic de pannes, commandes de pièces, remise en état de machines : j'y ai appris la rigueur du terrain.",
    "Curieux et créatif, je développe aussi en autodidacte : des sites web, des outils qui automatisent la collecte de données publiques, et des extensions de jeux vidéo. Je cherche aujourd'hui une alternance pour poursuivre en licence professionnelle.",
  ],

  experiences: [
    {
      poste: "Technicien de maintenance en alternance",
      entreprise: "Kiloutou · Fives ECL",
      periode: "2022 — 2024",
      description:
        "Diagnostic de pannes, commandes de pièces et remontage sur un parc de machines de location variées (aspirateurs, pilonneuses, groupes électrogènes, nettoyeurs haute pression…). Accompagnement des vérifications générales périodiques (VGP). Mise en place d'un déshuileur de machine et d'un système anti-débordement de lubrifiant.",
    },
  ],

  formation: [
    {
      diplome: "BTS Maintenance des systèmes (option A, systèmes de production) — en alternance",
      ecole: "AFPI · Marcq-en-Barœul",
      periode: "2022 — 2024",
    },
    {
      diplome: "Habilitation électrique basse tension (H0V, BR, BC, B2V)",
      ecole: "Certification",
      periode: "2024",
    },
    {
      diplome: "Baccalauréat STI2D",
      ecole: "Lycée Baggio · Lille",
      periode: "2022",
    },
  ],

  competences: [
    { groupe: "Maintenance", items: ["Diagnostic de pannes", "Remise en état", "Commande de pièces", "Suivi VGP", "Habilitation électrique BT"] },
    { groupe: "Conception 3D", items: ["Autodesk Inventor", "SolidWorks", "Onshape"] },
    { groupe: "Web & données", items: ["HTML", "CSS", "JavaScript", "Node.js", "SQL", "GitHub Actions"] },
    { groupe: "Bureautique", items: ["Word", "Excel", "PowerPoint"] },
    { groupe: "Audio", items: ["Reaper", "Mixage de voix"] },
    { groupe: "Qualités", items: ["Discret", "Dynamique", "Créatif", "Curieux"] },
  ],

  projets: [
    {
      nom: "Hémicycle — la politique française, preuves à l'appui",
      description:
        "Site de transparence parlementaire mis à jour automatiquement chaque jour : votes des députés groupe par groupe, scrutins du Sénat, sondages 2027 et chiffres de l'Insee. Chaque donnée est recoupée avec sa source officielle avant d'être publiée.",
      tags: ["JavaScript", "Node.js", "Open data", "GitHub Actions"],
      lien: "https://tahns.github.io/politique-france/",
      code: "https://github.com/Tahns/politique-france",
    },
    {
      nom: "Fiche personnage interactive",
      description:
        "Un livre animé en HTML/CSS/JS : les pages se tournent pour présenter l'histoire, les ambitions et l'apparence d'un personnage de jeu de rôle.",
      tags: ["HTML", "CSS", "JavaScript"],
      lien: "https://tahns.github.io/senju.github.io/",
      code: "https://github.com/Tahns/senju.github.io",
    },
  ],

  langues: ["Français — langue maternelle", "Anglais — B1"],

  interets: ["Course à pied", "Musculation", "Extensions de jeux vidéo", "Mixage de voix", "Voyage"],

  contact: "Vous proposez une alternance ou vous souhaitez échanger\u00a0? Écrivez-moi sur LinkedIn.",
};
