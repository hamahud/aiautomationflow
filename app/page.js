"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600">
              AI Automation Flow
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
              <a href="#work" className="text-gray-600 hover:text-blue-600">Our Work</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Build Apps & Automations
            <span className="text-blue-600 block">For Your Business</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Simple apps for $1,000. Complex apps for $5,000. One month delivery with unlimited revisions.
            We also build websites, automations, and handle your marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started Today
            </a>
            <a
              href="#work"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">App Development</h3>
              <p className="text-gray-600">Simple and complex apps tailored to your business needs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Automation</h3>
              <p className="text-gray-600">Streamline your workflows with powerful automations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-2">Website Building</h3>
              <p className="text-gray-600">Professional websites that convert visitors to customers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">Marketing</h3>
              <p className="text-gray-600">SEO, Meta ads, and Google ads to grow your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-gray-200 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Simple Apps</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">$1,000</div>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Basic functionality</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Mobile responsive</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>One month delivery</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Unlimited revisions</li>
              </ul>
            </div>
            <div className="border-2 border-blue-600 rounded-lg p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Complex Apps</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">$5,000</div>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Advanced features</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Database integration</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>User authentication</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>One month delivery</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Unlimited revisions</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">All projects include unlimited revisions and one month delivery guarantee</p>
          </div>
        </div>
      </section>

      {/* Work Showcase */}
      <section id="work" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-48"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
                <p className="text-gray-600">Complete online store with payment integration and inventory management</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-48"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Task Management App</h3>
                <p className="text-gray-600">Streamlined project management with team collaboration features</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-48"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Business Automation</h3>
                <p className="text-gray-600">Custom workflow automation reducing manual tasks by 80%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4">AI Automation Flow</div>
          <p className="text-gray-400 mb-6">Building the future of business automation</p>
          <div className="border-t border-gray-800 pt-8 mt-8">
            <p className="text-gray-400">&copy; 2025 AI Automation Flow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}