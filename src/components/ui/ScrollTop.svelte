<script>
    import { onMount } from "svelte";

    let visible = false;

    function scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    onMount(() => {
        const handleScroll = () => {
            visible = window.scrollY > 500;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

{#if visible}
    <button class="scroll-top" on:click={scrollTop} aria-label="Retour en haut">
        ↑
    </button>
{/if}

<style>
    .scroll-top {
        position: fixed;

        right: 2rem;

        bottom: 2rem;

        width: 52px;

        height: 52px;

        border: none;

        border-radius: 50%;

        background: var(--primary);

        color: white;

        font-size: 1.5rem;

        cursor: pointer;

        box-shadow: var(--shadow-md);

        transition:
            transform 0.25s ease,
            opacity 0.25s ease;

        z-index: 999;
    }

    .scroll-top:hover {
        transform: translateY(-4px);
    }
</style>
