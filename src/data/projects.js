import ochat from "../assets/images/ochat.webp";
import capitales from "../assets/images/cart.webp";
import todo from "../assets/images/todolist.webp";

export const projects = [
  {
    id: 1,
    title: "O'Chat",
    description:
      "Application de messagerie IA développée avec Svelte, PocketBase et l'API Mistral. Les conversations sont persistées et l'interface est pensée pour être simple et fluide.",
    image: ochat,
    technologies: ["Svelte", "JavaScript", "PocketBase", "Mistral API"],
    github: "https://github.com/...",
    demo: "",
    status: "Terminé"
  },

  {
    id: 2,
    title: "API Capitales",
    description:
      "API Node.js permettant d'obtenir les informations des capitales du monde avec plusieurs routes personnalisées.",
    image: capitales,
    technologies: ["Node.js", "Express"],
    github: "https://github.com/...",
    demo: "",
    status: "Terminé"
  },

  {
    id: 3,
    title: "Todo List",
    description:
      "Application de gestion de tâches avec sauvegarde locale et interface responsive.",
    image: todo,
    technologies: ["Svelte", "LocalStorage"],
    github: "https://github.com/...",
    demo: "",
    status: "Terminé"
  }
];