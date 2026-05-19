import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck, FiUser, FiMessageSquare,FiArrowUpRight  } from "react-icons/fi";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-5 h-5" />,
      title: "Email Us",
      value: "hello@eddva.com",
      description: "Response within 24 hours",
      color: "text-[#0066cc]",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM IST",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      title: "Visit Us",
      value: "Kolkata, West Bengal",
      description: "India",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 py-28 sm:py-26 px-6 sm:px-12 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:6rem_6rem]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-4xl mx-auto mb-16 sm:mb-20"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50 mb-8"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#0066cc] to-[#00a6ff] animate-pulse" />
            <span className="text-xs font-bold tracking-[0.2em] text-slate-600 uppercase">
              Get In Touch
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6"
          >
            Let's Start a
            <span className="block bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] bg-clip-text text-transparent">
              Conversation
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Have questions about our programs? Ready to level up your engineering career? We're here to help you succeed.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          
          {/* LEFT: Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/40 border border-slate-200">
              <motion.h3 
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2"
              >
                Send us a message
              </motion.h3>
              <motion.p 
                variants={itemVariants}
                className="text-slate-600 font-medium mb-8"
              >
                Fill out the form below and we'll get back to you within 24 hours.
              </motion.p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <FiUser className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <FiMail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="john@example.com"
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Subject */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="admissions">Admissions & Pricing</option>
                    <option value="curriculum">Curriculum Questions</option>
                    <option value="enterprise">Enterprise Solutions</option>
                    <option value="partnership">Partnership Opportunities</option>
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-4 left-4 pointer-events-none text-slate-400">
                      <FiMessageSquare className="w-5 h-5" />
                    </div>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      placeholder="Tell us about your goals and how we can help..."
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:border-transparent resize-none transition-all duration-300"
                    />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#0066cc] to-[#00a6ff] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-[#0066cc]/30 hover:shadow-xl hover:shadow-[#0066cc]/40 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10">Send Message</span>
                    <FiSend className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#004499] to-[#0066cc] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </motion.div>

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white">
                      <FiCheck className="w-5 h-5" />
                    </div>
                    <p className="text-emerald-700 font-medium">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* RIGHT: Contact Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Contact Info Cards */}
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-7 shadow-lg shadow-slate-200/40 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${info.color.split('-')[1]}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10 flex items-start gap-5">
                  <div className={`flex-shrink-0 p-4 rounded-xl ${info.bgColor} ${info.color} border border-white shadow-md group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    {info.icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">
                      {info.title}
                    </h4>
                    <p className="text-lg font-black text-slate-900 tracking-tight mb-1">
                      {info.value}
                    </p>
                    <p className="text-sm text-slate-500 font-medium">
                      {info.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

          </motion.div>

        </div>

        {/* Bottom CTA */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-20 sm:mt-28 text-center"
        >
          <div className="inline-block bg-white rounded-2xl p-8 sm:p-10 shadow-xl shadow-slate-200/40 border border-slate-200">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">
              Ready to transform your career?
            </h3>
            <p className="text-slate-600 font-medium mb-6 max-w-xl mx-auto">
              Join thousands of engineers who've accelerated their careers with Eddva.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all duration-300"
            >
              <span>Start Your Journey</span>
              <FiArrowUpRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div> */}

      </div>
    </section>
  );
}