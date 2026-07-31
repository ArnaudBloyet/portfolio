<script>
    import Badge from "../ui/Badge.svelte";
    import Button from "../ui/Button.svelte";
    import Terminal from "../ui/Terminal.svelte";
</script>

<section class="hero">
    <div class="container hero__container">
        <Badge text="Disponible pour un stage" icon="✨" variant="primary" />

        <h1>
            Concepteur Développeur<br />
            d'Applications Web
        </h1>

        <p class="hero__description">
            Je développe des applications web modernes, performantes et
            intuitives avec <strong>JavaScript</strong>, <strong>Svelte</strong>
            et
            <strong>Node.js</strong>.
        </p>

        <div class="hero__actions">
            <Button href="#projects">Découvrir mes projets</Button>

            <Button href="/cv.pdf" variant="secondary" target="_blank">
                Télécharger mon CV
            </Button>
        </div>

        <div class="hero__stack">
            JavaScript
            <span>•</span>
            Svelte
            <span>•</span>
            Node.js
            <span>•</span>
            Git
        </div>

        <div class="hero__terminal">
            <Terminal />
        </div>
    </div>
</section>

<style>
    .hero {
        padding: 5rem 0 6rem;
    }

    .hero__container {
        max-width: 760px;

        margin: auto;

        text-align: center;

        display: flex;

        flex-direction: column;

        align-items: center;
    }

    .hero h1 {
        margin-top: 2rem;

        font-size: clamp(3rem, 7vw, 5rem);

        line-height: 1.06;

        letter-spacing: -0.05em;

        font-weight: 800;
    }

    .hero__description {
        margin-top: 2rem;

        max-width: 650px;

        font-size: 1.2rem;

        color: var(--text-light);
    }

    .hero__description strong {
        color: var(--text);
    }

    .hero__stack {
        margin-top: 2rem;

        display: flex;

        gap: 0.8rem;

        flex-wrap: wrap;

        justify-content: center;

        color: var(--text-light);

        font-weight: 500;
    }

    .hero__stack span {
        color: var(--border);
    }

    .hero__actions {
        margin-top: 3rem;

        display: flex;

        gap: 1rem;

        flex-wrap: wrap;

        justify-content: center;
    }

    .hero__actions :global(.button) {
        min-width: 240px;
    }

    .hero__terminal {
        width: 100%;

        max-width: 760px;

        margin-top: 4.5rem;
    }
</style>
