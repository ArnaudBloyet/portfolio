<script>
    import SectionTitle from "../ui/SectionTitle.svelte";
    import Button from "../ui/Button.svelte";
</script>

<section class="contact" id="contact" data-aos="fade-up">

    <SectionTitle>
        Contact
    </SectionTitle>

    <p class="contact__intro">
        Je suis actuellement à la recherche d'un stage en développement web.
        N'hésitez pas à me contacter pour échanger sur votre projet ou une opportunité.
    </p>

    <div class="contact__cards">

        <a href="mailto:arnaud.bloyet@live.fr" class="contact__card">
            <span>📧</span>
            <div>
                <h3>Email</h3>
                <p>arnaud.bloyet@live.fr</p>
            </div>
        </a>

        <a href="https://github.com/ArnaudBloyet" target="_blank" class="contact__card">
            <span>💻</span>
            <div>
                <h3>GitHub</h3>
                <p>github.com/ArnaudBloyet</p>
            </div>
        </a>

        <a href="https://linkedin.com/in/arnaud-bloyet-716358260/" target="_blank" class="contact__card">
            <span>💼</span>
            <div>
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/arnaud-bloyet-716358260/</p>
            </div>
        </a>

    </div>

    <div class="contact__button">

        <Button
            href="/cv.pdf"
            variant="primary">

            Télécharger mon CV

        </Button>

    </div>

</section>

<style>

.contact{

    max-width:1000px;

    margin:auto;

    padding:7rem 1.5rem;

    text-align:center;

}

.contact__intro{

    max-width:700px;

    margin:2rem auto 4rem;

    color:var(--text-light);

    line-height:1.8;

    font-size:1.1rem;

}

.contact__cards{

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));

    gap:1.5rem;

}

.contact__card{

    display:flex;

    align-items:center;

    gap:1rem;

    padding:1.5rem;

    background:var(--surface);

    border-radius:var(--radius);

    text-decoration:none;

    color:inherit;

    box-shadow:var(--shadow-sm);

    transition:.3s;

}

.contact__card:hover{

    transform:translateY(-8px);

    box-shadow:var(--shadow-md);

}

.contact__card span{

    font-size:2rem;

}

.contact__card h3{

    margin-bottom:.3rem;

}

.contact__card p{

    color:var(--text-light);

}

.contact__button{

    margin-top:4rem;

}

</style>