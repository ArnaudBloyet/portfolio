<script>
    let { subtitle = "", title = "", description = "" } = $props();
</script>

<div class="section-title">
    {#if subtitle}
        <span>{subtitle}</span>
    {/if}

    <h2>{title}</h2>

    {#if description}
        <p>{description}</p>
    {/if}
</div>

<style>
    .section-title {
        max-width: 700px;

        margin: 0 auto 4rem;

        text-align: center;
    }

    .section-title span {
        display: inline-block;

        color: var(--primary);

        font-weight: 600;

        margin-bottom: 1rem;
    }

    .section-title h2 {
        font-size: clamp(2.2rem, 5vw, 3rem);

        margin-bottom: 1rem;
    }

    .section-title p {
        color: var(--text-light);

        line-height: 1.8;
    }
</style>
