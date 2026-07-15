import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // 1. Get your FREE access key from https://web3forms.com/
    // 2. Replace 'YOUR_ACCESS_KEY_HERE' with that key
    const formDataSet = new FormData(e.target);
    formDataSet.append("access_key", "YOUR_ACCESS_KEY_HERE");
    
    // Optional: Customize the email you receive
    formDataSet.append("subject", `New Portfolio Message from ${formData.name}`);
    formDataSet.append("from_name", "Pranshu's Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataSet
      });
      
      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000); // Hide success message after 5 seconds
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="text-center mb-16">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-lg">
          Have a React project in mind? Let's discuss how I can help bring your ideas to life.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* LEFT SIDE: Contact Info (Unchanged) */}
        <div className="lg:col-span-2 bg-dark rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-extrabold mb-4">Let's Talk</h3>
          <p className="text-gray-400 mb-8 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="space-y-6 mb-8">
            {[
              { icon: <FaEnvelope />, title: 'Email', val: 'pranshusingh883@email.com' },
              { icon: <FaPhone />, title: 'Phone', val: '+91 73897 23757' },
              { icon: <FaMapMarkerAlt />, title: 'Location', val: 'Vijay Nager, Indore, Madhya Pradesh, India' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary text-xl shrink-0">{item.icon}</div>
                <div>
                  <h4 className="text-xs text-gray-400 font-medium mb-1">{item.title}</h4>
                  <span className="font-semibold text-xs md:text-sm">{item.val}</span>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="flex items-center gap-3 p-4 bg-green-500/10 rounded-xl">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow"></span>
            <span className="font-semibold text-sm">Available for freelance work</span>
          </div> */}
        </div>

        {/* RIGHT SIDE: Updated Form (Web3Forms) */}
        <form 
          onSubmit={handleSubmit} 
          className="lg:col-span-3 bg-light rounded-2xl p-8 space-y-5 relative"
        >
          {/* Status Messages */}
          {status === 'success' && (
            <div className="absolute top-4 left-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl flex items-center gap-3 animate-fadeIn">
              <FaCheckCircle className="text-xl" />
              <span className="font-semibold">Message sent successfully! I'll get back to you soon.</span>
            </div>
          )}
          
          {status === 'error' && (
            <div className="absolute top-4 left-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl flex items-center gap-3 animate-fadeIn">
              <FaExclamationCircle className="text-xl" />
              <span className="font-semibold">Something went wrong. Please try again or email me directly.</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block font-semibold text-sm text-dark mb-2">Your Name</label>
              <input 
                type="text" 
                id="name"
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                required 
                disabled={status === 'sending'}
                className="w-full p-3.5 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors bg-white disabled:opacity-50" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold text-sm text-dark mb-2">Your Email</label>
              <input 
                type="email" 
                id="email"
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com" 
                required 
                disabled={status === 'sending'}
                className="w-full p-3.5 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors bg-white disabled:opacity-50" 
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block font-semibold text-sm text-dark mb-2">Subject</label>
            <input 
              type="text" 
              id="subject"
              name="subject" 
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Discussion" 
              required 
              disabled={status === 'sending'}
              className="w-full p-3.5 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors bg-white disabled:opacity-50" 
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold text-sm text-dark mb-2">Message</label>
            <textarea 
              id="message"
              name="message" 
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..." 
              rows="5" 
              required 
              disabled={status === 'sending'}
              className="w-full p-3.5 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors bg-white resize-none disabled:opacity-50"
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="btn-primary w-full text-center py-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message <FaPaperPlane className="text-sm" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;