import { useState } from "react";
import React from 'react';
import "./navbar.scss";

export default function Navbar() {
  const [open,setOpen]=useState(false);
  return (
    <nav>
      <div className='left'>
        <a href='/' className='logo'>
          <img src='/logo.png' alt='app-logo'></img>
          <span>Estate</span>
        </a>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
        <a href='/'>Agents</a>
      </div>
      <div className='right'>
        <a href='/'>Sign in</a>
        <a href='/' className='register'>Sign up</a>
        <div className='menuIcon' >
          <img src="/menu.png" alt="menu-icon" onClick={()=>setOpen((prev)=>!prev)}></img>
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
          <a href='/'>Agents</a>
          <a href='/'>Sign in</a>
          <a href='/'>Sign up</a>
        </div>
      </div>
    </nav>
  )
}
