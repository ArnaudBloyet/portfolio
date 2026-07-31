<script>
  import Navbar from "./components/layout/Navbar.svelte";
  import Hero from "./components/sections/Hero.svelte";
  import About from "./components/sections/About.svelte";
  import Skills from "./components/sections/Skills.svelte";
  import Projects from "./components/sections/Projects.svelte";
  import Journey from "./components/sections/Journey.svelte";
  import Contact from "./components/sections/Contact.svelte";
  import Footer from "./components/sections/Footer.svelte";
</script>

<Navbar />

<main style="padding-top:90px;">
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Journey />
  <Contact />
</main>

<Footer />