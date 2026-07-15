import React from 'react';

const skillCategories = [
  { title: 'Frontend Core', skills: [{ name: 'React.js', level: 95 }, { name: 'Next.js', level: 88 }, { name: 'JavaScript (ES6+)', level: 92 }, { name: 'TypeScript', level: 85 }] },
  { title: 'Styling & UI', skills: [{ name: 'Tailwind CSS', level: 92 }, { name: 'Bootstrap CSS', level: 85 }, { name: 'Styled Components', level: 80 }] },
  { title: 'State & Data', skills: [{ name: 'Redux Toolkit', level: 90 }, { name: 'React Query', level: 85 }, { name: 'Context API', level: 92 }] },
  //  { name: 'GraphQL', level: 72 }
  { title: 'Tools & Testing', skills: [{ name: 'Git / GitHub', level: 90 }, { name: 'Jest / React Testing', level: 80 }] },
  // , { name: 'Webpack / Vite', level: 78 }, { name: 'CI/CD', level: 70 }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-white">
      <div className="text-center mb-16">
        <h2 className="section-title">My Tech Stack</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-lg">Technologies and tools I use daily to build robust and scalable React applications.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-light p-8 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-dark mb-6 pb-3 border-b-2 border-primary inline-block">{category.title}</h3>
            <div className="space-y-5">
              {category.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-sm text-dark">{skill.name}</span>
                    <span className="font-bold text-sm text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;