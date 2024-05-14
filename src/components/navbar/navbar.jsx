import { useState } from "react";
import React from 'react';
import "./navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
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
        {user ?
          <div className="user">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
            <span>Jhon Doe</span>
            <Link to="/profile">
              <div className="profile">
                <div className="notification">3</div>
                <span>Profile</span>
              </div>
            </Link>
          </div>
          : (<><a href='/'>Sign in</a>
            <a href='/' className='register'>Sign up</a></>)}
        <div className='menuIcon' >
          <img src="/menu.png" alt="menu-icon" onClick={() => setOpen((prev) => !prev)}></img>
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
