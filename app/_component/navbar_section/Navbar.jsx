"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const getpath = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Image src={'/logo.jpeg'} className='rounded-4xl' height={60} width={60} alt='logo url' />
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link className={getpath === '/' ? "active-color" : ""} href="/">Home</Link></li>
          <li><Link className={getpath === '/about' ? "active-color" : ""} href="/about">About</Link></li>
          <li><Link className={getpath === '/service' ? "active-color" : ""} href="/service">Services</Link></li>
          <li><Link className={getpath === '/faqs' ? "active-color" : ""} href="/faqs">FAQS</Link></li>
          <li><Link className={getpath === '/contact' ? "active-color" : ""} href="/contact">Contact</Link></li>
           <li><Link className={getpath === '/admit-card' ? "active-color" : ""} href="/admit-card">Get Admit Card</Link></li>

        </ul>

        <div className="nav-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
}
