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

  // Chiffres clés affichés en haut (valeur + libellé)
  chiffres: [
    { valeur: 4, suffixe: "+", libelle: "années d'expérience terrain" },
    { valeur: 2, suffixe: "", libelle: "BTS en alternance" },
    { valeur: 600, suffixe: "+", libelle: "locataires relancés (enquête OPS)" },
    { valeur: 2027, suffixe: "", libelle: "disponible en septembre" },
  ],

  // « Ce qui me définit » : une qualité, illustrée par une expérience réelle
  // icone possible : target, message, lock, shuffle
  valeurs: [
    {
      titre: "Rigueur",
      icone: "target",
      texte: "Délais de réponse suivis, GRC et tableaux de bord tenus à jour, dossiers tracés de bout en bout.",
    },
    {
      titre: "Écoute",
      icone: "message",
      texte: "Au contact quotidien des locataires, des collègues et des prestataires, je reformule pour bien comprendre chaque besoin.",
    },
    {
      titre: "Discrétion",
      icone: "lock",
      texte: "Je manipule des données personnelles sensibles (revenus, situations familiales) dans le strict respect du RGPD.",
    },
    {
      titre: "Adaptabilité",
      icone: "shuffle",
      texte: "De la maintenance industrielle à la gestion administrative puis aux RH : j'apprends vite et je m'investis.",
    },
  ],

  // Encadré « Ce que je recherche »
  recherche: [
    { label: "Poste", valeur: "Alternance RH — droit social & paie" },
    { label: "Formation visée", valeur: "Licence / bachelor RH" },
    { label: "Début", valeur: "Septembre 2027" },
    { label: "Secteur géographique", valeur: "Lille et métropole" },
    { label: "Mobilité", valeur: "Permis B" },
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
      description:
        "Rattaché au directeur d'agence, j'occupe un rôle d'interface : collecter, fiabiliser et faire circuler l'information de l'agence, dans le cadre du BTS Gestion de la PME.",
      missions: [
        "Répartition et suivi du courrier, dont les demandes institutionnelles (mairies, élus) : accusés de réception, délais de réponse, circuit de signature via le parapheur iXBus",
        "Mise à jour de la GRC et des tableaux de bord de l'agence",
        "Campagne de relance réglementaire (enquête OPS) auprès de plus de 600 locataires",
        "Gestion de la flotte automobile de l'agence (Lille et Lomme) : réservations CarFleet, révisions et réparations avec le prestataire Stellantis",
        "Bons de commande fournisseurs et suivi logistique",
        "Application des engagements de service Qualibail (certification AFNOR)",
        "Relais interne de l'agence : référent RH, logistique et correspondant informatique",
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

  // Missions phares, affichées sous forme de cartes avec un chiffre clé
  realisations: [
    {
      titre: "Campagne de relance — enquête OPS",
      contexte:
        "Enquête réglementaire obligatoire (loi du 4 mars 1996) : les locataires doivent transmettre leur avis d'imposition. On m'a confié la relance des locataires en non-réponse.",
      kpi: { valeur: "600+", libelle: "locataires relancés · environ 60 % des avis manquants récupérés" },
      actions: [
        "Ciblage à partir du fichier OPS et vérification des coordonnées dans IKOS",
        "Stratégie multicanale : e-mails en copie cachée, campagne SMS, publipostage prêt en renfort",
        "Enregistrement des avis reçus dans les comptes locataires",
        "Remontée des dossiers injoignables à l'assistante sociale",
      ],
      outils: ["IKOS", "Excel", "Outlook", "Word (publipostage)", "Campagne SMS", "RGPD"],
    },
    {
      titre: "Maintenance de la flotte automobile",
      contexte:
        "Cinq véhicules de l'agence signalaient une révision à faire, dont deux avec un bruit suspect. Objectif : tout faire réviser sans paralyser l'activité des équipes.",
      kpi: { valeur: "5", libelle: "véhicules planifiés en révision chez Stellantis, sans interrompre l'activité" },
      actions: [
        "Contrôle du parc et priorisation des interventions",
        "Prise de rendez-vous auprès du prestataire dans le cadre du contrat d'entretien",
        "Planning de dépôts échelonnés et navettes organisées avec une collègue",
        "Explication technique de la panne au réceptionnaire pour obtenir un diagnostic fiable",
      ],
      outils: ["CarFleet", "Outlook (agenda partagé)", "Relation fournisseur"],
    },
    {
      titre: "Cartographie des risques de l'agence",
      contexte:
        "Dans le cadre de l'épreuve E5, recensement et évaluation des risques et dysfonctionnements de l'agence de Lille et de l'antenne de Lomme.",
      kpi: { valeur: "16", libelle: "risques et dysfonctionnements analysés sur 8 familles" },
      actions: [
        "Notation de chaque risque : gravité × probabilité (score sur 16) et faisabilité",
        "Hiérarchisation dans une matrice et choix d'un risque prioritaire : le risque routier lié au parc automobile",
        "Analyse des causes et des conséquences, puis proposition de mesures de prévention",
      ],
      outils: ["Matrice des risques", "SST", "RGPD / cybersécurité"],
    },
    {
      titre: "Analyse de l'entreprise et démarche qualité",
      contexte:
        "Dossier d'analyse de Partenord Habitat, premier bailleur social du Nord : environnement, organisation, management et gestion des risques.",
      kpi: { valeur: "Qualibail", libelle: "engagements de service étudiés et appliqués au quotidien" },
      actions: [
        "Analyse SWOT et chaîne de valeur de l'organisme",
        "Analyse managériale : structure, style de management, modes de coordination",
        "Logigramme du traitement d'une demande de logement",
        "Étude de la démarche qualité (logique PDCA) et des moyens de prévention des risques",
      ],
      outils: ["SWOT", "Logigramme", "PDCA", "Analyse managériale"],
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

  // icone possible : users, briefcase, box, tools, monitor, code, sparkles
  competences: [
    {
      groupe: "RH & juridique",
      icone: "users",
      items: [
        "Gestion de la paie",
        "Droit social",
        "Référent RH de l'agence",
        "Protection des données (RGPD)",
        "Cadre réglementaire du logement social",
        "Veille législative et parlementaire",
      ],
    },
    {
      groupe: "Gestion & administration",
      icone: "briefcase",
      items: [
        "Gestion du courrier et des délais de réponse",
        "Mise à jour de la GRC / CRM",
        "Relances et campagnes multicanales",
        "Relation fournisseurs (contrat d'entretien)",
        "Suivi de tableaux de bord",
        "Circuits de validation (parapheur iXBus)",
        "Démarche qualité Qualibail",
        "Gestion de parc automobile (CarFleet)",
        "Bons de commande",
        "Analyse et cartographie des risques",
        "Analyse SWOT et logigrammes",
        "Planification de projet",
        "Coordination avec les équipes",
      ],
    },
    {
      groupe: "Logistique & terrain",
      icone: "box",
      items: [
        "Préparation et contrôle de commandes",
        "Respect des délais et standards qualité",
        "Diagnostic de pannes",
        "Maintenance préventive et corrective",
        "Suivi des VGP",
        "Habilitation électrique BT",
      ],
    },
    {
      groupe: "Bureautique & logiciels",
      icone: "monitor",
      items: ["IKOS (gestion locative)", "Word (publipostage)", "Excel", "PowerPoint", "Outlook", "Campagne SMS", "SQL", "Autodesk Inventor", "SolidWorks", "Onshape", "Reaper (audio)"],
    },
    {
      groupe: "Numérique & IA",
      icone: "code",
      items: [
        "HTML / CSS / JavaScript",
        "Node.js",
        "GitHub & GitHub Actions",
        "Automatisation de la collecte de données",
        "Open data (Assemblée nationale, Insee)",
        "Fondamentaux de l'IA",
      ],
    },
    {
      groupe: "Qualités",
      icone: "sparkles",
      items: ["Rigoureux", "Autonome", "Persévérant", "Écoute active", "Communication écrite et orale", "Sens des priorités", "Dynamique", "Curieux", "Créatif", "Discret", "Adaptable"],
    },
  ],

  projets: [
    {
      nom: "Hémicycle France — la politique française, preuves à l'appui",
      description:
        "Projet personnel : un site de transparence politique mis à jour automatiquement chaque jour. Votes des députés groupe par groupe, fiche de chaque député, scrutins du Sénat, candidats et sondages 2027, dirigeants des partis et chiffres de l'Insee. Chaque donnée est recoupée avec sa source officielle avant d'être publiée.",
      tags: ["Institutions", "Open data", "JavaScript", "Automatisation"],
      lien: "https://tahns.github.io/hemicycle-france/",
      code: "https://github.com/Tahns/hemicycle-france",
    },
  ],

  certifications: ["Elements of AI", "Microsoft Learn — AI Fundamentals"],

  langues: ["Français — langue maternelle", "Anglais — professionnel", "Portugais — notions"],

  interets: ["Course à pied", "Musculation", "Voyage", "Mixage de voix"],

  contact:
    "Vous recrutez un alternant RH pour septembre 2027\u00a0? Écrivez-moi par email ou sur LinkedIn.",
};
