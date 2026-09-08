const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const COMPANY_WHATSAPP = '5561985944946';
if (nav && !nav.querySelector('a[href="parceiros.html"]') && !document.body.classList.contains('landing-page')) {
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
  .home-main{margin:0 auto;max-width:980px;padding:92px 42px 70px}.home-intro{max-width:680px}.home-intro h1{font-family:var(--display);font-size:clamp(48px,7vw,82px);letter-spacing:-.08em;line-height:.94;margin:0}.home-intro h1 em,.service-intro h1 em{color:var(--yellow);font-style:normal}.home-intro>p:last-child{color:var(--muted);font-size:17px;line-height:1.65;margin:28px 0 0;max-width:550px}.home-choices{display:grid;gap:2px;margin-top:70px}.simple-choice{align-items:center;background:var(--panel);border:1px solid transparent;display:grid;gap:22px;grid-template-columns:55px 1fr 38px;padding:30px 28px;transition:background .2s,border-color .2s,transform .2s}.simple-choice:hover{background:#202020;border-color:var(--yellow);transform:translateX(5px)}.simple-choice:focus-visible{outline:2px solid var(--yellow);outline-offset:4px}.choice-index{color:var(--yellow);font-family:var(--display);font-size:14px}.simple-choice small{color:var(--yellow);font-size:10px;font-weight:700;letter-spacing:.16em}.simple-choice h2{font-family:var(--display);font-size:clamp(22px,3vw,34px);letter-spacing:-.06em;line-height:1.05;margin:9px 0 0}.simple-choice strong{color:var(--yellow);font-size:28px;text-align:right}.partner-link{color:#aaa;display:inline-flex;font-size:13px;gap:16px;margin-top:28px;padding-bottom:5px;border-bottom:1px solid #444}.partner-link:hover{color:var(--yellow);border-color:var(--yellow)}.simple-footer{margin-top:0}.simple-inner-main{margin:0 auto;max-width:880px;padding:54px 42px 95px}.simple-inner-main>.back-button{margin-bottom:58px}.service-intro{max-width:680px}.service-intro h1{font-family:var(--display);font-size:clamp(52px,7vw,82px);letter-spacing:-.08em;line-height:.94;margin:0}.service-intro>p:last-child{color:var(--muted);font-size:17px;line-height:1.65;margin:26px 0 0;max-width:600px}.partner-form-area{background:var(--panel);border:1px solid var(--line);margin-top:62px;padding:34px}.partner-form-area h2{font-family:var(--display);font-size:clamp(30px,4vw,44px);letter-spacing:-.07em;line-height:1;margin:0}.partner-form-area>p:not(.eyebrow){color:var(--muted);font-size:15px;line-height:1.6;margin:14px 0 28px;max-width:530px}.partner-form{background:transparent;border:0;padding:0}.form-field label span{color:#777;font-weight:400}.partner-form .button{margin-top:5px;width:100%}
  @media(max-width:760px){.partner-prompt{align-items:flex-start;display:block;padding:35px 22px}.partner-prompt .button{margin-top:24px}.partner-form-shell{padding:45px 22px 75px}.partner-form{padding:20px}.inner-hero-title{font-size:46px}.form-field input,.form-field select,.form-field textarea{font-size:16px}.home-main,.simple-inner-main{padding-left:22px;padding-right:22px;padding-top:58px}.home-intro h1,.service-intro h1{font-size:50px}.home-intro>p:last-child,.service-intro>p:last-child{font-size:16px}.home-choices{margin-top:48px}.simple-choice{grid-template-columns:32px 1fr 25px;padding:23px 18px}.simple-choice h2{font-size:23px}.simple-choice strong{font-size:22px}.simple-inner-main>.back-button{margin-bottom:42px}.partner-form-area{margin-top:48px;padding:22px}.partner-form-area h2{font-size:34px}}
  .landing-page .header{border-bottom:1px solid rgba(255,255,255,.06)}.landing-hero{align-items:center;display:grid;gap:70px;grid-template-columns:1.1fr .9fr;min-height:575px;padding:78px 42px 88px}.landing-hero h1{font-family:var(--display);font-size:clamp(52px,7vw,88px);letter-spacing:-.085em;line-height:.92;margin:0}.landing-hero h1 em,.path-card h2 em,.about-grid h2 em,.solutions-heading h2 em,.angel-copy h2 em,.partner-heading h2 em{color:var(--yellow);font-style:normal}.landing-lead{color:var(--muted);font-size:17px;line-height:1.6;margin:28px 0 30px;max-width:580px}.hero-ctas{display:flex;gap:10px}.hero-signal{align-items:center;display:flex;flex-direction:column;justify-content:center}.signal-orbit{align-items:center;border:1px solid #3a3a3a;border-radius:50%;display:flex;height:270px;justify-content:center;position:relative;width:270px}.signal-orbit:before,.signal-orbit:after,.signal-orbit span{border:1px solid #343434;border-radius:50%;content:'';position:absolute}.signal-orbit:before{inset:28px}.signal-orbit:after{inset:58px}.signal-orbit span:first-child{background:var(--yellow);border:0;height:7px;right:28px;top:43px;width:7px}.signal-orbit span:nth-child(2){border-color:var(--yellow);height:12px;left:45px;top:78px;width:12px}.signal-orbit b{color:var(--yellow);font-family:var(--display);font-size:52px;letter-spacing:-.14em}.hero-signal small{color:#777;font-size:9px;letter-spacing:.18em;line-height:1.5;margin-top:22px;text-align:center}.path-section,.about-section,.solutions-section,.partner-section{border-top:1px solid var(--line);padding-bottom:100px;padding-top:45px}.section-pad{padding-left:42px;padding-right:42px}.path-grid{display:grid;gap:2px;grid-template-columns:1fr 1fr;margin-top:42px}.path-card{background:var(--panel);min-height:355px;padding:26px;position:relative;transition:background .25s,transform .25s}.path-card:hover{background:#222;transform:translateY(-5px)}.path-card-light{background:#1c1c1c}.path-card-top{color:#777;display:flex;font-family:var(--display);font-size:11px;justify-content:space-between}.path-card-top strong{color:var(--yellow);font-size:23px}.path-card>small{color:var(--yellow);display:block;font-size:10px;font-weight:700;letter-spacing:.16em;margin-top:66px}.path-card h2{font-family:var(--display);font-size:39px;letter-spacing:-.08em;line-height:.98;margin:14px 0 18px}.path-card p{color:var(--muted);font-size:14px;line-height:1.55;margin:0;max-width:375px}.path-link{bottom:25px;color:#ddd;font-size:12px;position:absolute}.path-link b{color:var(--yellow);font-size:17px;margin-left:12px}.about-grid{display:grid;gap:110px;grid-template-columns:1.1fr .9fr;margin-top:58px}.about-grid h2,.solutions-heading h2,.angel-copy h2,.partner-heading h2{font-family:var(--display);font-size:52px;letter-spacing:-.08em;line-height:.96;margin:0}.about-copy{max-width:390px}.about-copy p{color:var(--muted);font-size:15px;line-height:1.7;margin:0 0 18px}.about-copy strong{border-left:2px solid var(--yellow);display:block;font-family:var(--display);font-size:17px;line-height:1.35;margin-top:26px;padding-left:17px}.solutions-heading{align-items:end;display:flex;gap:80px;justify-content:space-between;margin:57px 0 37px}.solutions-heading p,.partner-heading p{color:var(--muted);font-size:14px;line-height:1.6;max-width:275px}.solution-list{border-top:1px solid var(--line);display:grid;grid-template-columns:repeat(5,1fr)}.solution-item{border-bottom:1px solid var(--line);border-right:1px solid var(--line);display:grid;gap:13px;min-height:145px;padding:19px;transition:background .2s}.solution-item:first-child{border-left:1px solid var(--line)}.solution-item:hover{background:var(--panel)}.solution-item span{color:var(--yellow);font-family:var(--display);font-size:11px}.solution-item strong{font-family:var(--display);font-size:14px;line-height:1.15}.solution-item b{color:#777;font-size:20px;margin-top:auto}.angel-section{align-items:center;background:var(--yellow);color:var(--black);display:grid;gap:80px;grid-template-columns:.8fr 1.2fr;min-height:385px}.angel-section .eyebrow{color:var(--black)}.angel-section .eyebrow i{background:var(--black)}.angel-copy h2{font-size:56px}.angel-copy p:not(.eyebrow){font-size:15px;line-height:1.65;margin:25px 0 30px;max-width:510px}.angel-mark{font-size:170px;line-height:1;opacity:.18;text-align:center}.partner-heading{align-items:end;display:flex;gap:60px;justify-content:space-between;margin-top:55px}.partner-actions{display:flex;gap:10px;margin-top:38px}.partner-actions .button{min-width:220px}.landing-page .footer{border-top:0}.investor-main{margin:0 auto;max-width:980px;padding:60px 42px 105px}.investor-copy{max-width:690px;padding:45px 0}.investor-copy h1{font-family:var(--display);font-size:clamp(53px,7vw,88px);letter-spacing:-.085em;line-height:.92;margin:0}.investor-copy h1 em{color:var(--yellow);font-style:normal}.investor-copy>p:not(.eyebrow){color:var(--muted);font-size:17px;line-height:1.65;margin:28px 0 30px;max-width:580px}.investor-note{border-left:2px solid var(--yellow);color:#858585;font-size:13px;line-height:1.6;max-width:520px;padding-left:17px}@media(max-width:760px){.landing-hero{display:block;min-height:0;padding:58px 22px 70px}.landing-hero h1{font-size:51px}.landing-lead{font-size:16px}.hero-ctas{display:grid;grid-template-columns:1fr}.hero-signal{margin-top:62px}.signal-orbit{height:205px;width:205px}.signal-orbit b{font-size:40px}.section-pad{padding-left:22px;padding-right:22px}.path-section,.about-section,.solutions-section,.partner-section{padding-bottom:75px;padding-top:38px}.path-grid{grid-template-columns:1fr}.path-card{min-height:320px}.path-card>small{margin-top:45px}.path-card h2{font-size:35px}.about-grid{display:block;margin-top:43px}.about-grid h2,.solutions-heading h2,.partner-heading h2{font-size:43px}.about-copy{margin-top:33px}.solutions-heading,.partner-heading{align-items:flex-start;display:block;margin-top:43px}.solutions-heading p,.partner-heading p{margin-top:20px}.solution-list{grid-template-columns:1fr 1fr}.solution-item{min-height:125px}.solution-item:nth-child(3),.solution-item:nth-child(5){border-left:1px solid var(--line)}.solution-item:nth-child(5){grid-column:span 2}.angel-section{display:block;min-height:0;padding-bottom:75px;padding-top:70px}.angel-mark{font-size:90px;margin-bottom:30px;text-align:left}.angel-copy h2{font-size:48px}.partner-actions{display:grid;grid-template-columns:1fr}.partner-actions .button{width:100%}.investor-main{padding:45px 22px 75px}.investor-copy{padding:35px 0}.investor-copy h1{font-size:51px}}
  .path-card{border:1px solid #303030;border-radius:4px;cursor:pointer;isolation:isolate;overflow:hidden}.path-card:before{background:linear-gradient(110deg,rgba(255,196,0,.18),transparent 42%);content:'';inset:0;opacity:0;pointer-events:none;position:absolute;transition:opacity .3s ease}.path-card:after{background:var(--yellow);content:'';height:3px;left:0;position:absolute;right:0;top:0;transform:scaleX(0);transform-origin:left;transition:transform .35s ease}.path-card:hover,.path-card:focus-visible{background:#202020;border-color:#5a4a13;transform:translateY(-7px)}.path-card:hover:before,.path-card:focus-visible:before{opacity:1}.path-card:hover:after,.path-card:focus-visible:after{transform:scaleX(1)}.path-card:focus-visible{outline:2px solid var(--yellow);outline-offset:4px}.path-card-top,.path-card>small,.path-card h2,.path-card p,.path-link{position:relative;z-index:1}.path-card-top strong{align-items:center;border:1px solid rgba(255,196,0,.35);border-radius:50%;display:flex;height:38px;justify-content:center;transition:background .25s,color .25s,transform .25s;width:38px}.path-card:hover .path-card-top strong{background:var(--yellow);color:var(--black);transform:rotate(45deg)}.path-card h2{transition:transform .3s ease}.path-card:hover h2{transform:translateX(4px)}.path-link{align-items:center;background:rgba(255,255,255,.04);border:1px solid #3a3a3a;border-radius:2px;display:flex;padding:9px 11px;transition:background .25s,border-color .25s,color .25s}.path-card:hover .path-link{background:var(--yellow);border-color:var(--yellow);color:var(--black)}.path-card:hover .path-link b{color:var(--black)}
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
document.querySelectorAll('.footer-links').forEach((links) => {
  links.remove();
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
document.querySelectorAll('a[href*="wa.me/556198594946"]').forEach((link) => {
  link.href = link.href.replace('556198594946', COMPANY_WHATSAPP);
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
