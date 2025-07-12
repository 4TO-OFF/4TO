const input = document.getElementById("input");
const terminal = document.getElementById("terminal");

let devUnlocked = false;

const getRandomUser = () => {
  const users = ["user", "a guys", "Quelqu'un", "admin"];
  return users[Math.floor(Math.random() * users.length)];
};

const commands = {
  help: `
    <div>Commandes disponibles :</div>
    <ul>
      <li><code>help</code> — Affiche cette liste</li>
      <li><code>about</code> — Infos sur le terminal</li>
      <li><code>clear</code> — Nettoie le terminal</li>
      <li><code>contact</code> — Redirige vers la FAQ</li>
      <li><code>discord</code> — Invite vers mon serveur</li>
      <li><code>date</code> — Affiche la date actuelle</li>
      <li><code>heure</code> — Affiche l'heure actuelle</li>
      <li><code>random</code> — Nombre aléatoire entre 1 et 10</li>
      <li><code>whoami</code> — Devine ton identité</li>
      <li><code>nubi</code> — Il te regarde</li>
      <li><code>devmode</code> — Active le mode développeur</li>
      <li><code>sudo</code> — Essaie de passer root </li>
    </ul>
  `,

  about: "Je suis un terminal stylé créé par 4TO. Fait pour le fun... (je sais, c’est inutile)",

  contact: () => { 
    setTimeout(() => {
      window.location.href = "../FAQ/FAQ.html";
    }, 2000);
    return "📬 Redirection vers la FAQ dans 2 secondes...";
  },

  discord: "Rejoins le serveur Discord : <a href='https://discord.gg/RyBtBdf3xp' target='_blank'>discord.gg/RyBtBdf3xp</a>",

  date: () => `📅 On est le <strong>${new Date().toLocaleDateString("fr-FR")}</strong>`,
  heure: () => `🕒 Il est <strong>${new Date().toLocaleTimeString("fr-FR")}</strong>`,
  random: () => `🎲 Nombre entre 1 et 10 : <strong>${Math.floor(Math.random() * 10) + 1}</strong>`,
  whoami: () => `👤 Utilisateur : <strong>${getRandomUser()}</strong>`,

  nubi: () => `
<pre>
    /\\___/\\
   ( • ω • ) ...Je te vois...
  /       \\
</pre>`,

  devmode: () => {
    devUnlocked = true;
    return "🧪 Mode développeur activé ! Devine les commandes debloquer";
  },

  debug: () => devUnlocked
    ? "🔍 Debug activé : 1 + 1 = 3"
    : "⛔ Accès refusé. Active <code>devmode</code> d'abord.",

  sudo: () => devUnlocked
    ? `<pre>
# ACCESS GRANTED #
sudo. ok mais ...
sudo quoi ?
</pre>`
    : "⛔ <strong>Permission denied:</strong> t'es pas root ici 💀",

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
          if (index > 0) line.remove();
        });
      } else {
        const output = typeof commands[cmd] === "function" ? commands[cmd]() : commands[cmd];
        appendLine(output);
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
