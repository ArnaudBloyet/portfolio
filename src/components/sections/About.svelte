<script>
    import SectionTitle from "../ui/SectionTitle.svelte";
    import { reveal } from "../../actions/reveal.js";

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

<section use:reveal id="about" class="about reveal">
    <div class="container">
        <SectionTitle
            subtitle="À propos"
            title="Une reconversion tournée vers le développement web"
            description="Après plusieurs années d'expérience dans différents domaines, j'ai choisi de me reconvertir dans le développement web afin de transformer ma passion pour la technologie en métier."
        />

        <div class="about__content">
            <div class="about__card">
                <h3>Mon parcours</h3>

                <p>
                    Curieux et passionné par l'informatique, j'ai entrepris une
                    reconversion afin de devenir Concepteur Développeur
                    d'Applications Web. Cette formation me permet de développer
                    des applications modernes en JavaScript, Svelte et Node.js
                    tout en appliquant les bonnes pratiques du développement.
                </p>
            </div>

            <div class="about__card">
                <h3>Mon objectif</h3>

                <p>
                    Je recherche un stage afin de mettre en pratique mes
                    compétences, évoluer au sein d'une équipe de développement
                    et continuer à apprendre au contact de développeurs
                    expérimentés.
                </p>
            </div>
        </div>
    </div>
</section>

<style>
    .about {
        padding: 8rem 0;
    }

    .about__content {
        display: grid;

        grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));

        gap: 2rem;
    }

    .about__card {
        padding: 2rem;

        border: 1px solid var(--border);

        border-radius: 24px;

        background: var(--surface);

        box-shadow: var(--shadow-sm);

        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    .about__card:hover {
        transform: translateY(-6px);

        box-shadow: var(--shadow-md);
    }

    .about__card h3 {
        margin-bottom: 1rem;

        font-size: 1.5rem;
    }

    .about__card p {
        color: var(--text-light);

        line-height: 1.8;
    }

    @media (max-width: 768px) {
        .about__content {
            grid-template-columns: 1fr;
        }
    }
</style>
