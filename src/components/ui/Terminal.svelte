<script>
    const lines = [
        { command: "whoami", output: "Arnaud Bloyet" },
        { command: "stack", output: ["JavaScript", "Svelte", "Node.js", "HTML", "CSS", "Git"] },
        { command: "status", output: "Disponible pour un stage" }
    ];
</script>

<div class="terminal">
    <div class="terminal__header">
        <span></span>
        <span></span>
        <span></span>
    </div>

    <div class="terminal__body">
        {#each lines as line}
            <p class="command">&gt; {line.command}</p>

            {#if Array.isArray(line.output)}
                {#each line.output as item}
                    <p>{item}</p>
                {/each}
            {:else}
                <p>{line.output}</p>
            {/if}

            <br>
        {/each}

        <span class="cursor">_</span>
    </div>
</div>

<style>
.terminal {
    max-width: 700px;
    margin: 3rem auto 0;
    background: #0f172a;
    color: #e2e8f0;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--shadow-md);
}

.terminal__header {
    display: flex;
    gap: .5rem;
    padding: .8rem 1rem;
    background: #1e293b;
}

.terminal__header span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #64748b;
}

.terminal__body {
    padding: 1.5rem;
    font-family: monospace;
    line-height: 1.8;
}

.command {
    color: #60a5fa;
    font-weight: bold;
}

.cursor {
    animation: blink 1s infinite;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}
</style>