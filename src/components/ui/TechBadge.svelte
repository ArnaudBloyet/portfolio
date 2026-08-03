<script>
    import { icons } from "../../data/icons.js";

    let { technology } = $props();

    const logo = icons[technology];
</script>

<div class="tech-badge">
    {#if logo}
        <img src={logo} alt="" aria-hidden="true" />
    {/if}

    <span>{technology}</span>
</div>

<style>
    .tech-badge {
        display: inline-flex;

        align-items: center;

        gap: 0.5rem;

        padding: 0.45rem 0.85rem;

        border-radius: 999px;

        background: #f8fafc;

        border: 1px solid var(--border);

        font-size: 0.85rem;

        font-weight: 600;

        transition:
            transform var(--transition),
            box-shadow var(--transition);
    }

    .tech-badge:hover {
        transform: translateY(-2px);

        box-shadow: var(--shadow-sm);
    }

    .tech-badge img {
        width: 18px;

        height: 18px;

        object-fit: contain;

        flex-shrink: 0;
    }
</style>
