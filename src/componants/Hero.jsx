import React from 'react';
import { Link } from 'react-scroll';
import { FaReact, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-12 relative overflow-hidden">
      {/* Background Blur Effect */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto py-7 px-4 md:px-1 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-5 py-2 border border-primary/20 rounded-full mb-6 bg-white/50 backdrop-blur-sm">
            <FaReact className="text-[#61dafb] animate-spin-slow w-5 h-5"/>
            <span className="font-semibold text-sm text-primary">Frontend Developer</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-dark leading-tight mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-primary to-red-500 bg-clip-text text-transparent">Pranshu Singh</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-6">
            I build <span className="text-primary">modern web applications</span> with React.js
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            A passionate React.js frontend developer specializing in building scalable, performant, and user-friendly web applications. I transform designs into pixel-perfect, responsive interfaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <Link to="projects" smooth={true} duration={500} className="btn-primary text-center cursor-pointer">View My Work</Link>
            <Link to="contact" smooth={true} duration={500} className="btn-secondary text-center cursor-pointer">Get In Touch</Link>
          </div>

          {/* Social Icons (Uncomment to enable) */}
          {/* <div className="flex gap-4 justify-center lg:justify-start">
            {[FaGithub, FaLinkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-11 h-11 border-2 border-gray-200 rounded-xl flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary hover:-translate-y-1 transition-all">
                <Icon className="text-xl" />
              </a>
            ))}
          </div> */}
        </div>

        {/* Right Side: Code Block Visual */}
        <div className="flex-1 flex justify-center w-full max-w-md lg:max-w-none">
          <div className="relative w-full max-w-[500px] aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl rotate-6 opacity-10"></div>
            <div className="relative bg-dark rounded-2xl p-6 shadow-2xl h-full flex flex-col">
              <div className="flex gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
              </div>
              <pre className="text-[#a8d8a8] font-mono text-xs md:text-sm leading-relaxed overflow-hidden whitespace-pre-wrap">
                {`const Developer = {
                  name: "Pranshu Singh",
                  role: "Frontend Dev",
                  skills: [
                    "React.js",
                    "Next.js",
                    "TypeScript",
                    "Redux",
                    "Tailwind CSS"
                  ],
                  passion: "Building UIs",
                  available: true
                };`}
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Stats Section Container */}
                      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full mt-6 pt-10 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                          { num: '3+', label: 'Years Experience' },
                          { num: '25+', label: 'Projects Completed' },
                          { num: '15+', label: 'Happy Clients' },
                          { num: '100%', label: 'Client Satisfaction' },
                        ].map((stat, i) => (
                          <div key={i}>
                            <span className="block text-2xl md:text-3xl font-extrabold text-dark">{stat.num}</span>
                            <span className="text-sm text-gray-500 font-medium">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  );
                };

export default Hero;