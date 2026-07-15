import React from 'react';
import { FaReact, FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const socialLinks = [
  {
    icon: FaGithub,
    url: "https://github.com/PranshuSingh24",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/pranshu-singh24/",
  },
  {
    icon: FaTwitter,
    url: "https://x.com/PRANSHUSIN94716",
  },
];
const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-8 px-4 md:px-8 lg:px-[8%]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex flex-col">
                {/* <span className="font-extrabold text-sm tracking-wide">PRANSHU SINGH</span>
                <span className="text-[10px] text-primary font-bold tracking-widest">React Developer</span> */}
               <img
              src="footer-logo.png"
              alt="Logo"
              className="w-24 sm:w-40 md:w-40 lg:w-48 xl:w-56 h-auto"
            />  
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">Building modern, scalable web applications with React.js and cutting-edge frontend technologies.</p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/15 rounded-lg flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary hover:-translate-y-1 transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-1 after:bg-primary after:rounded-full">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {['Home', 'Services', 'Projects', 'Skills', 'Contact'].map((link) => <li key={link}><a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">{link}</a></li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-1 after:bg-primary after:rounded-full">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {['React Development', 'Next.js Apps', 'UI/UX Implementation', 'API Integration', 'Performance Optimization'].map((link) => <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-1 after:bg-primary after:rounded-full">Contact Info</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>pranshusingh883@email.com</li>
              <li>+91 73897 23757</li>
              <li>Vijay Nager, Indore, Madhya Pradesh</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2 flex-wrap">
            © {new Date().getFullYear()} Pranshu Singh. All Rights Reserved <FaReact className="text-[#61dafb] animate-spin-slow" /> React.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;