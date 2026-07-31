<script>
    let {
        href = "#",
        variant = "primary",
        target = "_self",
        children
    } = $props();
</script>

<a
    href={href}
    target={target}
    class={`button ${variant}`}
>
    {@render children?.()}
</a>

<style>

.button {

    display: inline-flex;
    justify-content: center;
    align-items: center;

    padding: 1rem 1.8rem;

    border-radius: 14px;

    text-decoration: none;

    font-weight: 600;

    transition: all .25s ease;

    cursor: pointer;

}

.primary {

    background: var(--primary);

    color: white;

}

.primary:hover {

    transform: translateY(-4px);

    box-shadow: var(--shadow-md);

}

.secondary {

    border: 2px solid var(--primary);

    color: var(--primary);

    background: white;

}

.secondary:hover {

    background: var(--primary);

    color: white;

    transform: translateY(-4px);

}

</style>