import React, { useState } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  { name: 'Rahul Sharma', role: 'CEO, TechStart Inc.', image: '👨‍', rating: 5, text: 'Pranshu delivered an exceptional React dashboard for our analytics platform. His attention to detail and clean code made the project a huge success.' },
  { name: 'Priya Patel', role: 'Product Manager, DesignHub', image: '‍💻', rating: 5, text: 'Working with Pranshu was a fantastic experience. He transformed our Figma designs into a beautiful, responsive React application.' },
  { name: 'Amit Kumar', role: 'Founder, ShopEasy', image: '👨‍🔬', rating: 5, text: 'The e-commerce platform Pranshu built for us is fast, reliable, and scalable. His expertise in React and Next.js really showed.' },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-light">
      <div className="text-center mb-16">
        <h2 className="section-title">Client Reviews</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-lg">What my clients say about working with me on their React projects.</p>
      </div>

      <div className="max-w-4xl mx-auto flex items-center justify-center gap-4">
        <button onClick={prev} className="w-12 h-12 xm:hidden rounded-full border-2 border-gray-200 bg-white flex items-center justify-center hover:border-primary hover:text-primary transition-all shrink-0"><FaChevronLeft /></button>
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center flex-1 relative">
          <FaQuoteLeft className="text-4xl text-primary/20 mx-auto mb-4" />
          <div className="flex justify-center gap-1 mb-6 text-amber-400">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => <FaStar key={i} />)}
          </div>
          <p className="text-gray-600 text-lg italic leading-relaxed mb-8">"{testimonials[currentIndex].text}"</p>
          <div className="flex items-center justify-center gap-4">
            <span className="text-4xl">{testimonials[currentIndex].image}</span>
            <div className="text-left">
              <h4 className="font-bold text-dark">{testimonials[currentIndex].name}</h4>
              <span className="text-sm text-gray-500">{testimonials[currentIndex].role}</span>
            </div>
          </div>
        </div>

        <button onClick={next} className="w-12 h-12 xm:hidden rounded-full border-2 border-gray-200 bg-white flex items-center justify-center hover:border-primary hover:text-primary transition-all shrink-0"><FaChevronRight /></button>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => setCurrentIndex(i)} className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'}`}></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;