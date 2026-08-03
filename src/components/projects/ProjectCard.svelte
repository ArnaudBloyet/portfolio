<script>
    import Badge from "../ui/Badge.svelte";
    import Button from "../ui/Button.svelte";
    import TechBadge from "../ui/TechBadge.svelte";

    let { project } = $props();
</script>

<article class="project-card">
    <div class="project-card__image">
        <img src={project.image} alt={`Capture du projet ${project.title}`} />
    </div>

    <div class="project-card__content">
        <div class="project-card__header">
            <h3>{project.title}</h3>

            <Badge text={project.status} icon="●" variant="success" />
        </div>

        <p>{project.description}</p>

        <div class="project-card__technologies">
            {#each project.technologies as technology}
                <TechBadge {technology} />
            {/each}
        </div>

        <div class="project-card__actions">
            <Button href={project.github} variant="secondary" target="_blank">
                GitHub
            </Button>

            {#if project.demo}
                <Button href={project.demo} target="_blank">Démo</Button>
            {/if}
        </div>
    </div>
</article>

<style>
    .project-card {
        display: flex;
        flex-direction: column;

        height: 100%;

        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 24px;

        overflow: hidden;

        box-shadow: var(--shadow-sm);

        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    .project-card:hover {
        transform: translateY(-8px) scale(1.01);

        box-shadow: var(--shadow-md);
    }

    .project-card__image {
        padding: 1rem;

        background: #f8fafc;

        aspect-ratio: 16 / 9;

        display: flex;

        align-items: center;

        justify-content: center;
    }

    .project-card__image img {
        width: 100%;
        height: 100%;

        object-fit: contain;

        border-radius: 16px;

        transition: transform 0.5s ease;
    }

    .project-card:hover img {
        transform: scale(1.05);
    }

    .project-card__content {
        display: flex;
        flex-direction: column;

        gap: 1.5rem;

        padding: 2rem;

        flex: 1;
    }

    .project-card__header {
        display: flex;

        justify-content: space-between;

        align-items: center;

        gap: 1rem;
    }

    .project-card__header h3 {
        font-size: 1.5rem;

        line-height: 1.2;
    }

    .project-card p {
        color: var(--text-light);

        line-height: 1.7;

        min-height: 5.5rem;
    }

    .project-card__technologies {
        display: flex;

        flex-wrap: wrap;

        gap: 0.75rem;

        min-height: 5rem;

        align-content: flex-start;
    }

    .project-card__actions {
        margin-top: auto;

        display: flex;

        gap: 1rem;
    }

    .project-card__actions :global(.button) {
        padding: 0.7rem 1.2rem;
        font-size: 0.9rem;
    }
</style>
