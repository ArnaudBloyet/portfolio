<script>
  let { text = "Disponible pour un stage" } = $props();
</script>

<div class="badge">
  <span class="badge__icon"> ✨ </span>
  <span>{text}</span>
</div>

<style>
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    padding: 0.55rem 1rem;

    border-radius: 999px;

    background: rgba(37, 99, 235, 0.08);

    border: 1px solid rgba(37, 99, 235, 0.15);

    color: var(--primary);

    font-size: 0.9rem;

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
</style>
