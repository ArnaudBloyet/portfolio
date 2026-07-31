<script>
    import SectionTitle from "../ui/SectionTitle.svelte";
    import { journey } from "../../data/journey.js";
    import { reveal } from "../../actions/reveal.js";
</script>

<section use:reveal id="journey" class="journey reveal">
    <div class="container">
        <SectionTitle
            subtitle="Parcours"
            title="Mon évolution"
            description="Les principales étapes de mon parcours vers le développement web."
        />

        <div class="journey__timeline">
            {#each journey as step}
                <article class="journey__card">
                    <span class="journey__year">
                        {step.year}
                    </span>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>
                </article>
            {/each}
        </div>
    </div>
</section>

<style>
    .journey {
        padding: 8rem 0;
    }

    .journey__timeline {
        display: grid;

        gap: 2rem;
    }

    .journey__card {
        position: relative;

        padding: 2rem;

        padding-left: 3rem;

        border: 1px solid var(--border);

        border-radius: 24px;

        background: var(--surface);

        box-shadow: var(--shadow-sm);

        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    .journey__card:hover {
        transform: translateY(-6px);

        box-shadow: var(--shadow-md);
    }

    .journey__card::before {
        content: "";

        position: absolute;

        left: 1.2rem;

        top: 2.2rem;

        width: 12px;

        height: 12px;

        border-radius: 50%;

        background: var(--primary);
    }

    .journey__year {
        display: inline-block;

        margin-bottom: 0.8rem;

        color: var(--primary);

        font-weight: 700;
    }

    .journey__card h3 {
        margin-bottom: 1rem;
    }

    .journey__card p {
        color: var(--text-light);

        line-height: 1.8;
    }

    @media (max-width: 768px) {
        .journey__card {
            padding-left: 2rem;
        }

        .journey__card::before {
            left: 0.8rem;
        }
    }
</style>
