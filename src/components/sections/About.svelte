<script>
    import SectionTitle from "../ui/SectionTitle.svelte";

    const timeline = [
        {
            year: "2025",
            title: "Comptable",
            description:
                "Plusieurs années d'expérience dans le domaine de la comptabilité.",
        },
        {
            year: "2026",
            title: "Reconversion",
            description:
                "Formation Concepteur Développeur d'Applications avec O'clock.",
        },
        {
            year: "2027",
            title: "Stage",
            description:
                "Recherche d'un stage pour mettre en pratique mes compétences.",
        },
    ];
</script>

<section class="about" id="about">
    <SectionTitle>À propos</SectionTitle>

    <div class="about__content">
        <div class="about__text">
            <p>
                Après plusieurs années dans la comptabilité, j'ai décidé de me
                reconvertir dans le développement web.
            </p>

            <p>
                Aujourd'hui, je développe des applications modernes avec
                JavaScript, Svelte et Node.js.
            </p>

            <p>
                J'aime concevoir des interfaces claires, écrire un code propre
                et apprendre de nouvelles technologies.
            </p>
        </div>

        <div class="timeline">
            {#each timeline as item}
                <div class="timeline__item">
                    <div class="timeline__year">
                        {item.year}
                    </div>

                    <div class="timeline__card">
                        <h3>{item.title}</h3>

                        <p>{item.description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .about {
        padding: 7rem 1.5rem;

        max-width: 1200px;

        margin: auto;
    }

    .about__content {
        display: grid;

        grid-template-columns: 1fr 1fr;

        gap: 4rem;

        margin-top: 4rem;
    }

    .about__text {
        display: flex;

        flex-direction: column;

        gap: 1.5rem;

        font-size: 1.1rem;

        line-height: 1.9;

        color: var(--text-light);
    }

    .timeline {
        display: flex;

        flex-direction: column;

        gap: 2rem;
    }

    .timeline__item {
        display: flex;

        gap: 1rem;

        align-items: flex-start;
    }

    .timeline__year {
        min-width: 70px;

        font-weight: 700;

        color: var(--primary);
    }

    .timeline__card {
        background: var(--surface);

        padding: 1.5rem;

        border-radius: 18px;

        box-shadow: var(--shadow-sm);

        flex: 1;
    }

    .timeline__card h3 {
        margin-bottom: 0.75rem;
    }

    @media (max-width: 900px) {
        .about__content {
            grid-template-columns: 1fr;
        }
    }
</style>
