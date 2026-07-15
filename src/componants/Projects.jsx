import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaWordpress, FaReact, FaNode } from 'react-icons/fa';

const projects = [
  { 
    id: 1, 
    title: 'Affiliate E-Commerce Store', 
    category: 'Full Stack', 
    desc: 'A comprehensive affiliate marketing e-commerce platform with product listings, affiliate link integration, user authentication, and admin dashboard for managing products and tracking conversions.', 
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT Auth', 'REST API'], 
    featured: true, 
    liveUrl: 'https://affiliateecommercestore.netlify.app/',
    githubUrl: 'https://github.com/PranshuSingh24',
    details: 'Built a full-featured e-commerce platform with secure user authentication, product catalog management, affiliate link tracking system, and responsive design. Implemented RESTful API architecture with JWT-based authentication.'
  },
  { 
    id: 2, 
    title: 'Blog Platform with Admin Panel', 
    category: 'React App', 
    desc: 'A dynamic blogging platform with a custom admin dashboard for content management, post creation, editing, and publishing. Features rich text editor, image uploads, and category management.', 
    tech: ['React.js', 'Context API', 'React Router', 'Firebase', 'Rich Text Editor'], 
    featured: true, 
    liveUrl: 'https://blogerpranshusite.netlify.app/',
    githubUrl: 'https://github.com/PranshuSingh24',
    details: 'Developed a complete blogging solution with admin sublimation capabilities. Features include WYSIWYG editor for content creation, media library management, SEO optimization, draft/publish workflow, and responsive blog post rendering.'
  },
  { 
    id: 3, 
    title: 'DataNitial - Headless CMS Platform', 
    category: 'Next.js', 
    desc: 'A modern headless CMS solution with WordPress backend and Next.js frontend. Delivers content through REST API with server-side rendering for optimal SEO and performance.', 
    tech: ['Next.js', 'React', 'WordPress REST API', 'Tailwind CSS', 'SSR', 'Headless CMS'], 
    featured: true, 
    // liveUrl: 'https://datanitial.com/',
    liveUrl: 'https://datanitial-nextjs-qun4.vercel.app/',
    githubUrl: 'https://github.com/PranshuSingh24',
    details: 'Architected a decoupled CMS system using WordPress as headless backend with Next.js frontend. Implemented server-side rendering (SSR) for better SEO, dynamic routing, optimized image delivery, and seamless content management through WordPress admin panel.'
  },
  { 
    id: 4, 
    title: 'E-Commerce Dashboard', 
    category: 'React App', 
    desc: 'Full-featured admin dashboard with real-time analytics, inventory management, order tracking, and interactive charts using Recharts.', 
    tech: ['React.js', 'Redux Toolkit', 'Tailwind', 'Recharts', 'Firebase'], 
    featured: false, 
    liveUrl: '#',
    githubUrl: '#',
    details: 'Comprehensive dashboard with sales analytics, inventory tracking, order management system, and data visualization components.'
  },
  { 
    id: 5, 
    title: 'Social Media Platform', 
    category: 'Full Stack', 
    desc: 'Twitter-like platform with real-time posts, likes, comments, user profiles, and a notification system.', 
    tech: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'], 
    featured: true, 
    liveUrl: '#',
    githubUrl: '#',
    details: 'Real-time social platform with WebSocket integration for instant updates, user authentication, post interactions, and notification system.'
  },
  { 
    id: 6, 
    title: 'Real-Time Chat Application', 
    category: 'Real-Time', 
    desc: 'Messaging app with private chats, group conversations, file sharing, and online status indicators.', 
    tech: ['React.js', 'Socket.io', 'Express', 'MongoDB', 'WebRTC'], 
    featured: true, 
    liveUrl: '#',
    githubUrl: '#',
    details: 'Real-time chat application with Socket.io for instant messaging, file sharing capabilities, user presence detection, and secure private/group conversations.'
  },
];

const categories = ['All', 'React App', 'Next.js', 'Full Stack', 'Real-Time'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="text-center mb-12">
        <h2 className="section-title">My Projects</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-lg">A collection of React-based applications showcasing my frontend development skills.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button 
            key={cat} 
            onClick={() => setActiveCategory(cat)} 
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
              activeCategory === cat 
                ? 'bg-primary text-white border-2 border-primary' 
                : 'bg-transparent text-gray-600 border-2 border-gray-200 hover:border-primary hover:text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
              project.featured ? 'border-primary shadow-md' : 'border-gray-100'
            }`}
          >
            {project.featured && (
              <span className="absolute top-3 right-4 bg-gradient-to-r from-primary to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                Featured
              </span>
            )}
            
            <div className="h-48 bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center relative group">
              <div className="text-6xl">
                {project.category === 'Next.js' ? <FaReact className="text-6xl text-[#00D8FF]" /> :
                 project.category === 'Full Stack' ? <FaNode className="text-6xl text-green-600" /> :
                 <FaReact className="text-6xl text-[#61dafb]" />}
              </div>
              <div className="absolute inset-0 bg-dark/85 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-colors">
                    <FaGithub />
                  </a>
                )}
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-colors">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>

            <div className="p-6">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">{project.category}</span>
              <h3 className="text-xl font-bold text-dark mt-2 mb-3">{project.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.desc}</p>
              
              {/* Technical Details Expandable */}
              <button 
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                className="text-primary text-sm font-semibold mb-3 hover:underline"
              >
                {selectedProject === project.id ? 'Hide Details' : 'View Technical Details'}
              </button>
              
              {selectedProject === project.id && (
                <div className="mb-4 p-3 bg-light rounded-lg text-sm text-gray-600 animate-fadeIn">
                  {project.details}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-50 text-secondary text-xs font-semibold rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-gray-100 flex gap-3">
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-dark rounded-lg text-dark font-semibold text-sm hover:bg-dark hover:text-white transition-all"
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-red-700 transition-all"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;