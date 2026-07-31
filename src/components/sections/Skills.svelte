<script>
    import SectionTitle from "../ui/SectionTitle.svelte";

    const skills = [
        {
            emoji: "🌐",
            title: "HTML5",
            description: "Création de structures web sémantiques et accessibles."
        },
        {
            emoji: "🎨",
            title: "CSS3",
            description: "Mise en page responsive avec Flexbox, Grid et animations."
        },
        {
            emoji: "⚡",
            title: "JavaScript",
            description: "Développement d'applications modernes en ES6+."
        },
        {
            emoji: "🧡",
            title: "Svelte",
            description: "Création d'interfaces réactives et performantes."
        },
        {
            emoji: "🟢",
            title: "Node.js",
            description: "Développement d'API et d'applications côté serveur."
        },
        {
            emoji: "📦",
            title: "Git & GitHub",
            description: "Gestion de versions et travail collaboratif."
        }
    ];
</script>

<section class="skills" id="skills" data-aos="fade-up">

    <SectionTitle>
        Compétences
    </SectionTitle>

    <div class="skills__grid">

        {#each skills as skill}

            <article class="skill-card">

                <div class="skill-card__icon">
                    {skill.emoji}
                </div>

                <h3>{skill.title}</h3>

                <p>{skill.description}</p>

            </article>

        {/each}

    </div>

</section>

<style>

.skills{

    max-width:1200px;

    margin:auto;

    padding:7rem 1.5rem;

}

.skills__grid{

    margin-top:4rem;

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));

    gap:2rem;

}

.skill-card{

    background:var(--surface);

    border-radius:var(--radius);

    padding:2rem;

    box-shadow:var(--shadow-sm);

    transition:.3s;

}

.skill-card:hover{

    transform:translateY(-8px);

    box-shadow:var(--shadow-md);

}

.skill-card__icon{

    font-size:2rem;

    margin-bottom:1rem;

}

.skill-card h3{

    margin-bottom:1rem;

}

.skill-card p{

    color:var(--text-light);

    line-height:1.7;

}

</style>