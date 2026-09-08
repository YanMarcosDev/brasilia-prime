const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const interactionStyles = document.createElement('style');
interactionStyles.textContent = `
  .header{position:sticky;top:0;z-index:20;background:rgba(11,11,11,.92);backdrop-filter:blur(12px);transition:box-shadow .25s ease,background .25s ease}
  .header.is-scrolled{background:rgba(11,11,11,.98);box-shadow:0 1px 0 rgba(255,255,255,.08)}
  .choice-card{cursor:pointer}
  .choice-card:focus-within{outline:1px solid var(--yellow);outline-offset:3px}
  .button:focus-visible,.nav a:focus-visible,.brand:focus-visible,.menu-toggle:focus-visible{outline:2px solid var(--yellow);outline-offset:4px}
  @media(max-width:760px){.header{position:sticky}.nav.open{box-shadow:0 14px 24px rgba(0,0,0,.3)}.choice-card{min-height:410px}.choice-card .button{width:100%}.footer-contact{width:auto!important}}
  .back-button{align-items:center;background:var(--yellow);border:1px solid var(--yellow);color:var(--black);display:inline-flex;font-size:11px;font-weight:700;gap:10px;margin-bottom:34px;padding:10px 13px;transition:filter .2s,transform .2s}
  .back-button:hover{background:var(--yellow);border-color:var(--yellow);color:var(--black);filter:brightness(1.1);transform:translateY(-2px)}
  .back-button:focus-visible{outline:2px solid var(--yellow);outline-offset:4px}
`;
document.head.appendChild(interactionStyles);

const header = document.querySelector('.header');
const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

if (document.body.classList.contains('inner-page')) {
  const breadcrumb = document.querySelector('.breadcrumb');
  if (breadcrumb) {
    const backButton = document.createElement('button');
    backButton.className = 'back-button';
    backButton.type = 'button';
    backButton.textContent = '← Voltar para início';
    backButton.addEventListener('click', () => {
      if (window.history.length > 1) window.history.back();
      else window.location.href = 'index.html';
    });
    breadcrumb.before(backButton);
  }
}

document.querySelectorAll('.brand img').forEach((image) => {
  image.alt = 'BRASÍLIA PRIME ASSESSORIA';
  image.style.background = 'transparent';
  image.style.display = 'block';
  image.style.height = '46px';
  image.style.objectFit = 'cover';
  image.style.objectPosition = 'left center';
  image.style.width = '84px';
  image.parentElement.style.gap = '10px';
  const name = image.parentElement.querySelector('span');
  if (name) {
    name.style.display = 'flex';
    name.style.flexDirection = 'column';
    name.style.gap = '2px';
    name.style.lineHeight = '1';
    name.querySelector('b')?.style.setProperty('color', '#fff');
    name.querySelector('small')?.style.setProperty('color', '#ffc400');
  }
});
document.querySelectorAll('.footer-contact').forEach((contact) => {
  contact.style.gap = '12px';
  contact.style.lineHeight = '1.45';
  contact.style.width = '300px';
  const label = contact.querySelector('small');
  const phone = contact.querySelector('a');
  const address = contact.querySelector('span');
  if (label) {
    label.style.color = '#ffc400';
    label.style.fontSize = '10px';
    label.style.fontWeight = '700';
    label.style.letterSpacing = '.16em';
  }
  if (phone) {
    phone.style.color = '#fff';
    phone.style.fontSize = '16px';
    phone.style.fontWeight = '700';
  }
  if (address) {
    address.style.color = '#bdbdbd';
    address.style.fontSize = '13px';
    address.style.lineHeight = '1.6';
  }
});
document.querySelectorAll('img[src="logo/logo-bp.png"]').forEach((image) => {
  image.src = 'logo/logo.png';
});
document.querySelectorAll('.footer-brand p').forEach((description) => {
  description.remove();
});

document.querySelectorAll('.choice-card').forEach((card) => {
  const link = card.querySelector('a[href]');
  if (!link) return;
  card.tabIndex = 0;
  card.setAttribute('role', 'link');
  const goToLink = () => { window.location.href = link.href; };
  card.addEventListener('click', (event) => {
    if (!event.target.closest('a')) goToLink();
  });
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      goToLink();
    }
  });
});

document.querySelectorAll('a[href*="wa.me/556185944946"]').forEach((link) => {
  link.href = link.href.replace('556185944946', '5561985944946');
  link.textContent = link.textContent.replace('+55 61 8594-4946', '+55 61 98594-4946');
});
document.querySelectorAll('[href^="mailto:"], [class*="social"], [class*="Social"]').forEach((element) => {
  element.hidden = true;
});
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  }
}), { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 45, 280)}ms`;
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.focus();
  }
});
