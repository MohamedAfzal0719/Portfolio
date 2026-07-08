"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SOCIALS = [
  {
    icon: <FaGithub size={24} />,
    title: "GitHub",
    info: "Explore my code",
    href: "https://github.com/MohamedAfzal0719",
  },
  {
    icon: <FaLinkedin size={24} />,
    title: "LinkedIn",
    info: "Professional network",
    href: "https://www.linkedin.com/in/mohamed-afzal-6732a7202/",
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    info: "afzalmohamed098@gmail.com",
    href: "mailto:afzalmohamed098@gmail.com",
  }
];

export default function Contact() {
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const emailBody = `Hi Afzal,\n\n${message}\n\nBest regards,\n${name}\nContact: ${email}`;
    const mailtoUrl = `mailto:afzalmohamed098@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Programmatically open mail client in new window fallback
    const mailLink = document.createElement("a");
    mailLink.href = mailtoUrl;
    mailLink.target = "_blank";
    mailLink.click();

    // Visual feedback
    setShowSuccessToast(true);
    e.target.reset();

    // Auto-hide success toast after 4 seconds
    setTimeout(() => {
      setShowSuccessToast(false);
    }, 4000);
  };

  return (
    <section id="contact" className="section relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-slate-100">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Ready to build intelligent solutions? Let's discuss your next project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            {SOCIALS.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: 0.1 * idx }}
                className="flex items-center gap-6 bg-white dark:bg-slate-900/50 dark:backdrop-blur-xl p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-orange-500/30 dark:hover:border-orange-500/30 hover:shadow-md transition-all group"
              >
                <div className="h-14 w-14 rounded-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:bg-orange-500/10 transition-colors">
                  {social.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{social.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400">{social.info}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="lg:col-span-3 bg-white dark:bg-slate-900/50 dark:backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-sm p-8 md:p-10 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-400 ml-1">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="John Doe" 
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    required 
                    suppressHydrationWarning
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-400 ml-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="john@example.com" 
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    required 
                    suppressHydrationWarning
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400 ml-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Enterprise AI Project" 
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  required 
                  suppressHydrationWarning
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400 ml-1">Message</label>
                <textarea 
                  rows={5}
                  name="message"
                  placeholder="Tell me about your project..." 
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none"
                  required 
                  suppressHydrationWarning
                />
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(249,115,22,0.2)]"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {showSuccessToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 bg-emerald-500 text-white px-5 py-4 rounded-2xl shadow-lg border border-emerald-400 font-semibold text-sm"
          >
            <CheckCircle size={18} className="shrink-0" />
            <span>Mail client opened with your draft!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
