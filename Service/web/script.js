const phrases = [
  "Site web for free",
  "Client satisfait",
  "Guns.lol mais en mieux",
  "Coder avec mes skill en html, css et js",
  "Responsive mobile",
  "Tu lmis encore ?"
];

let index = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing");
let isDeleting = false;

function type() {
  let current = phrases[index];
  typingElement.textContent = current.substring(0, charIndex);

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) index = (index + 1) % phrases.length;
    setTimeout(type, 1000);
  }
}

type();

const testimonials = [
  "rmdeltanarutoto234_ : Le site est parfait merci !",
  "biston083 : C'est trop bien... en vrai il est parfais le site"
];

const list = document.getElementById("testimonials-list");
testimonials.forEach(msg => {
  const li = document.createElement("li");
  li.textContent = msg;
  list.appendChild(li);
});

document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
    const content = button.nextElementSibling;
    if (!expanded) {
      content.classList.add('open');
      content.hidden = false;
    } else {
      content.classList.remove('open');
      setTimeout(() => { content.hidden = true; }, 400);
    }
    button.querySelector('.arrow').textContent = !expanded ? '▲' : '▼';
  });
});
