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

        align-items: center;
        justify-content: center;

        padding: 1rem 1.8rem;

        border-radius: 999px;

        font-weight: 600;

        text-decoration: none;

        cursor: pointer;

        transition:
            background-color var(--transition),
            color var(--transition),
            transform var(--transition),
            box-shadow var(--transition);
    }

    .button:hover {
        transform: translateY(-2px);
    }

    .button:focus-visible {
        outline: 3px solid rgba(37, 99, 235, 0.25);

        outline-offset: 4px;
    }

    .primary {
        background: var(--primary);

        color: white;

        box-shadow: var(--shadow-sm);
    }

    .primary:hover {
        background: var(--primary-hover);

        box-shadow: var(--shadow-md);
    }

    .secondary {
        background: var(--surface);

        color: var(--primary);

        border: 2px solid var(--primary);
    }

    .secondary:hover {
        background: var(--primary);

        color: white;

        box-shadow: var(--shadow-sm);
    }
</style>
