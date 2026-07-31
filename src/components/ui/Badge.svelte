<script>
  let { text = "", icon = "✨", variant = "primary" } = $props();
</script>

<div class="badge badge--{variant}">
  {#if icon}
    <span>{icon}</span>
  {/if}

  <span>{text}</span>
</div>

<style>
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    padding: 0.35rem 0.8rem;

    border-radius: 999px;

    background: rgba(37, 99, 235, 0.08);

    border: 1px solid rgba(37, 99, 235, 0.15);

    color: var(--primary);

    font-size: 0.8rem;

    font-weight: 600;

    transition:
      background-color var(--transition),
      border-color var(--transition),
      transform var(--transition);
  }

  .badge:hover {
    transform: translateY(-2px);
  }

  .badge__icon {
    font-size: 0.9rem;
  }

  .badge--primary {
    background: #eef4ff;
    color: var(--primary);
  }

  .badge--technology {
    background: #f8fafc;
    color: var(--text-light);
  }

  .badge--success {
    background: #ecfdf3;
    color: #15803d;
  }
</style>
