export type ResourceLink = {
  label: string
  url: string
}

export type Resource = {
  name: string
  description: string
  links: ResourceLink[]
  priority?: boolean
  paid?: boolean
}

export type Project = {
  name: string
  level?: string
  points: string[]
}

export type Theme = {
  theme: string
  description: string
}

export type Workload = {
  course: string
  lab: string
  personal: string
  total: string
}

export type Course = {
  id: string
  code: string
  title: string
  tags: string[]
  accent: string
  image: string
  summary: string
  intro: string
  themes: Theme[]
  themesNote?: string
  skills: string[]
  resources: Resource[]
  projectsNote?: string
  projects: Project[]
  advice: string
  workload: Workload
}

export const courses: Course[] = [
  {
    id: 'gif-1003',
    code: 'GIF-1003',
    title: 'Programmation avancée en C++',
    tags: ['Programmation', 'Intermédiaire', '3 crédits'],
    accent: '#3d7bd9',
    image: 'photo-1461749280684-dccba630e2f6',
    summary: 'Programmation orientée objet, gestion de la mémoire et bibliothèque standard en C++.',
    intro:
      "Ce cours va au-delà de la programmation procédurale : il apprend à concevoir des programmes organisés autour d'objets, de classes et de responsabilités clairement définies. C'est le pilier « génie logiciel » de la session.",
    themes: [
      { theme: 'Syntaxe et sémantique', description: 'Fonctionnement du langage C++' },
      { theme: 'Encapsulation', description: 'Protéger et organiser les données' },
      { theme: 'Classes et objets', description: 'Construire ses propres types' },
      { theme: 'Surcharge', description: 'Redéfinir les opérateurs et les méthodes' },
      { theme: 'Contrats et tests', description: 'Vérifier le comportement attendu' },
      { theme: 'Héritage', description: 'Réutiliser et spécialiser des classes' },
      { theme: 'Polymorphisme', description: "Utiliser différentes implémentations via une interface" },
      { theme: 'Gestion mémoire', description: 'Allocation, libération, durée de vie' },
      { theme: 'Exceptions', description: 'Gérer les erreurs proprement' },
      { theme: 'STL', description: 'Utiliser les conteneurs et algorithmes standards' },
    ],
    themesNote:
      "Ces thèmes correspondent à la description officielle du cours GIF-1003 de l'Université Laval.",
    skills: [
      "Concevoir une application orientée objet.",
      'Écrire des classes propres et réutilisables.',
      'Comprendre les pointeurs et les références.',
      'Maîtriser les constructeurs et destructeurs.',
      "Comprendre l'héritage et le polymorphisme.",
      'Utiliser std::vector, std::map, std::unordered_map, etc.',
      'Écrire des tests et gérer des exceptions.',
    ],
    resources: [
      {
        name: 'LearnCpp',
        description: 'Tutoriel complet et gratuit de C++ moderne, avec exercices et quiz à chaque chapitre.',
        links: [{ label: 'LearnCpp.com', url: 'https://www.learncpp.com/' }],
        priority: true,
      },
      {
        name: 'cppreference',
        description: 'La référence officieuse du langage et de la bibliothèque standard.',
        links: [{ label: 'C++ Reference', url: 'https://en.cppreference.com/w/cpp' }],
      },
      {
        name: 'C++ Core Guidelines',
        description: 'Bonnes pratiques de conception, gestion des ressources, mémoire et sécurité.',
        links: [
          { label: 'Consulter les guidelines', url: 'https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines' },
        ],
      },
      {
        name: 'Bibliothèque standard C++',
        description: 'Conteneurs, itérateurs et algorithmes de la STL.',
        links: [
          { label: 'Containers', url: 'https://en.cppreference.com/w/cpp/container' },
          { label: 'Algorithms', url: 'https://en.cppreference.com/w/cpp/algorithm' },
        ],
      },
      {
        name: 'Exercism – C++',
        description: "Exercices pratiques avec mentorat pour progresser en C++ et en raisonnement objet.",
        links: [{ label: 'Exercism C++', url: 'https://exercism.org/tracks/cpp' }],
      },
    ],
    projects: [
      {
        name: 'Library Management System',
        level: 'Débutant → intermédiaire',
        points: [
          'Classes Book, Member et Library.',
          'Encapsulation et constructeurs.',
          'Emprunt et retour de livres.',
          'Stockage dans des fichiers.',
        ],
      },
      {
        name: 'Banking System',
        points: [
          'Classes Account, SavingsAccount et Transaction.',
          'Héritage et polymorphisme.',
          'Gestion des exceptions.',
          'Historique des transactions.',
        ],
      },
      {
        name: 'Inventory Management System',
        points: [
          'Gestion des produits et catégories.',
          'std::vector et std::map.',
          'Recherche et tri.',
          "Import/export de données.",
        ],
      },
      {
        name: 'Chess Engine — version simplifiée',
        points: [
          'Modélisation des pièces.',
          'Classes abstraites.',
          'Polymorphisme.',
          'Validation des mouvements.',
        ],
      },
      {
        name: 'Particle Simulation Engine',
        points: [
          'Gestion des particules.',
          'Vecteurs et calculs.',
          'Allocation et durée de vie des objets.',
          'Simulation et affichage.',
        ],
      },
    ],
    advice:
      "Commencer par le Library Management System. Le Banking System permet ensuite de travailler en profondeur l'héritage et le polymorphisme.",
    workload: { course: '3 h', lab: '2 h', personal: '4 h', total: '9 h' },
  },
  {
    id: 'glo-2005',
    code: 'GLO-2005',
    title: 'Modèles et langages des bases de données',
    tags: ['Bases de données', 'SQL', '3 crédits'],
    accent: '#1f9d63',
    image: 'photo-1551288049-bebda4e38f71',
    summary: 'Conception, interrogation et sécurisation de bases de données relationnelles.',
    intro:
      "Ce cours ne se limite pas à l'écriture de requêtes SQL : il couvre la conception, la structuration, l'interrogation et la sécurisation d'une base de données — des compétences directement valorisables en entreprise.",
    themes: [
      { theme: 'Modèle relationnel', description: 'Tables, lignes, colonnes' },
      { theme: 'SQL', description: 'Création et manipulation des données' },
      { theme: 'Contraintes', description: 'PK, FK, UNIQUE, CHECK' },
      { theme: 'Jointures', description: 'Relations entre plusieurs tables' },
      { theme: 'Vues', description: 'Requêtes enregistrées' },
      { theme: 'Indexation', description: 'Accélérer les recherches' },
      { theme: 'Normalisation', description: 'Éviter les anomalies et les redondances' },
      { theme: 'Dépendances', description: 'Dépendances fonctionnelles' },
      { theme: 'Sécurité', description: "Protection et contrôle d'accès" },
      { theme: 'NoSQL', description: 'Autres modèles de stockage' },
      { theme: 'Entrepôts de données', description: 'Analyse et stockage décisionnel' },
    ],
    skills: [
      'Concevoir un modèle conceptuel de données.',
      'Transformer un modèle en schéma relationnel.',
      'Écrire des requêtes SQL complexes.',
      'Comprendre les jointures et sous-requêtes.',
      'Normaliser une base de données.',
      'Analyser les performances des requêtes.',
      'Comprendre les transactions et contraintes.',
      'Découvrir les bases de données NoSQL.',
    ],
    resources: [
      {
        name: 'SQLBolt',
        description:
          'Exercices interactifs sur SELECT, JOIN, GROUP BY, INSERT, UPDATE et DELETE.',
        links: [{ label: 'SQLBolt', url: 'https://sqlbolt.com/' }],
        priority: true,
      },
      {
        name: 'Documentation PostgreSQL',
        description:
          'Tutoriel officiel couvrant les tables, jointures, vues, transactions et bien plus.',
        links: [
          { label: 'PostgreSQL Tutorial', url: 'https://www.postgresql.org/docs/current/tutorial.html' },
        ],
      },
      {
        name: 'CMU — Introduction to Database Systems',
        description:
          'Cours universitaire approfondi : modèles relationnels, SQL, stockage, index, transactions et optimisation.',
        links: [{ label: 'CMU 15-445', url: 'https://15445.courses.cs.cmu.edu/fall2026/' }],
      },
      {
        name: 'Database Design — Microsoft Learn',
        description: 'Ressources pour comprendre les principes de conception des bases de données.',
        links: [
          { label: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/training/' },
        ],
      },
      {
        name: 'SQLZoo',
        description: "Exercices SQL interactifs supplémentaires, classés par difficulté.",
        links: [{ label: 'SQLZoo', url: 'https://sqlzoo.net/wiki/SQL_Tutorial' }],
      },
      {
        name: 'Use The Index, Luke!',
        description: "Un guide de référence pour comprendre les index et l'optimisation des requêtes SQL.",
        links: [{ label: 'Use The Index, Luke!', url: 'https://use-the-index-luke.com/' }],
      },
    ],
    projects: [
      {
        name: 'Library Database',
        points: [
          'Modèle ER.',
          'Relations entre livres, membres et emprunts.',
          'Contraintes et clés étrangères.',
          'Requêtes et vues SQL.',
        ],
      },
      {
        name: 'E-commerce Database',
        points: [
          'Clients, produits et commandes.',
          'Relations 1-N et N-N.',
          'Normalisation.',
          'Transactions et contraintes.',
        ],
      },
      {
        name: 'University Management Database',
        points: [
          'Étudiants et enseignants.',
          'Cours et inscriptions.',
          'Notes et évaluations.',
          'Requêtes analytiques.',
        ],
      },
      {
        name: 'SQL Performance Lab',
        points: [
          'Générer un grand volume de données.',
          'Comparer les requêtes.',
          'Tester les index.',
          'Étudier EXPLAIN ANALYZE.',
        ],
      },
      {
        name: 'Mini Data Warehouse',
        points: [
          'Modèle en étoile.',
          'Tables de faits et dimensions.',
          'Agrégations.',
          'Rapports analytiques.',
        ],
      },
    ],
    advice:
      "Le projet E-commerce est particulièrement intéressant : il réunit presque tous les concepts du cours dans un seul système cohérent.",
    workload: { course: '3 h', lab: '2 h', personal: '4 h', total: '9 h' },
  },
  {
    id: 'ift-1000',
    code: 'IFT-1000',
    title: 'Logique et techniques de preuve',
    tags: ['Mathématiques', 'Logique formelle', '3 crédits'],
    accent: '#8b5cf6',
    image: 'photo-1553729459-efe14ef6055d',
    summary: 'Logique formelle, quantificateurs et techniques de démonstration.',
    intro:
      "C'est probablement le cours qui demande le plus de régularité dans les révisions. Son objectif : apprendre à raisonner rigoureusement et à démontrer qu'une affirmation est vraie — une compétence transversale utile dans tous les autres cours, notamment en informatique théorique.",
    themes: [
      { theme: 'Égalité', description: 'Substitution et règle de Leibniz' },
      { theme: 'Logique propositionnelle', description: 'ET, OU, NON, implication' },
      { theme: 'Tables de vérité', description: 'Vérifier la validité' },
      { theme: 'Quantificateurs', description: 'Universel et existentiel' },
      { theme: 'Calcul des prédicats', description: 'Formaliser les affirmations' },
      { theme: 'Induction', description: 'Démontrer des propriétés par récurrence' },
      { theme: 'Preuve par cas', description: 'Séparer les possibilités' },
      { theme: 'Contradiction', description: 'Démontrer en supposant le contraire' },
      { theme: 'Contraposition', description: "Démontrer une implication indirectement" },
      { theme: 'Implication mutuelle', description: "Démontrer une équivalence" },
    ],
    skills: [
      'Traduire une phrase en expression logique.',
      'Manipuler les quantificateurs.',
      'Construire des tables de vérité.',
      'Reconnaître les équivalences logiques.',
      'Construire des démonstrations structurées.',
      'Comprendre les preuves par induction.',
      'Justifier rigoureusement un algorithme ou une propriété.',
    ],
    resources: [
      {
        name: 'Book of Proof — Richard Hammack',
        description:
          "Un excellent manuel gratuit pour apprendre les démonstrations mathématiques, les ensembles, la logique, l'induction et les relations.",
        links: [
          { label: 'Lire et télécharger Book of Proof', url: 'https://richardhammack.github.io/BookOfProof/' },
        ],
        priority: true,
      },
      {
        name: 'forall x: Calgary',
        description:
          'Manuel de logique formelle : logique propositionnelle, prédicats, quantificateurs et systèmes de preuve.',
        links: [{ label: 'forall x: Calgary', url: 'https://forallx.openlogicproject.org/' }],
      },
      {
        name: 'Carnap',
        description: 'Exercices interactifs de logique formelle et de démonstrations.',
        links: [{ label: 'Carnap', url: 'https://carnap.io/' }],
      },
      {
        name: 'Open Logic Project',
        description: 'Manuels et ressources libres pour la logique mathématique.',
        links: [{ label: 'Open Logic Project', url: 'https://openlogicproject.org/' }],
      },
      {
        name: 'MIT OpenCourseWare — Mathematics for Computer Science',
        description:
          'Notes, exercices et vidéos sur les mathématiques discrètes et les techniques de preuve.',
        links: [
          {
            label: 'MIT Mathematics for Computer Science',
            url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/',
          },
        ],
      },
    ],
    projectsNote:
      "Les projets ne doivent pas nécessairement être des applications complètes : l'objectif est de transformer les notions mathématiques en outils concrets.",
    projects: [
      {
        name: 'Truth Table Generator',
        points: [
          'Parser des expressions logiques.',
          'Construire des tables de vérité.',
          'Détecter les tautologies.',
          'Vérifier les équivalences.',
        ],
      },
      {
        name: 'Logic Proof Assistant',
        points: [
          'Construire des preuves simples.',
          "Vérifier les règles d'inférence.",
          'Afficher les étapes.',
          'Détecter les erreurs logiques.',
        ],
      },
      {
        name: 'Mathematical Induction Visualizer',
        points: [
          "Visualiser l'initialisation.",
          "Montrer l'hypothèse d'induction.",
          'Illustrer le passage de n à n+1.',
          'Tester des propriétés simples.',
        ],
      },
      {
        name: 'Set Theory Visualizer',
        points: [
          'Union et intersection.',
          'Complément et différence.',
          'Inclusion et égalité.',
          'Diagrammes de Venn.',
        ],
      },
      {
        name: 'Boolean Expression Simplifier',
        points: [
          'Construire un arbre syntaxique.',
          "Appliquer les lois de l'algèbre booléenne.",
          'Simplifier les expressions.',
          'Comparer avant et après.',
        ],
      },
    ],
    advice:
      'Commencer par le Truth Table Generator, puis développer le Logic Proof Assistant : programmer la vérification des règles de preuve oblige à les comprendre en détail.',
    workload: { course: '3 h', lab: '0 h', personal: '6 h', total: '9 h' },
  },
  {
    id: 'ift-2002',
    code: 'IFT-2002',
    title: 'Informatique théorique',
    tags: ['Fondements CS', 'Théorie du calcul', '3 crédits'],
    accent: '#dd7a34',
    image: 'photo-1451187580459-43490279c0fa',
    summary: 'Automates, grammaires, machines de Turing et décidabilité.',
    intro:
      "Un cours clé pour comprendre ce qui se cache derrière les langages de programmation, les expressions régulières et les machines abstraites. Différentes catégories de machines y sont étudiées, ainsi que les langages qu'elles peuvent reconnaître — les fondements mêmes de ce qu'un ordinateur peut ou ne peut pas calculer.",
    themes: [
      { theme: 'Langages formels', description: "Définir des ensembles de chaînes" },
      { theme: 'Automates finis', description: 'Machines à états finis' },
      { theme: 'Automates déterministes', description: 'DFA' },
      { theme: 'Automates non déterministes', description: 'NFA' },
      { theme: 'Expressions régulières', description: 'Représenter des langages réguliers' },
      { theme: 'Grammaires', description: 'Définir des langages formels' },
      { theme: 'Automates à pile', description: 'Machines avec mémoire de pile' },
      { theme: 'Machine de Turing', description: 'Modèle général du calcul' },
      { theme: 'Dénombrabilité', description: 'Comparer les tailles des ensembles' },
      { theme: 'Décidabilité', description: 'Comprendre les problèmes calculables' },
    ],
    themesNote:
      "La description officielle mentionne également la classification des langages, les grammaires de Chomsky et les langages récursivement énumérables.",
    skills: [
      "Construire un automate à états finis.",
      'Convertir un NFA en DFA.',
      'Construire des expressions régulières.',
      'Comprendre les grammaires hors contexte.',
      'Construire des automates à pile.',
      'Comprendre les machines de Turing.',
      'Déterminer si un problème est décidable.',
      'Comprendre les limites du calcul.',
    ],
    resources: [
      {
        name: 'Introduction to the Theory of Computing — University of Waterloo',
        description:
          '20 leçons gratuites couvrant automates finis, grammaires, machines à pile, machines de Turing, décidabilité et complexité.',
        links: [
          { label: 'Waterloo Theory of Computing', url: 'https://cs.uwaterloo.ca/~watrous/ToC-notes/' },
        ],
        priority: true,
      },
      {
        name: 'OpenDSA — Formal Languages',
        description: "Explications et exercices sur les langages formels, automates et grammaires.",
        links: [
          {
            label: 'OpenDSA Formal Languages',
            url: 'https://opendsa.org/OpenDSA/Books/Catalog/html/FLOverview.html',
          },
        ],
      },
      {
        name: 'JFLAP',
        description:
          'Logiciel éducatif pour construire et tester des automates, grammaires et machines de Turing.',
        links: [{ label: 'JFLAP', url: 'https://www.jflap.org/' }],
      },
      {
        name: 'Stanford — Theory of Computation',
        description: 'Ressources et cours de théorie du calcul.',
        links: [{ label: 'Stanford Computer Science', url: 'https://cs.stanford.edu/' }],
      },
      {
        name: 'Automata Theory — OpenDSA',
        description: 'Ressources supplémentaires sur les machines de Turing et les langages.',
        links: [
          {
            label: 'Turing Machines',
            url: 'https://opendsa.cs.vt.edu/OpenDSA/Books/Catalog/html/TuringMachines.html',
          },
        ],
      },
    ],
    projects: [
      {
        name: 'Finite Automata Simulator',
        points: [
          'Créer des états.',
          'Ajouter des transitions.',
          'Simuler une chaîne.',
          "Déterminer l'acceptation ou le rejet.",
        ],
      },
      {
        name: 'Regex to Automata Converter',
        points: [
          'Lire une expression régulière.',
          'Construire un NFA.',
          'Convertir en DFA.',
          'Tester des chaînes.',
        ],
      },
      {
        name: 'Pushdown Automata Simulator',
        points: [
          'Gérer une pile.',
          'Simuler les transitions.',
          'Reconnaître les parenthèses équilibrées.',
          'Tracer les configurations.',
        ],
      },
      {
        name: 'Grammar Parser and Visualizer',
        points: [
          'Définir une grammaire.',
          'Générer des chaînes.',
          'Construire des arbres syntaxiques.',
          'Détecter les chaînes invalides.',
        ],
      },
      {
        name: 'Turing Machine Simulator',
        points: [
          'Ruban et tête de lecture.',
          'États et transitions.',
          'Exécution étape par étape.',
          'Historique des configurations.',
        ],
      },
    ],
    advice:
      "Le Finite Automata Simulator est le projet le plus directement lié au cours : il permet de visualiser les concepts au lieu de simplement mémoriser des définitions.",
    workload: { course: '3 h', lab: '0 h', personal: '6 h', total: '9 h' },
  },
  {
    id: 'gif-1001',
    code: 'GIF-1001',
    title: 'Ordinateurs : structure et applications',
    tags: ['Architecture', 'Bas niveau', '3 crédits'],
    accent: '#cf4159',
    image: 'photo-1518770660439-4636190af475',
    summary: 'Architecture des ordinateurs, assembleur ARM et programmation bas niveau.',
    intro:
      "Ce cours descend d'un niveau par rapport à la programmation habituelle : il explique comment un ordinateur exécute réellement les instructions, comment les données circulent et comment le processeur interagit avec la mémoire et les périphériques. L'architecture ARM sert d'étude de cas et le langage d'assemblage occupe une place importante.",
    themes: [
      { theme: 'Architecture ordinateur', description: 'Organisation générale' },
      { theme: 'Processeur', description: 'CPU et ses composants' },
      { theme: 'Registres', description: 'Stockage rapide interne' },
      { theme: 'ALU', description: 'Opérations arithmétiques et logiques' },
      { theme: 'Assembleur', description: 'Instructions bas niveau' },
      { theme: 'ARM', description: 'Architecture étudiée' },
      { theme: 'Mémoire', description: 'Organisation et accès' },
      { theme: 'Adressage', description: 'Accéder aux données' },
      { theme: 'Instructions', description: 'Déplacement, calcul, branchement' },
      { theme: 'Périphériques', description: 'Entrées et sorties' },
      { theme: 'Traitement des données', description: 'Exécution et manipulation' },
    ],
    skills: [
      'Lire et comprendre du code assembleur.',
      'Comprendre les registres du processeur.',
      'Convertir et manipuler des nombres binaires et hexadécimaux.',
      'Comprendre les instructions ARM.',
      'Comprendre la mémoire et les adresses.',
      'Expliquer le fonctionnement d\u2019une instruction.',
      'Relier du code C à son équivalent assembleur.',
    ],
    resources: [
      {
        name: 'Nand2Tetris',
        description:
          "Construire un ordinateur à partir de portes logiques, puis comprendre comment les couches matérielles et logicielles s'articulent.",
        links: [{ label: 'Nand2Tetris', url: 'https://www.nand2tetris.org/' }],
        priority: true,
      },
      {
        name: 'Arm Learning Paths',
        description: 'Ressources officielles pour apprendre à développer sur ARM.',
        links: [{ label: 'Arm Learning Paths', url: 'https://learn.arm.com/learning-paths/' }],
      },
      {
        name: 'Arm Assembly — Write Assembly Functions',
        description:
          'Introduction pratique à l\u2019écriture de fonctions assembleur ARM et à leur utilisation avec C.',
        links: [
          {
            label: 'Arm Assembly Tutorial',
            url: 'https://learn.arm.com/learning-paths/embedded-and-microcontrollers/asm/',
          },
        ],
      },
      {
        name: 'Arm Architecture Guide',
        description: "Documentation sur l'architecture ARM et les instructions A64.",
        links: [
          {
            label: 'Armv8-A Instruction Set Architecture',
            url: 'https://developer.arm.com/-/media/Arm%20Developer%20Community/PDF/Learn%20the%20Architecture/Armv8-A%20Instruction%20Set%20Architecture.pdf',
          },
        ],
      },
      {
        name: 'Computer Organization and Design',
        description:
          "Livre de référence de David Patterson et John Hennessy pour approfondir l'organisation des ordinateurs et l'architecture ARM. Ressource complémentaire, généralement payante.",
        links: [
          {
            label: 'Présentation du livre',
            url: 'https://www.elsevier.com/books/computer-organization-and-design/patterson/9780128201091',
          },
        ],
        paid: true,
      },
    ],
    projects: [
      {
        name: 'Number System Converter',
        points: [
          'Binaire, décimal et hexadécimal.',
          'Conversions automatiques.',
          'Opérations binaires.',
          'Représentation en complément à deux.',
        ],
      },
      {
        name: 'ARM Assembly Playground',
        points: [
          'Écrire des instructions.',
          'Manipuler les registres.',
          'Exécuter les instructions.',
          'Visualiser les changements d\u2019état.',
        ],
      },
      {
        name: 'CPU Instruction Simulator',
        points: [
          'Fetch, decode, execute.',
          'Registres et mémoire.',
          'Compteur ordinal.',
          'Visualisation des cycles.',
        ],
      },
      {
        name: 'Cache Memory Simulator',
        points: [
          'Cache et mémoire principale.',
          'Cache hit et cache miss.',
          'Politiques de remplacement.',
          'Comparaison des performances.',
        ],
      },
      {
        name: 'Mini ALU Simulator',
        points: [
          'Addition et soustraction.',
          'AND, OR, XOR, NOT.',
          'Opérations binaires.',
          'Drapeaux de résultat.',
        ],
      },
    ],
    advice:
      "Le CPU Instruction Simulator est particulièrement formateur : il permet d'observer l'exécution des instructions plutôt que d'apprendre seulement leur syntaxe.",
    workload: { course: '3 h', lab: '1 h', personal: '5 h', total: '9 h' },
  },
]

export function getCourse(id: string | undefined): Course | undefined {
  return courses.find((course) => course.id === id)
}
