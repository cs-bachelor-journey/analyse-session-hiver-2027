# Analyse — Session d'hiver 2027 · Baccalauréat en informatique

Site web React présentant un guide complet de la session d'hiver 2027 du baccalauréat en
informatique : charge de travail hebdomadaire, les cinq cours analysés en détail (thèmes,
compétences, ressources d'apprentissage), 25 idées de projets personnels, un exemple de
planning hebdomadaire et une bibliothèque de ressources complémentaires.

## Stack technique

- **React 19 + TypeScript** via [Vite](https://vite.dev/)
- **Tailwind CSS v4** pour le style
- Composants **shadcn/ui** (Button, Card, Badge, Table, Tabs, Accordion, Sheet…) dans
  `src/components/ui`, construits sur Radix UI
- Icônes **lucide-react**
- **react-router-dom** pour les pages
- Images libres d'Unsplash (avec dégradé de secours si une image ne charge pas)
- Thème clair / sombre persistant

## Démarrage

```bash
npm install
npm run dev      # serveur de développement sur http://localhost:5173
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

## Pages

| Route            | Contenu                                                                    |
| ---------------- | -------------------------------------------------------------------------- |
| `/`              | Vue d'ensemble, charge de travail (45 h/sem.), préparation de la rentrée    |
| `/cours`         | Les cinq cours sous forme de cartes                                         |
| `/cours/:id`     | Page détaillée d'un cours : thèmes, compétences, ressources, projets        |
| `/projets`       | Les 25 projets classés par priorité et par cours (accordéon)                |
| `/planning`      | Répartition des heures et semaine type (onglets par jour)                   |
| `/ressources`    | Plateformes complémentaires (MIT OCW, freeCodeCamp, Exercism, …)          |

## Structure du projet

```
src/
├── App.tsx                  # Routes
├── main.tsx                 # Point d'entrée
├── index.css                # Thème Tailwind v4 + tokens clair/sombre
├── components/
│   ├── ui/                  # Composants shadcn/ui
│   ├── layout/              # Navbar, Footer, Layout
│   ├── Callout.tsx          # Encadré « conseil »
│   ├── ExternalLink.tsx     # Lien externe (nouvel onglet)
│   ├── UnsplashImage.tsx    # Image Unsplash avec fallback
│   └── courseIcons.ts       # Icône lucide par cours
├── data/
│   ├── courses.ts           # Contenu des 5 cours (thèmes, ressources, projets)
│   ├── planning.ts          # Semaine type, types de travail, checklist de rentrée
│   └── resources.ts         # Plateformes complémentaires, priorités de projets
└── pages/                   # HomePage, CoursesPage, CourseDetailPage, …
```

## Déploiement

Le build produit un site statique dans `dist/`, déployable sur n'importe quel hébergeur
statique (Vercel, Netlify, GitHub Pages…). Pour un hébergement sans redirection SPA,
remplacer `BrowserRouter` par `HashRouter` dans `src/main.tsx`.
