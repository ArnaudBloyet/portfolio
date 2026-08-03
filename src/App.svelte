<script>
  import Navbar from "./components/layout/Navbar.svelte";
  import Hero from "./components/sections/Hero.svelte";
  import About from "./components/sections/About.svelte";
  import Skills from "./components/sections/Skills.svelte";
  import Projects from "./components/sections/Projects.svelte";
  import Journey from "./components/sections/Journey.svelte";
  import Contact from "./components/sections/Contact.svelte";
  import Footer from "./components/sections/Footer.svelte";
  import ScrollTop from "./components/ui/ScrollTop.svelte";
</script>

<Navbar />

<main>
  <Hero />
  <Projects />
  <Skills />
  <About />
  <Journey />
  <Contact />
</main>

<Footer />

<ScrollTop />