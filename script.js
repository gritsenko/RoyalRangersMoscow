// Small interactive behaviors: nav toggle, form handling, vCard download
document.addEventListener('DOMContentLoaded',function(){
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  toggle.addEventListener('click',()=>{nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex'});

  // form
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMessage');
  const clear = document.getElementById('clearForm');

  form.addEventListener('submit',function(e){
    e.preventDefault();
    const data = new FormData(form);
    // Fake send: show success message and reset
    msg.textContent = 'Спасибо! Сообщение отправлено (локальный демонстрационный режим).';
    form.reset();
  });
  clear.addEventListener('click',()=>{form.reset();msg.textContent='';});

  // vCard
  document.getElementById('downloadVcard').addEventListener('click',()=>{
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:Цпрские Охотники',
      'ORG:Цпрские Охотники',
      'TEL;WORK;VOICE:+70000000000',
      'EMAIL:info@cprhunters.example',
      'END:VCARD'
    ].join('\r\n');
    const blob = new Blob([vcard],{type:'text/vcard;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'cprskie_ohotniki.vcf'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
  });
});
