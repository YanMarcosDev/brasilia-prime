const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const COMPANY_WHATSAPP = '5561985944946';
if (nav && !nav.querySelector('a[href="parceiros.html"]')) {
  const partnerLink = document.createElement('a');
  partnerLink.href = 'parceiros.html';
  partnerLink.textContent = 'Seja parceiro';
  nav.appendChild(partnerLink);
}
if (!document.querySelector('link[rel="icon"]')) {
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/png';
  favicon.href = 'logo/logo.png';
  document.head.appendChild(favicon);
}
const interactionStyles = document.createElement('style');
interactionStyles.textContent = `
  body{font-size:16px}
  .eyebrow,.section-label,.breadcrumb,.art-top,.art-bottom,.panel-header,.footer-contact small{font-size:10px}
  .lead{font-size:16px}
  .choice-card p:not(.choice-tag),.overview-intro p,.service-list p{font-size:14px}
  .choice-tag{font-size:10px}
  .choice-card h2{font-size:clamp(39px,4vw,46px)}
  .data-art>strong{font-size:88px}
  .editais span,.editais small,.data-art>small{font-size:10px}
  .how-step span,.service-list strong,.benefit-row strong{font-size:16px}
  .how-step b,.service-list span,.benefit-row b{font-size:13px}
  .footer-contact a{font-size:17px}
  .footer-contact span{font-size:13px}
  .footer-bottom{font-size:11px}
  .header{position:sticky;top:0;z-index:20;background:rgba(11,11,11,.92);backdrop-filter:blur(12px);transition:box-shadow .25s ease,background .25s ease}
  .header.is-scrolled{background:rgba(11,11,11,.98);box-shadow:0 1px 0 rgba(255,255,255,.08)}
  .choice-card{cursor:pointer}
  .choice-card:focus-within{outline:1px solid var(--yellow);outline-offset:3px}
  .button:focus-visible,.nav a:focus-visible,.brand:focus-visible,.menu-toggle:focus-visible{outline:2px solid var(--yellow);outline-offset:4px}
  @media(max-width:760px){.header{position:sticky}.nav.open{box-shadow:0 14px 24px rgba(0,0,0,.3)}.choice-card{min-height:410px}.choice-card .button{width:100%}.choice-card p:not(.choice-tag),.overview-intro p,.service-list p{font-size:13px}.choice-card h2{font-size:38px}.data-art>strong{font-size:70px}.footer-contact{width:auto!important}.footer-contact a{font-size:16px}.footer-contact span{font-size:13px}.footer-bottom{font-size:10px}}
  .back-button{align-items:center;background:var(--yellow);border:1px solid var(--yellow);color:var(--black);display:inline-flex;font-size:11px;font-weight:700;gap:10px;margin-bottom:34px;padding:10px 13px;transition:filter .2s,transform .2s}
  .back-button:hover{background:var(--yellow);border-color:var(--yellow);color:var(--black);filter:brightness(1.1);transform:translateY(-2px)}
  .back-button:focus-visible{outline:2px solid var(--yellow);outline-offset:4px}
  .partner-prompt{align-items:center;background:var(--panel);border-top:1px solid var(--line);display:flex;gap:30px;justify-content:space-between;padding:42px}
  .partner-prompt h2{font-family:var(--display);font-size:28px;letter-spacing:-.05em;margin:0}
  .partner-prompt p{color:var(--muted);font-size:13px;margin:7px 0 0}
  .partner-form-shell{margin:0 auto;max-width:780px;padding:65px 42px 100px}
  .inner-hero-title{font-family:var(--display);font-size:clamp(46px,6vw,72px);letter-spacing:-.08em;line-height:.96;margin:0}
  .partner-form{background:var(--panel);border:1px solid var(--line);display:grid;gap:18px;padding:28px}
  .form-field{display:flex;flex-direction:column;gap:7px}.form-field label{color:#d8d8d8;font-size:12px;font-weight:600}.form-field input,.form-field select,.form-field textarea{background:#101010;border:1px solid #393939;color:#fff;font:inherit;font-size:13px;padding:12px 13px;width:100%}.form-field textarea{min-height:105px;resize:vertical}.form-field input:focus,.form-field select:focus,.form-field textarea:focus{border-color:var(--yellow);outline:2px solid rgba(255,196,0,.18)}
  .form-success{background:rgba(255,196,0,.12);border:1px solid var(--yellow);color:#fff;font-size:14px;line-height:1.6;padding:18px}.form-success strong{color:var(--yellow);display:block;font-family:var(--display);font-size:18px;margin-bottom:5px}
  @media(max-width:760px){.partner-prompt{align-items:flex-start;display:block;padding:35px 22px}.partner-prompt .button{margin-top:24px}.partner-form-shell{padding:45px 22px 75px}.partner-form{padding:20px}.inner-hero-title{font-size:46px}.form-field input,.form-field select,.form-field textarea{font-size:16px}}
`;
document.head.appendChild(interactionStyles);

const header = document.querySelector('.header');
const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

if (document.body.classList.contains('inner-page')) {
  const prompt = document.createElement('section');
  prompt.className = 'partner-prompt';
  prompt.innerHTML = '<div><h2>Quer fazer parte da nossa rede de parceiros?</h2><p>Conte um pouco sobre sua empresa e vamos avaliar uma possível parceria.</p></div><a class="button button-yellow" href="parceiros.html">Quero ser parceiro <span>↗</span></a>';
  document.querySelector('footer')?.before(prompt);
}

const partnerForm = document.querySelector('.partner-form');
if (partnerForm) {
  const nameField = partnerForm.querySelector('[name="nome"]');
  const nameWrapper = nameField?.closest('.form-field');
  if (nameField && nameWrapper && !partnerForm.querySelector('[name="empresa"]')) {
    const nameLabel = nameWrapper.querySelector('label');
    if (nameLabel) nameLabel.textContent = 'Nome';
    const companyWrapper = document.createElement('div');
    companyWrapper.className = 'form-field';
    companyWrapper.innerHTML = '<label for="partner-company">Nome da empresa</label><input id="partner-company" name="empresa" required />';
    nameWrapper.after(companyWrapper);
  }
  if (partnerForm.dataset.segment === 'market') {
    partnerForm.elements.tipo?.closest('.form-field')?.remove();
  } else {
    const descriptions = partnerForm.querySelectorAll('textarea');
    const companyDescription = descriptions[descriptions.length - 1];
    if (companyDescription) {
      companyDescription.name = 'empresa_info';
      companyDescription.id = 'bids-about';
    }
  }
  const submitButton = partnerForm.querySelector('button[type="submit"]');
  if (submitButton) submitButton.innerHTML = 'Enviar pré-cadastro pelo WhatsApp <span>↗</span>';
}
if (partnerForm && !partnerForm.querySelector('[name="empresa"]')) {
  const nameInput = partnerForm.querySelector('[name="nome"]');
  const nameWrapper = nameInput?.closest('.form-field');
  if (nameWrapper) {
    const label = nameWrapper.querySelector('label');
    if (label) label.textContent = 'Nome';
    nameWrapper.insertAdjacentHTML('afterend', '<div class="form-field"><label for="partner-company">Nome da empresa</label><input id="partner-company" name="empresa" required /></div>');
  }
}
partnerForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!partnerForm.reportValidity()) return;
  const value = (name) => partnerForm.elements[name]?.value.trim() || 'Não informado';
  const segment = partnerForm.dataset.segment;
  const message = segment === 'market'
    ? `Olá! Gostaria de me cadastrar como parceiro na área de Mercado Livre.\n\nNome: ${value('nome')}\nEmpresa: ${value('empresa')}\nWhatsApp: ${value('whatsapp')}\nE-mail: ${value('email')}\nCidade/Estado: ${value('localidade')}\nO que vendo: ${value('produtos')}\nLink: ${value('link')}\nSobre minha operação: ${value('operacao')}\n\nAguardo o retorno da equipe.`
    : `Olá! Gostaria de me cadastrar como parceiro na área de Licitações.\n\nNome: ${value('nome')}\nEmpresa: ${value('empresa')}\nWhatsApp: ${value('whatsapp')}\nE-mail: ${value('email')}\nCidade/Estado: ${value('localidade')}\nSegmento: ${value('segmento')}\nProdutos/serviços: ${value('fornecimento')}\nCNPJ: ${value('cnpj')}\nSite: ${value('link')}\nSobre a empresa: ${value('empresa_info')}\n\nAguardo o retorno da equipe.`;
  const whatsappUrl = `https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});

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
