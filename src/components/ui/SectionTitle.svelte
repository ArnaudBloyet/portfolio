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

        font-size: 1.15rem;

        font-weight: 700;

        letter-spacing: 0.02em;

        margin-bottom: 1.25rem;
    }

    .section-title h2 {
        position: relative;

        font-size: clamp(2.4rem, 5vw, 3.4rem);

        line-height: 1.1;
    }

    .section-title h2::after {
        content: "";

        display: block;

        width: 90px;

        height: 5px;

        margin: 1.8rem auto 0;

        border-radius: 999px;

        background: var(--primary);
    }

    .section-title p {
        margin-top: 2rem;

        color: var(--text-light);

        font-size: 1.1rem;

        line-height: 1.8;
    }

    @media (max-width: 768px) {
        .section-title {
            margin-bottom: 4rem;
        }

        .section-title h2 {
            line-height: 1.2;
        }

        .section-title p {
            font-size: 1rem;
        }
    }
</style>
