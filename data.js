// ============================================================
//  TOUT LE CONTENU DU PORTFOLIO EST ICI.
//  Modifie ce fichier, la page se met à jour toute seule.
//  Laisse un champ vide ("") ou une liste vide ([]) pour le masquer.
// ============================================================

window.PORTFOLIO = {
  nom: "Léo Dellouve",
  titre: "Assistant d'agence en alternance · BTS Gestion de la PME",
  localisation: "Lille, Hauts-de-France",
  accroche:
    "Reconverti après plusieurs années en maintenance industrielle, je construis mon parcours vers les ressources humaines. Je recherche une alternance RH en droit social et paie à partir de septembre 2027.",
  photo: "", // ex : "photo.jpg" (dépose le fichier dans le dépôt) — sinon tes initiales s'affichent
  disponible: "Recherche alternance RH · Droit social & Paie · rentrée 2027",

  // Phrases qui défilent sous ton nom
  roles: ["Futur alternant RH", "Droit social & paie", "Assistant d'agence", "Ancien technicien de maintenance"],

  // Chiffres clés affichés en haut (valeur + libellé)
  chiffres: [
    { valeur: 4, suffixe: "+", libelle: "années d'expérience terrain" },
    { valeur: 2, suffixe: "", libelle: "BTS en alternance" },
    { valeur: 3, suffixe: "", libelle: "langues" },
    { valeur: 2027, suffixe: "", libelle: "disponible en septembre" },
  ],

  // Encadré « Ce que je recherche »
  recherche: [
    { label: "Poste", valeur: "Alternance RH — droit social & paie" },
    { label: "Formation visée", valeur: "Licence / bachelor RH" },
    { label: "Début", valeur: "Septembre 2027" },
    { label: "Secteur géographique", valeur: "Lille et métropole" },
  ],

  liens: {
    linkedin: "https://www.linkedin.com/in/leo-dellouve/",
    github: "https://github.com/Tahns",
    email: "leodellouve11@gmail.com",
    cv: "", // ex : "cv.pdf" (dépose le fichier dans le dépôt)
  },

  apropos: [
    "Après un bac STI2D et un BTS Maintenance des systèmes en alternance, j'ai travaillé plusieurs années sur le terrain, en maintenance industrielle puis en logistique. J'ai ensuite pris le temps de redéfinir mon projet professionnel autour de la gestion d'entreprise et des ressources humaines.",
    "Aujourd'hui en alternance comme assistant d'agence chez Partenord Habitat, dans le cadre d'un BTS Gestion de la PME, je poursuivrai à la rentrée 2027 avec une licence / bachelor RH spécialité droit social et paie. Mon objectif\u00a0: évoluer vers la gestion administrative du personnel, la paie et les relations sociales.",
    "Rigoureux, autonome et à l'aise avec les outils de gestion (CRM, tableaux de bord, circuits de validation), je recherche une entreprise pour m'accueillir en alternance à partir de septembre 2027.",
  ],

  experiences: [
    {
      poste: "Assistant d'agence — alternance",
      entreprise: "Partenord Habitat · Lille",
      periode: "Sept. 2025 — Aujourd'hui",
      actuel: true,
      description: "Rattaché au directeur d'agence, dans le cadre du BTS Gestion de la PME.",
      missions: [
        "Gestion de la correspondance et mise à jour du CRM",
        "Suivi des tableaux de bord et validation des documents via le parapheur iXBus",
        "Application de la démarche qualité Qualibail",
        "Gestion du parc automobile de l'agence (5 véhicules, Lille et Lomme) : validation des réservations, suivi de l'entretien via CarFleet",
      ],
    },
    {
      poste: "Préparateur de commandes",
      entreprise: "Picnic Technologies · Lesquin",
      periode: "Sept. 2024 — Juil. 2025",
      description:
        "Préparation et contrôle des commandes clients en entrepôt logistique, dans le respect des délais et des standards de qualité.",
    },
    {
      poste: "Responsable de projet — stage de fin d'études",
      entreprise: "Fives · Ronchin",
      periode: "Avr. 2024 — Mai 2024",
      description:
        "Participation à la gestion d'un projet industriel : planification des tâches, suivi des bons de commande et coordination avec les équipes.",
    },
    {
      poste: "Technicien de maintenance — alternance",
      entreprise: "Groupe Kiloutou · Lesquin",
      periode: "Sept. 2022 — Avr. 2024",
      description:
        "Maintenance de matériel de location professionnel : diagnostic de pannes, entretien préventif et réparations.",
    },
  ],

  formation: [
    {
      diplome: "BTS Gestion de la PME — en alternance (en cours)",
      ecole: "Alésia Formation",
      periode: "2025 — 2027",
    },
    {
      diplome: "BTS Maintenance des systèmes — en alternance",
      ecole: "AFPI",
      periode: "2022 — 2024",
    },
    {
      diplome: "Baccalauréat STI2D",
      ecole: "Lycée César Baggio · Lille",
      periode: "2019 — 2022",
    },
  ],

  competences: [
    { groupe: "RH & juridique", items: ["Gestion de la paie", "Droit social"] },
    { groupe: "Gestion & administration", items: ["CRM", "Tableaux de bord", "Parapheur iXBus", "Démarche qualité Qualibail", "Gestion de parc automobile (CarFleet)"] },
    { groupe: "Outils", items: ["Word", "Excel", "PowerPoint", "HTML / CSS / JavaScript"] },
    { groupe: "Qualités", items: ["Rigoureux", "Autonome", "Curieux", "Dynamique"] },
  ],

  projets: [
    {
      nom: "Hémicycle — la politique française, preuves à l'appui",
      description:
        "Projet personnel : un site de transparence parlementaire mis à jour automatiquement chaque jour. Votes des députés groupe par groupe, scrutins du Sénat, sondages 2027 et chiffres de l'Insee, chaque donnée étant recoupée avec sa source officielle.",
      tags: ["Institutions", "Open data", "JavaScript"],
      lien: "https://tahns.github.io/politique-france/",
      code: "https://github.com/Tahns/politique-france",
    },
  ],

  certifications: ["Elements of AI", "Microsoft Learn — AI Fundamentals"],

  langues: ["Français — langue maternelle", "Anglais — professionnel", "Portugais — notions"],

  interets: ["Course à pied", "Musculation", "Voyage", "Mixage de voix"],

  contact:
    "Vous recrutez un alternant RH pour septembre 2027\u00a0? Écrivez-moi par email ou sur LinkedIn.",
};
