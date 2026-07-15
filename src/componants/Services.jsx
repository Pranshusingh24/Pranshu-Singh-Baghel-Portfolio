import React from 'react';
import { FaReact, FaNodeJs, FaMobileAlt, FaPalette, FaDatabase, FaCloud } from 'react-icons/fa';

const services = [
  { icon: <FaReact />, title: 'React.js Development', desc: 'Building scalable single-page applications with React.js, utilizing hooks, context API, and modern patterns.', color: 'text-[#61dafb] bg-[#61dafb]/10' },
  { icon: <FaNodeJs />, title: 'Next.js Applications', desc: 'Server-side rendered and statically generated web apps with Next.js for SEO-friendly, fast-loading apps.', color: 'text-gray-800 bg-gray-100' },
  { icon: <FaMobileAlt />, title: 'Responsive UI Development', desc: 'Pixel-perfect, mobile-first responsive interfaces using Tailwind CSS and custom CSS for all screen sizes.', color: 'text-amber-500 bg-amber-50' },
  { icon: <FaPalette />, title: 'UI/UX Implementation', desc: 'Transforming Figma and design mockups into interactive, accessible, and beautiful frontend components.', color: 'text-purple-500 bg-purple-50' },
  { icon: <FaDatabase />, title: 'State Management', desc: 'Complex state handling with Redux Toolkit, Zustand, React Query, and Context API for large-scale apps.', color: 'text-emerald-500 bg-emerald-50' },
  { icon: <FaCloud />, title: 'API Integration', desc: 'Seamless RESTful and GraphQL API integrations with proper error handling, loading states, and caching.', color: 'text-blue-500 bg-blue-50' },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-light">
      <div className="text-center mb-16">
        <h2 className="section-title">What I Do</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-lg">Specialized React.js frontend development services to bring your web applications to life.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 ${service.color}`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
            <p className="text-gray-500 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;