export type Activity = {
  label: string
  hours: string
}

export type DayPlan = {
  day: string
  activities: Activity[]
}

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
