<script>
    import SectionTitle from "../ui/SectionTitle.svelte";

    const journey = [
        {
            year: "2025",
            title: "Comptable",
            description: "Plusieurs années d'expérience en comptabilité."
        },
        {
            year: "2026",
            title: "Formation O'clock",
            description: "Concepteur Développeur d'Applications."
        },
        {
            year: "2027",
            title: "Stage",
            description: "Recherche d'un stage pour développer mes compétences."
        },
        {
            year: "Objectif",
            title: "Développeur Web",
            description: "Intégrer une entreprise et continuer à progresser."
        }
    ];
</script>

<section class="journey" id="journey" data-aos="fade-up">

    <SectionTitle>
        Mon parcours
    </SectionTitle>

    <div class="timeline">

        {#each journey as step}

            <div class="timeline__item">

                <div class="timeline__dot"></div>

                <div class="timeline__content">

                    <span>{step.year}</span>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>

                </div>

            </div>

        {/each}

    </div>

</section>

<style>

.journey{

    max-width:900px;

    margin:auto;

    padding:7rem 1.5rem;

}

.timeline{

    position:relative;

    margin-top:4rem;

    padding-left:2rem;

}

.timeline::before{

    content:"";

    position:absolute;

    left:11px;

    top:0;

    bottom:0;

    width:2px;

    background:#dbeafe;

}

.timeline__item{

    position:relative;

    padding-bottom:3rem;

}

.timeline__dot{

    position:absolute;

    left:-2px;

    top:8px;

    width:24px;

    height:24px;

    border-radius:50%;

    background:var(--primary);

    border:5px solid white;

    box-shadow:0 0 0 2px var(--primary);

}

.timeline__content{

    margin-left:3rem;

    background:var(--surface);

    padding:1.5rem;

    border-radius:18px;

    box-shadow:var(--shadow-sm);

}

.timeline__content span{

    color:var(--primary);

    font-weight:700;

}

.timeline__content h3{

    margin:.5rem 0;

}

.timeline__content p{

    color:var(--text-light);

    line-height:1.7;

}

</style>