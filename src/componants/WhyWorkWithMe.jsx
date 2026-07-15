import React from 'react';
import { FaSearch, FaPaintBrush, FaCode, FaRocket, FaHeadset, FaCheckCircle } from 'react-icons/fa';

const reasons = [
  { icon: <FaSearch />, title: 'Research & Discovery', desc: 'Thorough analysis of project requirements, user needs, and technical feasibility before writing code.' },
  { icon: <FaPaintBrush />, title: 'Design & UI/UX Focus', desc: 'Pixel-perfect implementation with attention to micro-interactions, accessibility, and UX best practices.' },
  { icon: <FaCode />, title: 'Clean Code Development', desc: 'Writing maintainable, well-documented, and scalable React components following industry standards.' },
  { icon: <FaRocket />, title: 'Performance Optimization', desc: 'Ensuring fast load times and smooth animations through lazy loading, memoization, and code splitting.' },
  { icon: <FaHeadset />, title: 'Client Communication', desc: 'Regular updates, transparent progress reports, and a collaborative approach to exceed expectations.' },
  { icon: <FaCheckCircle />, title: 'Quality Assurance', desc: 'Rigorous testing across browsers and devices, ensuring bug-free delivery with comprehensive tests.' },
];

const WhyWorkWithMe = () => {
  return (
    <section id="why-me" className="section-padding bg-light">
      <div className="text-center mb-16">
        <h2 className="section-title">Why Work With Me</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-lg">Full-stack React expertise, performance-driven solutions, and client-focused support.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 text-center hover:-translate-y-2 hover:shadow-lg hover:border-primary transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-5 text-white text-2xl">
              {reason.icon}
            </div>
            <h3 className="text-lg font-bold text-dark mb-3">{reason.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyWorkWithMe;