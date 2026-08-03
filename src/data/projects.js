import ochat from "../assets/images/ochat.webp";
import capitales from "../assets/images/worldtime.webp";
import heroes from "../assets/images/heroesleague.webp";

export const projects = [
  {
    id: 1,
    title: "O'Chat",
    description:
      "Messagerie IA développée avec Svelte, PocketBase et l'API Mistral, avec historique des conversations et interface moderne.",
    image: ochat,
    technologies: ["Svelte", "JavaScript", "PocketBase", "Mistral API"],
    github: "https://github.com/O-clock-Lisbonne/SA07-ochat-projet-ArnaudBloyet",
    demo: "",
    status: "Terminé"
  },

  {
    id: 2,
    title: "API Capitales",
    description:
      "API REST développée avec Node.js et Express permettant d'obtenir les informations des capitales du monde via plusieurs routes personnalisées.",
    image: capitales,
    technologies: ["Node.js", "Express"],
    github: "https://github.com/O-clock-Lisbonne/SB01E03_worldtime-ArnaudBloyet",
    demo: "",
    status: "Terminé"
  },

  {
    id: 3,
    title: "Heroes League",
    description:
      "Intégration d'une landing page moderne à partir d'une maquette, avec une attention particulière portée au responsive design, aux animations CSS, aux effets de survol et à la qualité de l'intégration HTML/CSS.",
    image: heroes,
    technologies: ["HTML5", "CSS3", "Responsive Design"],
    github: "https://github.com/O-clock-Lisbonne/SA03E04-bonus-heroes-league-ArnaudBloyet",
    demo: "",
    status: "Terminé"
  }
];