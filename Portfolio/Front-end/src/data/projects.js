import booki from '../img/projects/booki/booki.png'
import sophie from '../img/projects/sophie/sophie.png'
import nina from '../img/projects/nina/nina.png'
import kasa from '../img/projects/kasa/kasa.png'
import mvg from '../img/projects/mvg/mvg.png'

export const ProjectsList = [
  {
    'id': '1',
    'number': 'Projet 1',
    'name': 'Booki',
    'cover': booki,
    'pictures': ['', ''],
    'minDescription':
      "Intégrer le contenu d'une page d'accueil pour une agence de voyage",
    'description1': "Pour ce premier projet de formation, le but était de créer une page web statique et responsive en partant d'une maquette Figma et des photos fournis.",
    'description2': "Ce projet permet de découvrir et appréhender les langages HTML et CSS, mais également de se familiariser avec des outils incontournables, tels que VSCode, Git et GitHub où encore Figma.",
    'skills': ['HTML', 'CSS'],
    'repo': 'https://github.com/SheepmaanDev/P2-OCR',
    'site': 'https://booki.quentinm-dev.fr/',
  },
  {
    'id': '2',
    'number': 'Projet 2',
    'name': 'Sophie Bluel',
    'cover': sophie,
    'pictures': ['', '', '', ''],
    'minDescription': "Créer une page web dynamique grace à JavaScript",
    'description1': "Dans ce second projet de formation, nous sommes initiés à JavaScript. En partant d'une page statique, nous devons permettre à la cliente de pouvoir se connecter, accéder à ses projets via une modale d'où elle pourra les gérer.",
    'description2': "En plus des cours mis à disposition et des échanges avec la communauté d'étudiants, ce projet a été l'occasion de rechercher des solutions par moi-même. J'ai ainsi trouvé des ressources supplémentaires (tutoriels Grafikart, FromScratch, ...) me permettant de mener ce projet à bien.",
    'skills': ['JavaScript', 'API'],
    'repo': 'https://github.com/SheepmaanDev/P3-OCR',
    'site': 'https://sophiebluel.quentinm-dev.fr/',
  },
  {
    'id': '3',
    'number': 'Projet 3',
    'name': 'Nina Carducci',
    'cover': nina,
    'pictures': ['', '', '', ''],
    'minDescription': "Analyser, débugger et optimiser du site d'une photographe",
    'description1': "Peu de code à proprement parler pour ce projet, mais une découverte de beaucoup de notions importantes. Ce projet s'organise autour de 2 axes, le débug et l'optimisation. En partant d'un audit préalable réalisé sur le site mis à disposition pour le projet, nous devions corriger un bug de navigation dans la modale, un bug de sélection de filtre et optimiser le site pour améliorer les notes de performances, accessibilité et référencement.",
    'description2': "Après avoir réaliser moi-même un audit de début de projet avec Lighthouse, j'ai commencé par utiliser les Chrome DevTools pour localiser et corriger les bugs. J'ai ensuite restructuré une partie du code, optimisé les images, minifié des fichiers et nettoyé le dossier principal pour améliorer les performances, l'accessibilité et le référencement. J'ai fini par ajouté des balises meta liées aux principaux réseaux sociaux, avant de réaliser un audit final avec Lighthouse et rédiger un rapport d'optimisation.",
    'skills': ['Débug', 'SEO', 'Wave'],
    'repo': 'https://github.com/SheepmaanDev/P5-OCR',
    'site': 'https://ninacarducci.quentinm-dev.fr/',
  },
  {
    'id': '4',
    'number': 'Projet 4',
    'name': 'Kasa',
    'cover': kasa,
    'pictures': [''],
    'minDescription': "Développer le frontend d'une application de location de logements",
    'description1': "Découverte de React avec cet avant dernier projet de la formation. Avec le code du back-end, les codings guidelines du projet et des logements regroupés dans un fichier JSON, nous devions coder l'application en React pour obtenir un résultat fonctionnel, responsive et conforme à la maquette fournit.",
    'description2': "Les cours mis à disposition par OpenClassrooms m'ont permis de me plonger dans ce nouveau langage. Mes recherches et la documentation officielle de React ont également contribué à la compréhension de nouvelles notions, et les heures de pratiques et tests m'ont permis de réaliser ce projet. Après avoir initialisé l'application avec Create React App et installé React Router, j'ai pu crée la logique de routage avant de passer aux différentes pages de l'application.",
    'skills': ['React', 'React router', 'SASS'],
    'repo': 'https://github.com/SheepmaanDev/P6-OCR',
    'site': 'https://kasa.quentinm-dev.fr/',
  },
  {
    'id': '5',
    'number': 'Projet 5',
    'name': 'Mon vieux grimoire',
    'cover': mvg,
    'pictures': ['', '', '', ''],
    'minDescription': "Développer le backend d'une application de notation de livres",
    'description1': "Initiation au back-end pour ce dernier projet du parcours OpenClassrooms ! Après avoir récupéré le front-end codé en React, les spécifications fonctionnelles, la maquette et les spécifications techniques de l'API, notre rôle était de développer la partie back-end de l'application qui devra permettre de s'enregistrer sur le site, pouvoir poster un livre, le modifier où le supprimer, mais également d'accéder aux livres postés par d'autres utilisateurs et pouvoir les noter.",
    'description2': "La première étape était la configuration d'un serveur Node pour gérer une application Express et l'installation d'une base de données MongoDB. L'étape suivante était la mise en place d'un système d'authentification, avant d'implémenter les fonctionnalités d'affichage, de création et de modification. Pour finir le projet, il ne restait plus qu'à créer la fonctionnalité de notation permettant l'ajout d'une note et le calcul de la note moyenne.",
    'skills': ['Node.js', 'Express.js', 'MongoDB', 'API'],
    'repo': 'https://github.com/SheepmaanDev/P7-OCR',
    'site': 'https://mon-vieux-grimoire.quentinm-dev.fr/',
  }
  //   {
  //     id: '006',
  //     name: '',
  //     cover: '',
  //     pictures: ['', '', '', ''],
  //     minDescription: '',
  //     skills: '',
  //     repo: '',
  //     site: '',
  //   },
]
