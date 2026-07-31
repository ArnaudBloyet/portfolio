<script>
    let menuOpen = false;

    const links = [
        { name: "À propos", href: "#about" },
        { name: "Compétences", href: "#skills" },
        { name: "Projets", href: "#projects" },
        { name: "Parcours", href: "#journey" },
        { name: "Contact", href: "#contact" },
    ];
</script>

<nav class="navbar">
    <div class="container navbar__content">
        <a href="#" class="navbar__logo"> AB. </a>

        <button
            class="navbar__toggle"
            on:click={() => (menuOpen = !menuOpen)}
            aria-label="Ouvrir le menu"
        >
            ☰
        </button>

        <ul class:open={menuOpen}>
            {#each links as link}
                <li>
                    <a href={link.href}>{link.name}</a>
                </li>
            {/each}
        </ul>
    </div>
</nav>

<style>
    .navbar {
        position: sticky;
        top: 0;
        z-index: 1000;

        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);

        background: rgba(255, 255, 255, 0.72);

        box-shadow: 0 8px 30px rgba(15, 23, 42, 0.04);

        border-bottom: 1px solid rgba(226, 232, 240, 0.7);
    }

    .navbar__content {
        height: 72px;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .navbar__logo {
        font-size: 1.4rem;
        font-weight: 800;
        letter-spacing: -0.05em;
    }

    .navbar ul {
        list-style: none;

        display: flex;
        gap: 2rem;
    }

    .navbar a {
        color: var(--text);

        font-weight: 500;

        transition: color var(--transition);
    }

    .navbar a:hover {
        color: var(--primary);
    }

    .navbar__toggle {
        display: none;

        background: none;
        border: none;

        font-size: 1.5rem;

        cursor: pointer;
    }

    @media (max-width: 768px) {
        .navbar__toggle {
            display: block;
        }

        .navbar ul {
            display: none;

            position: absolute;

            top: 72px;

            left: 0;

            width: 100%;

            padding: 2rem;

            background: white;

            flex-direction: column;

            box-shadow: var(--shadow-md);
        }

        .navbar ul.open {
            display: flex;
        }
    }
</style>
