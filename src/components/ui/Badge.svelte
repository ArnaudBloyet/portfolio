<script>
  export let text = "Disponible pour un stage";
</script>

<div class="badge">
  <span>🚀</span>
  <span>{text}</span>
</div>

<style>
.badge {
  display: inline-flex;
  align-items: center;
  gap: .5rem;

  padding: .6rem 1rem;

  border-radius: 999px;

  background: rgba(37, 99, 235, .08);

  border: 1px solid rgba(37, 99, 235, .15);

  color: var(--primary);

  font-size: .95rem;

  font-weight: 600;
}
</style>