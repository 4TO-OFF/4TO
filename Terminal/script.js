const input = document.getElementById("input");
const terminal = document.getElementById("terminal");

const commands = {
  help: `
    <div>Commandes disponibles :</div>
    <ul>
      <li><code>help</code> — Affiche cette liste</li>
      <li><code>about</code> — Infos sur le terminal</li>
      <li><code>clear</code> — Nettoie le terminal</li>
      <li><code>contact</code> — Mes contacts</li>
      <li><code>discord</code> — Invite vers mon serveur</li>
    </ul>
  `,
  about: "Je suis un terminal stylé créé par 4TO. Fait pour le fun 😎 (je sais, c’est inutile)",
  contact: "Mail : discord.4tobot@gmail.com",
  discord: "Rejoins le serveur Discord : <a href='https://discord.gg/RyBtBdf3xp' target='_blank'>discord.gg/RyBtBdf3xp</a>",
  clear: "CLEAR"
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    appendLine(`<span class="prompt">4to-off.github.io/4TO $</span> ${cmd}`);

    if (commands[cmd]) {
      if (cmd === "clear") {
        const lines = terminal.querySelectorAll(".line");
        lines.forEach((line, index) => {
          if (index > 0) line.remove(); // garde le premier message
        });
      } else {
        appendLine(commands[cmd]);
      }
    } else if (cmd !== "") {
      appendLine(`Commande inconnue : <code>${cmd}</code>`);
    }

    input.value = "";
    terminal.scrollTop = terminal.scrollHeight;
  }
});

function appendLine(content) {
  const div = document.createElement("div");
  div.className = "line";
  div.innerHTML = content;
  terminal.appendChild(div);
}
