<script>
    const lines = [
        {
            command: "whoami",
            output: ["Arnaud Bloyet"],
        },
        {
            command: "role",
            output: ["Concepteur Développeur d'Applications Web"],
        },
        {
            command: "stack",
            output: ["JavaScript", "Svelte", "Node.js", "HTML", "CSS", "Git"],
        },
        {
            command: "status",
            output: ["Disponible pour un stage"],
        },
    ];
</script>

<div class="terminal">
    <div class="terminal__header">
        <div class="terminal__dots">
            <span class="red"></span>
            <span class="yellow"></span>
            <span class="green"></span>
        </div>

        <span class="terminal__title"> terminal </span>
    </div>

    <div class="terminal__body">
        <p class="login">Last login: Today</p>

        {#each lines as line}
            <p class="command">
                <span class="prompt"> arnaud@portfolio % </span>

                {line.command}
            </p>

            {#each line.output as item}
                <p class="output">
                    {item}
                </p>
            {/each}
        {/each}

        <p class="cursor">
            arnaud@portfolio %
            <span></span>
        </p>
    </div>
</div>

<style>
    .terminal {
        background: var(--surface);

        border: 1px solid var(--border);

        border-radius: 20px;

        overflow: hidden;

        box-shadow: var(--shadow-md);

        max-width:760px;
    }

    .terminal__header {
        display: flex;

        justify-content: space-between;

        align-items: center;

        padding: 0.9rem 1.2rem;

        border-bottom: 1px solid var(--border);

        background: rgba(248, 250, 252, 0.8);
    }

    .terminal__dots {
        display: flex;

        gap: 0.45rem;
    }

    .terminal__dots span {
        width: 12px;
        height: 12px;

        border-radius: 50%;
    }

    .red {
        background: #ff5f57;
    }

    .yellow {
        background: #febc2e;
    }

    .green {
        background: #28c840;
    }

    .terminal__title {
        font-size: 0.85rem;

        color: var(--text-light);
    }

    .terminal__body {
        padding: 1.5rem;

        font-family: "JetBrains Mono", monospace;

        font-size: 0.92rem;

        line-height: 1.8;
    }

    .login {
        color: var(--text-light);

        margin-bottom: 1rem;
    }

    .command {
        margin-top: 1rem;
    }

    .prompt {
        color: var(--primary);

        font-weight: 600;
    }

    .output {
        margin-left: 1.3rem;

        color: var(--text);
    }

    .cursor {
        margin-top: 1.5rem;
    }

    .cursor span {
        display: inline-block;

        width: 9px;

        height: 18px;

        background: var(--primary);

        margin-left: 4px;

        animation: blink 1s infinite;
    }

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }
</style>
