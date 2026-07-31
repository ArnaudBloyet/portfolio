<script>
    import Badge from "../ui/Badge.svelte";
    import Button from "../ui/Button.svelte";
    import Terminal from "../ui/Terminal.svelte";
</script>

<section class="hero" id="hero">

    <Badge />

    <h1>
        Bonjour 👋 <br>
        <span>ARNAUD BLOYET</span>
    </h1>

    <h2>
        Concepteur Développeur<br>
        d'Applications
    </h2>

    <p>
        Je développe des applications web modernes,
        performantes et intuitives avec JavaScript,
        Svelte et Node.js.
    </p>

    <div class="hero__buttons">

        <Button
            href="#projects"
            variant="primary">

            Voir mes projets

        </Button>

        <Button
            href="/cv.pdf"
            variant="secondary">

            Télécharger mon CV

        </Button>

    </div>

    <Terminal />

</section>

<style>

.hero{

    max-width:900px;

    margin:0 auto;

    padding:8rem 1.5rem 6rem;

    text-align:center;

}

h1{

    margin-top:2rem;

    font-size:clamp(3rem,7vw,5rem);

    line-height:1.1;

    font-weight:800;

}

h1 span{

    color:var(--primary);

}

h2{

    margin-top:1rem;

    font-size:clamp(1.5rem,3vw,2.2rem);

    color:#475569;

    font-weight:600;

}

p{

    max-width:650px;

    margin:2rem auto;

    font-size:1.15rem;

    line-height:1.8;

    color:var(--text-light);

}

.hero__buttons{

    display:flex;

    justify-content:center;

    gap:1rem;

    flex-wrap:wrap;

    margin-bottom:4rem;

}

</style>