<script>
    import { onMount } from "svelte";

    let menuOpen = false;
    let activeSection = "projects";
    let scrolled = false;

    const links = [
        { name: "Projets", href: "#projects", id: "projects" },
        { name: "Compétences", href: "#skills", id: "skills" },
        { name: "À propos", href: "#about", id: "about" },
        { name: "Parcours", href: "#journey", id: "journey" },
        { name: "Contact", href: "#contact", id: "contact" },
    ];

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        activeSection = entry.target.id;
                    }
                });
            },
            {
                threshold: 0.45,
            },
        );

        links.forEach((link) => {
            const section = document.getElementById(link.id);

            if (section) observer.observe(section);
        });

        const handleScroll = () => {
            scrolled = window.scrollY > 20;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>

<nav class="navbar scrolled">
    <div class="container navbar__content">
        <a href="#" class="navbar__logo"> AB<span>.</span></a>

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
                    <a
                        href={link.href}
                        class:active={activeSection === link.id}
                        on:click={() => (menuOpen = false)}
                    >
                        {link.name}
                    </a>
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

        border-bottom: 1px solid rgba(226, 232, 240, 0.7);

        transition: all 0.3s ease;
    }

    .navbar.scrolled {
        background: rgba(255, 255, 255, 0.9);

        box-shadow: 0 12px 40px rgba(15, 23, 42, 0.08);

        border-bottom: 1px solid rgba(226, 232, 240, 0.9);
    }

    @media (max-width: 768px) {
        .navbar {
            padding: 1rem 0;
        }

        .navbar__links {
            gap: 1rem;

            flex-wrap: wrap;

            justify-content: center;
        }
    }

    .navbar__content {
        height: 76px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        transition: height 0.3s ease;
    }

    .navbar.scrolled .navbar__content {
        height: 64px;
    }

    .navbar__logo {
        font-size: 1.9rem;
        font-weight: 800;
        letter-spacing: -1px;

        color: var(--text);

        text-decoration: none;

        transition: 0.3s;
    }
    .navbar__logo span {
        color: var(--primary);
    }

    .navbar__logo:hover {
        transform: translateY(-2px);
    }

    .navbar ul {
        list-style: none;

        display: flex;
        gap: 2rem;
    }

    .navbar ul a {
        position: relative;

        color: var(--text);

        font-weight: 600;

        text-decoration: none;

        transition: color 0.25s ease;
    }

    .navbar ul a:hover,
    .navbar ul a.active {
        color: var(--primary);
    }

    .navbar ul a::after {
        content: "";

        position: absolute;

        left: 50%;
        bottom: -8px;

        width: 0;
        height: 3px;

        background: var(--primary);

        border-radius: 999px;

        transform: translateX(-50%);

        transition: width 0.25s ease;
    }

    .navbar ul a:hover::after,
    .navbar ul a.active::after {
        width: 24px;
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
