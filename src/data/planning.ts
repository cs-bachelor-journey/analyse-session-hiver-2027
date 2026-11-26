export type Activity = {
  label: string
  hours: string
  /** Plage suggérée dans la journée (ex. de « 10:00 » à « 12:00 »). */
  slot: { start: string; end: string }
}

export type DayPlan = {
  day: string
  activities: Activity[]
}

export type ScheduledClass = {
  courseId: string
  time: string
  kind: 'cours' | 'laboratoire'
  note?: string
}

export type SessionDay = {
  day: string
  classes: ScheduledClass[]
  dayNote?: string
}

/** Horaires synchrones officiels de la session d'hiver 2027 (sujets à modification). */
export const sessionCalendar: SessionDay[] = [
  {
    day: 'Lundi',
    classes: [
      {
        courseId: 'ift-1000',
        time: '16h30 – 17h50',
        kind: 'cours',
        note: 'Classe virtuelle synchrone (cours à distance)',
      },
    ],
  },
  {
    day: 'Mardi',
    classes: [
      {
        courseId: 'glo-2005',
        time: '12h30 – 15h20',
        kind: 'cours',
        note: 'Comodal — en classe ou à distance, séances enregistrées',
      },
      {
        courseId: 'gif-1001',
        time: '14h30 – 16h20',
        kind: 'cours',
        note: 'Comodal — chevauchement de 50 minutes avec GLO-2005',
      },
    ],
    dayNote:
      'Chevauchement de 50 minutes entre GLO-2005 et GIF-1001. Piste de solution : suivre GIF-1001 en direct et revoir GLO-2005 en différé grâce à ses enregistrements — à confirmer avec le département.',
  },
  {
    day: 'Mercredi',
    classes: [
      { courseId: 'gif-1003', time: '9h30 – 12h20', kind: 'cours' },
      { courseId: 'glo-2005', time: '13h30 – 15h20', kind: 'laboratoire' },
      {
        courseId: 'ift-1000',
        time: '15h30 – 16h50',
        kind: 'cours',
        note: 'Classe virtuelle synchrone — seulement 10 minutes après le laboratoire de GLO-2005',
      },
    ],
  },
  {
    day: 'Jeudi',
    classes: [{ courseId: 'ift-2002', time: '15h30 – 18h20', kind: 'cours' }],
  },
  {
    day: 'Vendredi',
    classes: [
      {
        courseId: 'gif-1003',
        time: 'Section au choix',
        kind: 'laboratoire',
        note: 'Section liée obligatoire — voir le choix de section ci-dessous',
      },
    ],
  },
]

/** Sections de laboratoire du cours GIF-1003 (vendredi). */
export const labSections: { section: string; time: string; recommended?: boolean }[] = [
  { section: 'A', time: '10h30 – 12h20' },
  { section: 'B', time: '12h30 – 14h20', recommended: true },
  { section: 'C', time: '14h30 – 16h20', recommended: true },
  { section: 'D', time: '16h30 – 18h20' },
]

/** Points à confirmer avec la gestion des études avant de finaliser l'inscription. */
export const scheduleConfirmations: string[] = [
  "Suivre GIF-1001 en direct le mardi et visionner l'enregistrement de GLO-2005 en différé : est-ce permis, les deux cours étant en formule comodale ?",
  "Les enregistrements de GLO-2005 couvrent-ils bien les activités et les contenus nécessaires, sans présence obligatoire pendant la séance du mardi ?",
  "Vérifier les horaires des examens sous surveillance, particulièrement ceux des cours à distance et comodaux : aucun accommodement n'est accordé en cas de conflit.",
]

/** Dates officielles de la session, tirées du calendrier universitaire 2026-2027 de l'Université Laval. */
export const sessionInfo = {
  start: '2027-01-11',
  end: '2027-04-23',
  lectureWeek: { start: '2027-03-01', end: '2027-03-05' },
  easter: [
    { date: '2027-03-26' },
    { date: '2027-03-29' },
  ],
  examsPeriod: { start: '2027-04-26', end: '2027-05-02' },
  importantDates: [
    { date: '2027-01-11', label: 'Début de la session d\u2019hiver 2027' },
    { date: '2027-01-25', label: 'Date limite — abandon de cours avec remboursement' },
    { date: '2027-02-15', label: 'Date limite — paiement de tout solde des droits de scolarité' },
    { date: '2027-03-01', label: 'Semaine de lecture (1er au 5 mars)' },
    { date: '2027-03-22', label: 'Date limite — abandon de cours sans mention d\u2019échec' },
    { date: '2027-03-26', label: 'Congé de Pâques (26 au 29 mars)' },
    { date: '2027-04-23', label: 'Fin de la session d\u2019hiver 2027' },
    { date: '2027-04-26', label: 'Période d\u2019examens (26 avril au 2 mai)' },
  ],
}

export const weekPlan: DayPlan[] = [
  {
    day: 'Lundi',
    activities: [
      { label: 'IFT-1000 — exercices de logique', hours: '2 h', slot: { start: '10:00', end: '12:00' } },
      { label: 'GIF-1003 — pratique C++', hours: '1 h', slot: { start: '13:00', end: '14:00' } },
      { label: 'Révision de la semaine précédente', hours: '1 h', slot: { start: '15:00', end: '16:00' } },
    ],
  },
  {
    day: 'Mardi',
    activities: [
      { label: 'GLO-2005 — requêtes SQL', hours: '2 h', slot: { start: '18:00', end: '20:00' } },
      { label: 'GIF-1001 — assembleur et binaire', hours: '1 h', slot: { start: '20:00', end: '21:00' } },
    ],
  },
  {
    day: 'Mercredi',
    activities: [
      { label: 'IFT-2002 — automates et exercices', hours: '2 h', slot: { start: '18:00', end: '20:00' } },
      { label: 'GIF-1003 — lecture et exercices', hours: '1 h', slot: { start: '20:00', end: '21:00' } },
      { label: 'Révision ciblée', hours: '1 h', slot: { start: '21:00', end: '22:00' } },
    ],
  },
  {
    day: 'Jeudi',
    activities: [
      { label: 'GLO-2005 — conception et normalisation', hours: '2 h', slot: { start: '10:00', end: '12:00' } },
      { label: 'IFT-1000 — démonstrations', hours: '1 h', slot: { start: '13:00', end: '14:00' } },
    ],
  },
  {
    day: 'Vendredi',
    activities: [
      { label: 'GIF-1003 — travaux et laboratoire', hours: '1 h 30', slot: { start: '16:00', end: '17:30' } },
      { label: 'GIF-1001 — travaux et laboratoire', hours: '1 h 30', slot: { start: '18:00', end: '19:30' } },
      { label: 'Révision du week-end à venir', hours: '1 h', slot: { start: '20:00', end: '21:00' } },
    ],
  },
  {
    day: 'Samedi',
    activities: [
      { label: 'Projet personnel (cours au choix)', hours: '3 h', slot: { start: '10:00', end: '13:00' } },
      { label: 'Révisions et exercices difficiles', hours: '2 h', slot: { start: '14:00', end: '16:00' } },
    ],
  },
  {
    day: 'Dimanche',
    activities: [
      { label: 'Projet personnel (suite)', hours: '2 h', slot: { start: '10:00', end: '12:00' } },
      { label: 'Rattrapage et préparation de la semaine', hours: '1 h', slot: { start: '13:00', end: '14:00' } },
    ],
  },
]

export type WorkType = {
  title: string
  description: string
  items: string[]
}

export const workTypes: WorkType[] = [
  {
    title: 'University Learning',
    description: "Tout ce qui concerne directement les cours :",
    items: [
      'Notes de cours.',
      'Exercices et devoirs.',
      'Préparation aux examens.',
      'Révisions hebdomadaires.',
    ],
  },
  {
    title: 'Deep Learning',
    description: 'Approfondir les sujets au-delà des cours :',
    items: [
      'Livres et documentations.',
      'Tutoriels spécialisés.',
      'Exercices supplémentaires.',
      'Notes techniques personnelles.',
    ],
  },
  {
    title: 'Practical Projects',
    description: 'Mettre les connaissances en pratique :',
    items: [
      'Dépôts GitHub indépendants.',
      'Documentation README.',
      'Tests.',
      'Démonstrations.',
      'Architecture et décisions techniques.',
    ],
  },
]

export const preSessionChecklist: string[] = [
  'Réviser les bases de C++ : pointeurs, références, fonctions et structures.',
  'Revoir SQL : SELECT, JOIN, GROUP BY et contraintes.',
  'Réviser la logique propositionnelle et les quantificateurs.',
  'Étudier les bases des automates finis.',
  'Revoir le binaire, l\u2019hexadécimal et les opérations bit à bit.',
]
