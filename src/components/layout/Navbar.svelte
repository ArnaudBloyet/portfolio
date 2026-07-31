<nav>
    <div class="container">

        <a href="#hero" class="logo">
            A.B
        </a>

        <ul>

            <li><a href="#hero">Accueil</a></li>

            <li><a href="#about">À propos</a></li>

            <li><a href="#skills">Compétences</a></li>

            <li><a href="#projects">Projets</a></li>

            <li><a href="#contact">Contact</a></li>

        </ul>

    </div>
</nav>

<style>

nav{

    position:fixed;

    top:0;

    width:100%;

    backdrop-filter:blur(12px);

    background:rgba(255,255,255,.75);

    border-bottom:1px solid #e2e8f0;

    z-index:1000;

}

.container{

    max-width:1200px;

    margin:auto;

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:20px;

}

.logo{

    text-decoration:none;

    font-size:1.5rem;

    font-weight:700;

    color:#2563eb;

}

ul{

    display:flex;

    gap:2rem;

    list-style:none;

}

li a{

    text-decoration:none;

    color:#0f172a;

    transition:.3s;

}

li a:hover{

    color:#2563eb;

}

</style>