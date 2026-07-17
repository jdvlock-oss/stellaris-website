'use client';
import { useState } from 'react';
export default function ContactForm(){
 const [status,setStatus]=useState('');
 async function submit(e){e.preventDefault();setStatus('Sending…');const data=Object.fromEntries(new FormData(e.currentTarget));
 try{const r=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});const j=await r.json();if(!r.ok)throw new Error(j.error||'Unable to send');setStatus('Thanks. Your message has been sent.');e.currentTarget.reset();}catch(err){setStatus(err.message);}}
 return <form className="contact-form" onSubmit={submit}><div className="field-row"><label>Name<input name="name" required /></label><label>Work email<input name="email" type="email" required /></label></div><label>Company<input name="company" /></label><label>What are you trying to accomplish?<textarea name="message" rows="5" required /></label><input className="honeypot" name="website" tabIndex="-1" autoComplete="off"/><button className="button" type="submit">Send message</button><p className="form-status" aria-live="polite">{status}</p></form>
}
