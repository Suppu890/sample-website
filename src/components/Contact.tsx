import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Youtube, Linkedin, CheckCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 5000); // Reset after 5s
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to take the first step towards a bright career? Contact us today for admissions, counseling, or any queries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 h-full">
              <h3 className="text-2xl font-bold text-blue-950 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-amber-500 shrink-0 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950">Visit Us</h4>
                    <p className="text-gray-600 text-sm mt-1">101, Education Plaza, MP Nagar Zone 1, Bhopal, Madhya Pradesh 462011</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-amber-500 shrink-0 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950">Call/WhatsApp</h4>
                    <p className="text-gray-600 text-sm mt-1">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-amber-500 shrink-0 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950">Email Us</h4>
                    <p className="text-gray-600 text-sm mt-1">info@excellencecareeracademy.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-amber-500 shrink-0 shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950">Working Hours</h4>
                    <p className="text-gray-600 text-sm mt-1">Mon - Sat: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-blue-200">
                <h4 className="font-bold text-blue-950 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {[Facebook, Instagram, Youtube, Linkedin].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition-colors shadow-sm">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl relative overflow-hidden">
              <h3 className="text-2xl font-bold text-blue-950 mb-6">Admission Inquiry Form</h3>
              
              <AnimatePresence>
                {formStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8 rounded-2xl"
                  >
                    <CheckCircle className="text-green-500 w-20 h-20 mb-4" />
                    <h4 className="text-2xl font-bold text-blue-950 mb-2">Inquiry Submitted!</h4>
                    <p className="text-gray-600">Thank you for your interest. Our academic counselor will contact you within 24 hours.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Student Name *</label>
                    <input required type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
                    <input required type="tel" id="phone" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder="10-digit mobile number" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder="Your email address" />
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">Course Interested In *</label>
                    <select required id="course" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all">
                      <option value="">Select a course</option>
                      <option value="jee">JEE Main & Advanced</option>
                      <option value="neet">NEET Preparation</option>
                      <option value="cuet">CUET Preparation</option>
                      <option value="ssc">SSC Preparation</option>
                      <option value="banking">Banking Exams</option>
                      <option value="foundation">Foundation (Class 9-12)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Any Message or Query</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full py-4 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {formStatus === 'submitting' ? (
                    'Submitting...'
                  ) : (
                    <>Submit Inquiry <Send size={20} /></>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 rounded-2xl overflow-hidden h-[400px] border border-gray-200 shadow-sm relative bg-gray-100 flex items-center justify-center">
          {/* Real implementation would use iframe here */}
          <div className="text-center text-gray-500 flex flex-col items-center">
            <MapPin size={48} className="mb-2 text-gray-400" />
            <p className="font-medium text-lg">Interactive Google Map Embed</p>
            <p className="text-sm">Location: MP Nagar Zone 1, Bhopal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
