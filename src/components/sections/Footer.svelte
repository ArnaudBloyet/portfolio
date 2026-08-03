<script>
    import { reveal } from "../../actions/reveal.js";

    import github from "../../assets/icons/github.svg";
    import linkedin from "../../assets/icons/linkedin.svg";
</script>

<footer use:reveal class="footer reveal">
    <div class="container">

        <div class="footer__logo">
            AB<span>.</span>
        </div>

        <p class="footer__job">
            Concepteur Développeur d'Applications Web
        </p>

        <p class="footer__status">
            Disponible pour un stage • Cournon d'Auvergne
        </p>

        <div class="footer__links">

            <a
                href="https://github.com/ArnaudBloyet"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={github} alt="" aria-hidden="true" />
                GitHub
            </a>

            <a
                href="https://linkedin.com/in/arnaud-bloyet-716358260/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={linkedin} alt="" aria-hidden="true" />
                LinkedIn
            </a>

        </div>

        <p class="footer__copyright">
            © 2026 Arnaud Bloyet
        </p>

    </div>
</footer>

<style>

.footer{

    margin-top:7rem;

    padding:4rem 0 2rem;

    border-top:1px solid var(--border);

}

.footer .container{

    display:flex;

    flex-direction:column;

    align-items:center;

    text-align:center;

}

.footer__logo{

    font-size:2rem;

    font-weight:800;

    letter-spacing:-1px;

    margin-bottom:1rem;

}

.footer__logo span{

    color:var(--primary);

}

.footer__job{

    font-size:1.05rem;

    font-weight:600;

    color:var(--text);

}

.footer__status{

    margin-top:.5rem;

    color:var(--text-light);

}

.footer__links{

    display:flex;

    gap:2rem;

    margin:2rem 0;

    flex-wrap:wrap;

    justify-content:center;

}

.footer__links a{

    display:flex;

    align-items:center;

    gap:.6rem;

    color:var(--text-light);

    text-decoration:none;

    font-weight:600;

    transition:
        transform .25s ease,
        color .25s ease;

}

.footer__links a:hover{

    color:var(--primary);

    transform:translateY(-2px);

}

.footer__links img{

    width:20px;

    height:20px;

}

.footer__copyright{

    padding-top:2rem;

    width:100%;

    border-top:1px solid var(--border);

    color:var(--text-light);

    font-size:.95rem;

}

@media (max-width:768px){

    .footer{

        padding:3rem 0 2rem;

    }

    .footer__links{

        gap:1.25rem;

    }

}

</style>