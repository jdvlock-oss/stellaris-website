'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header(){
  const [open,setOpen]=useState(false);
  return <header className="site-header"><div className="container nav-wrap">
    <Link className="brand" href="/" onClick={()=>setOpen(false)}><span className="brand-mark">✦</span><span>STELLARIS</span></Link>
    <button className="menu-button" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?'×':'☰'}</button>
    <nav className={open?'nav open':'nav'}>
      <Link href="/#services" onClick={()=>setOpen(false)}>What we do</Link>
      <Link href="/#approach" onClick={()=>setOpen(false)}>How we work</Link>
      <Link href="/assessment" onClick={()=>setOpen(false)}>AI assessment</Link>
      <Link href="/insights" onClick={()=>setOpen(false)}>Insights</Link>
      <Link className="button button-small" href="/#contact" onClick={()=>setOpen(false)}>Start a conversation</Link>
    </nav>
  </div></header>
}
