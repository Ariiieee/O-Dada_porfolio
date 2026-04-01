import React from 'react'
import { navLinks } from '../constants'
import { useState, useEffect } from 'react'


const NavBar = () => {
   /*keeping track the state of the navbar for when we scroll and it's no longer visible due to the background color of the sections when we scroll down
I will apply like a background so it is visible on top of these elements when i scroll down
*/
   const [scrolled, setScrolled] = useState(false);
   useEffect(() => {
      const handleScroll = () => {
         const isScrolled = window.scrollY > 10;
         setScrolled(isScrolled)
      }

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, [])


   return (
      <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
         <div className="inner">
            <a className="logo" href="#hero">
               O | Dada
            </a>

            <nav className="desktop">
               <ul>
                  {navLinks.map(({ link, name }) => (
                     <li key={name} className="group">
                        <a href={link}>
                           <span>{name}</span>
                           <span className="underline" />
                        </a>
                     </li>
                  ))}
               </ul>
            </nav>

            <a href="#contact" className="contact-btn group">
               <div className="inner">
                  <span>Contact Me</span>
               </div>

            </a>
         </div>

      </header>
   )
}

export default NavBar