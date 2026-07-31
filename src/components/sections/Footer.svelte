<footer class="footer">

    <div class="footer__content">

        <p>
            © 2026 Arnaud Bloyet - Tous droits réservés
        </p>

        <div class="footer__links">

            <a
                href="https://github.com/ArnaudBloyet"
                target="_blank"
            >
                GitHub
            </a>

            <a
                href="https://linkedin.com/in/arnaud-bloyet-716358260/"
                target="_blank"
            >
                LinkedIn
            </a>

        </div>

    </div>

</footer>

<style>

.footer{

    margin-top:6rem;

    border-top:1px solid #e2e8f0;

    padding:2rem 1.5rem;

}

.footer__content{

    max-width:1200px;

    margin:auto;

    display:flex;

    justify-content:space-between;

    align-items:center;

    gap:1rem;

    flex-wrap:wrap;

}

.footer p{

    color:#64748b;

}

.footer__links{

    display:flex;

    gap:1.5rem;

}

.footer__links a{

    color:#64748b;

    text-decoration:none;

    transition:.3s;

}

.footer__links a:hover{

    color:var(--primary);

}

@media(max-width:700px){

.footer__content{

    flex-direction:column;

}

}

</style>