<script>
    import SectionTitle from "../ui/SectionTitle.svelte";
    import { socials } from "../../data/socials.js";
    import { reveal } from "../../actions/reveal.js";
</script>

<section use:reveal id="contact" class="contact reveal">
    <div class="container">
        <SectionTitle
            subtitle="Contact"
            title="Travaillons ensemble"
            description="Vous recherchez un stagiaire motivé pour rejoindre votre équipe ? N'hésitez pas à me contacter."
        />

        <div class="contact__grid">
            {#each socials as social}
                <article class="contact__card">
                    <h3>{social.title}</h3>

                    {#if social.href}
                        <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {social.value}
                        </a>
                    {:else}
                        <p>{social.value}</p>
                    {/if}
                </article>
            {/each}
        </div>
    </div>
</section>

<style>
    .contact {
        padding: 8rem 0;
    }

    .contact__grid {
        display: grid;

        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

        gap: 2rem;
    }

    .contact__card {
        padding: 2rem;

        border: 1px solid var(--border);

        border-radius: 24px;

        background: var(--surface);

        box-shadow: var(--shadow-sm);

        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    .contact__card:hover {
        transform: translateY(-6px);

        box-shadow: var(--shadow-md);
    }

    .contact__card h3 {
        margin-bottom: 1rem;
    }

    .contact__card a {
        color: var(--primary);

        text-decoration: none;

        word-break: break-word;
    }

    .contact__card p {
        color: var(--text-light);
    }
</style>
