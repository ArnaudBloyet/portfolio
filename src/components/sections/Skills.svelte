<script>
    import SectionTitle from "../ui/SectionTitle.svelte";
    import Badge from "../ui/Badge.svelte";
    import { skills } from "../../data/skills.js";
</script>

<section id="skills" class="skills">
    <div class="container">
        <SectionTitle
            subtitle="Compétences"
            title="Les technologies que j'utilise"
            description="Les principaux outils et technologies que j'utilise pour concevoir des applications web modernes."
        />

        <div class="skills__grid">
            {#each skills as skill}
                <article class="skills__card">
                    <h3>{skill.category}</h3>

                    <div class="skills__badges">
                        {#each skill.items as item}
                            <Badge text={item} icon="" />
                        {/each}
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>

<style>
    .skills {
        padding: 8rem 0;
    }

    .skills__grid {
        display: grid;

        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

        gap: 2rem;
    }

    .skills__card {
        min-height: 210px;

        padding: 2rem;

        border: 1px solid var(--border);

        border-radius: 24px;

        background: var(--surface);

        box-shadow: var(--shadow-sm);

        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    .skills__card:hover {
        transform: translateY(-6px);

        box-shadow: var(--shadow-md);
    }

    .skills__card h3 {
        margin-bottom: 1.5rem;

        font-size: 1.4rem;
    }

    .skills__badges {
        display: flex;

        flex-wrap: wrap;

        gap: 0.75rem;
    }
</style>
