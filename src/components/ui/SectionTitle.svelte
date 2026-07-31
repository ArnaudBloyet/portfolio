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
        max-width: 760px;

        margin: 0 auto 5rem;

        text-align: center;
    }

    .section-title span {
        display: inline-block;

        color: var(--primary);

        font-weight: 600;

        margin-bottom: 1rem;
    }

    .section-title h2 {
        font-size: clamp(2.4rem, 5vw, 3.4rem);

        line-height: 1.05;

        margin-bottom: 1rem;
    }

    .section-title p {
        color: var(--text-light);

        font-size: 1.1rem;

        line-height: 1.9;
    }
</style>
