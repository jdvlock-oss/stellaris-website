
const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.primary-nav');
if(menuToggle&&nav){
  menuToggle.addEventListener('click',()=>{const isOpen=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(isOpen));});
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));
}
document.querySelectorAll('.current-year').forEach(el=>el.textContent=new Date().getFullYear());

const form=document.getElementById('contact-form');
if(form){
  const button=document.getElementById('submit-button');
  const status=document.getElementById('form-status');
  form.addEventListener('submit',async(event)=>{
    event.preventDefault();
    status.textContent=''; status.className='form-status';
    if(!form.checkValidity()){form.reportValidity();return;}
    button.disabled=true; button.textContent='Sending…';
    const payload=Object.fromEntries(new FormData(form).entries());
    payload.consent=Boolean(payload.consent);
    try{
      const response=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
      const result=await response.json().catch(()=>({}));
      if(!response.ok) throw new Error(result.error||'The message could not be sent.');
      form.reset();
      status.textContent='Thank you. Your inquiry has been sent.';
      status.className='form-status success';
      if(window.va) window.va('event',{name:'contact_form_submitted'});
    }catch(error){
      status.textContent=error.message||'The message could not be sent. Please email hello@stellarisai.com.';
      status.className='form-status error';
    }finally{
      button.disabled=false; button.textContent='Send inquiry';
    }
  });
}
