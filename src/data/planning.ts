export type Activity = {
  label: string
  hours: string
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

export const weekPlan: DayPlan[] = [
  {
    day: 'Lundi',
    activities: [
      { label: 'IFT-1000 — exercices de logique', hours: '2 h' },
      { label: 'GIF-1003 — pratique C++', hours: '1 h' },
      { label: 'Révision de la semaine précédente', hours: '1 h' },
    ],
  },
  {
    day: 'Mardi',
    activities: [
      { label: 'GLO-2005 — requêtes SQL', hours: '2 h' },
      { label: 'GIF-1001 — assembleur et binaire', hours: '1 h' },
    ],
  },
  {
    day: 'Mercredi',
    activities: [
      { label: 'IFT-2002 — automates et exercices', hours: '2 h' },
      { label: 'GIF-1003 — lecture et exercices', hours: '1 h' },
      { label: 'Révision ciblée', hours: '1 h' },
    ],
  },
  {
    day: 'Jeudi',
    activities: [
      { label: 'GLO-2005 — conception et normalisation', hours: '2 h' },
      { label: 'IFT-1000 — démonstrations', hours: '1 h' },
    ],
  },
  {
    day: 'Vendredi',
    activities: [
      { label: 'GIF-1003 — travaux et laboratoire', hours: '1 h 30' },
      { label: 'GIF-1001 — travaux et laboratoire', hours: '1 h 30' },
      { label: 'Révision du week-end à venir', hours: '1 h' },
    ],
  },
  {
    day: 'Samedi',
    activities: [
      { label: 'Projet personnel (cours au choix)', hours: '3 h' },
      { label: 'Révisions et exercices difficiles', hours: '2 h' },
    ],
  },
  {
    day: 'Dimanche',
    activities: [
      { label: 'Projet personnel (suite)', hours: '2 h' },
      { label: 'Rattrapage et préparation de la semaine', hours: '1 h' },
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
