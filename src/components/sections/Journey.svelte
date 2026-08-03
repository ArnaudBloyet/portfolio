<script>
    import SectionTitle from "../ui/SectionTitle.svelte";
    import { journey } from "../../data/journey.js";
    import { reveal } from "../../actions/reveal.js";

    import GraduationIcon from "../../assets/icons/graduation-cap.svg";
    import LaptopIcon from "../../assets/icons/laptop.svg";
    import SearchIcon from "../../assets/icons/search.svg";

    const icons = {
        graduation: GraduationIcon,
        laptop: LaptopIcon,
        search: SearchIcon,
    };
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
                    <div class="journey__header">
                        <div class="journey__icon">
                            <img
                                src={icons[step.icon]}
                                alt=""
                                aria-hidden="true"
                            />
                        </div>

                        <span class="journey__year">
                            {step.year}
                        </span>
                    </div>

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

        padding: 1.75rem 2rem;

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

    .journey__header {
        display: flex;

        align-items: center;

        gap: 0.75rem;

        margin-bottom: 0.75rem;
    }

    .journey__icon {
        width: 46px;

        height: 46px;

        display: flex;

        align-items: center;

        justify-content: center;

        background: rgba(59, 130, 246, 0.12);

        border-radius: 50%;

        flex-shrink: 0;
    }

    .journey__icon img {
        width: 24px;

        height: 24px;
    }

    .journey__year {
        color: var(--primary);

        font-size: 1rem;

        font-weight: 700;

        margin: 0;
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
</style>
