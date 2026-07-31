<script>
    let {
        href = "#",
        variant = "primary",
        target = "_self",
        children,
    } = $props();
</script>

<a {href} {target} class={`button ${variant}`}>
    {@render children?.()}
</a>

<style>
    .button {
        display: inline-flex;
        justify-content: center;
        align-items: center;

        padding: 1rem 1.8rem;

        border-radius: 999px;

        text-decoration: none;

        font-weight: 600;

        transition:
            background-color var(--transition),
            color var(--transition),
            transform var(--transition),
            box-shadow var(--transition);

        cursor: pointer;
    }

    .button:focus-visible {
        outline: 3px solid rgba(37, 99, 235, 0.3);
        outline-offset: 4px;
    }

    .primary {
        background: var(--primary);

        color: white;

        box-shadow: var(--shadow-sm);
    }

    .primary:hover {
        transform: translateY(-2px);

        box-shadow: var(--shadow-md);
    }

    .secondary {
        border: 2px solid var(--primary);

        color: var(--primary);

        background:var(--surface);
    }

    .secondary:hover {
        background: var(--primary);

        color: white;

        transform: translateY(-2px);
    }
</style>
