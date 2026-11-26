export type Platform = {
  name: string
  description: string
  url: string
  icon: 'graduation' | 'flame' | 'dumbbell' | 'sparkles' | 'eye'
}

export const platforms: Platform[] = [
  {
    name: 'MIT OpenCourseWare',
    description: 'Cours universitaires, notes et exercices, gratuitement en ligne.',
    url: 'https://ocw.mit.edu/',
    icon: 'graduation',
  },
  {
    name: 'freeCodeCamp',
    description: 'Tutoriels, cours certifiants et exercices de programmation.',
    url: 'https://www.freecodecamp.org/',
    icon: 'flame',
  },
  {
    name: 'Exercism',
    description: 'Pratique de programmation dans de nombreux langages, avec mentorat.',
    url: 'https://exercism.org/',
    icon: 'dumbbell',
  },
  {
    name: 'Brilliant',
    description: 'Raisonnement mathématique et logique par des exercices interactifs.',
    url: 'https://brilliant.org/',
    icon: 'sparkles',
  },
  {
    name: 'VisuAlgo',
    description: 'Visualisation interactive d\u2019algorithmes et de structures de données.',
    url: 'https://visualgo.net/',
    icon: 'eye',
  },
]

export const projectPriorities: { code: string; main: string; advanced: string; courseId: string }[] = [
  { code: 'GIF-1003', main: 'Library Management System', advanced: 'Particle Simulation', courseId: 'gif-1003' },
  { code: 'GLO-2005', main: 'E-commerce Database', advanced: 'SQL Performance Lab', courseId: 'glo-2005' },
  { code: 'IFT-1000', main: 'Truth Table Generator', advanced: 'Logic Proof Assistant', courseId: 'ift-1000' },
  { code: 'IFT-2002', main: 'Finite Automata Simulator', advanced: 'Turing Machine Simulator', courseId: 'ift-2002' },
  { code: 'GIF-1001', main: 'CPU Instruction Simulator', advanced: 'Cache Memory Simulator', courseId: 'gif-1001' },
]
