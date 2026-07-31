<script>
    import SectionTitle from "../ui/SectionTitle.svelte";
    import ProjectCard from "../projects/ProjectCard.svelte";
    import { projects } from "../../data/projects.js";
    import { reveal } from "../../actions/reveal.js";
</script>

<section use:reveal id="projects" class="projects reveal">
    <div class="container">
        <SectionTitle
            subtitle="Portfolio"
            title="Mes projets"
            description="Une sélection de projets réalisés durant ma formation et mes expérimentations personnelles."
        />

        <div class="projects__grid">
            {#each projects as project}
                <ProjectCard {project} />
            {/each}
        </div>
    </div>
</section>

<style>
    .projects {
        padding: 8rem 0;
    }

    .projects__grid {
        display: grid;

        grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));

        gap: 2rem;

        align-items: stretch;
    }
</style>
