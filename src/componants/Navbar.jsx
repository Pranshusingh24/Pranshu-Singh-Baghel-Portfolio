import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaReact } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'Projects', to: 'projects' },
    { name: 'Why Me', to: 'why-me' },
    { name: 'Skills', to: 'skills' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-1 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex flex-col">
            <img
              src="PS-portfolio_logo.png"
              alt="Logo"
              className="w-24 sm:w-40 md:w-40 lg:w-48 xl:w-56 h-auto"
            />            
            {/* <span className="font-extrabold text-dark text-sm tracking-wide">PRANSHU SINGH</span>
            <span className="text-[10px] text-primary font-bold tracking-widest">REACT DEVELOPER</span> */}
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.to} smooth={true} duration={500} className="text-gray-600 font-medium hover:text-primary cursor-pointer transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        <Link to="contact" smooth={true} duration={500} className="hidden md:inline-block px-6 py-2 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all">
          Contact
        </Link>

        <button className="md:hidden text-2xl text-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-5 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} smooth={true} duration={500} className="text-gray-700 font-medium py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}
          <Link to="contact" smooth={true} duration={500} className="text-primary font-bold py-2" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;