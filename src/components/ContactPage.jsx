import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, ChevronRight } from 'lucide-react';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    if (!validateEmail(form.email)) {
      setStatus('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    try {
      const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
      const content = `**New Portfolio Contact Form Submission**\n\n**Name:** ${form.name}\n**Email:** ${form.email}\n**Subject:** ${form.subject}\n**Message:** ${form.message}`;
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
      });
      if (res.ok) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      setStatus('Failed to send message.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-300">
          Let's collaborate and bring innovative game concepts to life!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                <Mail className="text-blue-400" size={24} />
                <div>
                  <div className="text-gray-400 text-sm">Email</div>
                  <div className="text-white">harshmahatha1847@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                <MapPin className="text-purple-400" size={24} />
                <div>
                  <div className="text-gray-400 text-sm">Location</div>
                  <div className="text-white">New Delhi, India</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                <Linkedin className="text-blue-500" size={24} />
                <div>
                  <div className="text-gray-400 text-sm">LinkedIn</div>
                  <div className="text-white">www.linkedin.com/in/harshmahatha</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">What I'm Looking For</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <ChevronRight className="text-blue-400" size={16} />
                Game Development Opportunities
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <ChevronRight className="text-blue-400" size={16} />
                Creative Team Collaborations
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <ChevronRight className="text-blue-400" size={16} />
                Unity & Unreal Engine Projects
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <ChevronRight className="text-blue-400" size={16} />
                Front-End Development Roles
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <div className="block text-gray-300 text-sm mb-2">Name</div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <div className="block text-gray-300 text-sm mb-2">Email</div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <div className="block text-gray-300 text-sm mb-2">Subject</div>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Project collaboration"
                required
              />
            </div>
            <div>
              <div className="block text-gray-300 text-sm mb-2">Message</div>
              <textarea
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
              <div className={`text-center mt-2 font-semibold ${status.includes('success') ? 'text-green-400' : 'text-red-400'}`}>{status}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ContactPage;
