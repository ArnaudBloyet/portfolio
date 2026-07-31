<script>
    import SectionTitle from "../ui/SectionTitle.svelte";

    const projects = [
        {
            title: "O'Chat",
            description:
                "Application de discussion utilisant l'API Mistral avec historique des conversations et PocketBase.",
            image: "/images/ochat.png",
            technologies: [
                "Svelte",
                "JavaScript",
                "PocketBase",
                "API Mistral"
            ],
            github: "https://github.com/TON_GITHUB/ochat",
            demo: "#"
        },
        {
            title: "Todo List",
            description:
                "Application de gestion de tâches avec sauvegarde des données.",
            image: "/images/todolist.png",
            technologies: [
                "JavaScript",
                "Svelte"
            ],
            github: "https://github.com/TON_GITHUB/todolist",
            demo: "#"
        },
        {
            title: "Shopping Cart",
            description:
                "Simulation d'un panier e-commerce avec calcul automatique des totaux.",
            image: "/images/cart.png",
            technologies: [
                "JavaScript",
                "Svelte"
            ],
            github: "https://github.com/TON_GITHUB/shopping-cart",
            demo: "#"
        }
    ];
</script>

<section class="projects" id="projects">

    <SectionTitle>
        Mes projets
    </SectionTitle>

    <div class="projects__grid">

        {#each projects as project}

            <article class="project-card">

                <img
                    src={project.image}
                    alt={project.title}
                />

                <div class="project-card__content">

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div class="tags">

                        {#each project.technologies as tech}

                            <span>{tech}</span>

                        {/each}

                    </div>

                    <div class="buttons">

                        <a
                            href={project.github}
                            target="_blank">

                            GitHub

                        </a>

                        <a
                            href={project.demo}
                            target="_blank">

                            Démo

                        </a>

                    </div>

                </div>

            </article>

        {/each}

    </div>

</section>

<style>

.projects{

    max-width:1200px;

    margin:auto;

    padding:7rem 1.5rem;

}

.projects__grid{

    margin-top:4rem;

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(340px,1fr));

    gap:2rem;

}

.project-card{

    background:white;

    border-radius:20px;

    overflow:hidden;

    box-shadow:var(--shadow-sm);

    transition:.3s;

}

.project-card:hover{

    transform:translateY(-8px);

    box-shadow:var(--shadow-md);

}

.project-card img{

    width:100%;

    height:220px;

    object-fit:cover;

}

.project-card__content{

    padding:1.5rem;

}

.project-card h3{

    margin-bottom:1rem;

}

.project-card p{

    color:#64748b;

    line-height:1.7;

}

.tags{

    display:flex;

    flex-wrap:wrap;

    gap:.6rem;

    margin:1.5rem 0;

}

.tags span{

    background:#eff6ff;

    color:var(--primary);

    padding:.4rem .8rem;

    border-radius:999px;

    font-size:.85rem;

    font-weight:600;

}

.buttons{

    display:flex;

    gap:1rem;

}

.buttons a{

    flex:1;

    text-align:center;

    text-decoration:none;

    padding:.9rem;

    border-radius:12px;

    background:var(--primary);

    color:white;

    font-weight:600;

    transition:.3s;

}

.buttons a:hover{

    transform:translateY(-3px);

}

</style>