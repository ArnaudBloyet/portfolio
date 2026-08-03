<script>
    import SectionTitle from "../ui/SectionTitle.svelte";
    import { socials } from "../../data/socials.js";
    import { contactIcons } from "../../data/contactIcons.js";
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
                    <div class="contact__icon">
                        <img
                            src={contactIcons[social.icon]}
                            alt=""
                            aria-hidden="true"
                        />
                    </div>

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
        padding: 7rem 0;
    }

    .contact__grid {
        display: grid;

        grid-template-columns: repeat(2, 1fr);

        gap: 2rem;
    }

    .contact__card {
        padding: 1.75rem;

        border: 1px solid var(--border);

        border-radius: 24px;

        background: var(--surface);

        box-shadow: var(--shadow-sm);

        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    .contact__card:hover {
        transform: translateY(-8px);

        box-shadow: var(--shadow-md);
    }

    .contact__icon {
        width: 52px;

        height: 52px;

        display: flex;

        align-items: center;

        justify-content: center;

        border-radius: 16px;

        margin-bottom: 1.25rem;

        background: #eff6ff;

        transition:
            transform 0.3s ease,
            background 0.3s ease;
    }

    .contact__card:hover .contact__icon {
        transform: scale(1.08) rotate(-5deg);

        background: #dbeafe;
    }

    .contact__icon img {
        width: 24px;

        height: 24px;

        object-fit: contain;
    }

    .contact__card h3 {
        margin-bottom: 0.75rem;

        font-size: 1.5rem;
    }

    .contact__card p,
    .contact__card a {
        color: var(--text-light);

        text-decoration: none;

        line-height: 1.7;

        transition: color 0.2s ease;
    }

    .contact__card a:hover {
        color: var(--primary);
    }

    @media (max-width: 768px) {
        .contact__grid {
            grid-template-columns: 1fr;
        }
    }
</style>
