import "./styles/global.css";
import "./styles/animations.css";
import "./styles/variables.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { mount } from "svelte";
import App from "./App.svelte";

AOS.init({
    duration: 800,
    once: true,
    offset: 80
});

const app = mount(App, {
    target: document.getElementById("app")
});

export default app;