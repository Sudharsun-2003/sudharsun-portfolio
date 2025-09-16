import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiClock, 
  FiUser, 
  FiMessageSquare, 
  FiSend,
  FiZap,
  FiGlobe,
  FiCheck,
  FiAlertCircle,
  FiChevronDown
} from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Auto-clear status messages after 5s
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const serviceId = 'service_pvladaq';
      const templateId = 'template_ygapooq'; 
      const publicKey = 'iR6MwZW1jgp6ht3iV';

      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        service: formData.service,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', service: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail className="text-xl" />,
      label: "Email",
      value: "sudharsunsakthi@gmail.com",
      color: "blue-400"
    },
    {
      icon: <FiPhone className="text-xl" />,
      label: "Phone",
      value: "+91 6380619680",
      color: "green-400"
    },
    {
      icon: <FiMapPin className="text-xl" />,
      label: "Location",
      value: "Chennai, Tamil Nadu",
      color: "purple-400"
    },
    {
      icon: <FiClock className="text-xl" />,
      label: "Timezone",
      value: "IST (UTC+5:30)",
      color: "orange-400"
    }
  ];

  const serviceOptions = [
    "Web Development",
    "Full Stack Development", 
    "Frontend Development",
    "Backend Development",
    "API Development",
    "Website Maintenance",
    "Consultation",
    "Other"
  ];

  return (
    <section id="contact" className="relative py-10">
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-500 via-slate-300 to-gray-500 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold">Have a project in mind or an opportunity to collaborate?</span> I'd love to hear from you! 
            Whether it's about building scalable web applications, creating modern designs, or discussing innovative ideas, feel free to reach out.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <FiMessageSquare className="text-2xl text-blue-400" aria-label="Message icon" />
              <h3 className="text-2xl font-bold text-white">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Your Name <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" aria-label="Name icon" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" aria-label="Email icon" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Service Field */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Service Required <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-purple-400 transition-all duration-300 appearance-none cursor-pointer hover:bg-white/10"
                  >
                    <option value="" className="bg-slate-900 text-gray-300">Select a service</option>
                    {serviceOptions.map((service, index) => (
                      <option key={index} value={service} className="bg-slate-900 text-white py-2 hover:bg-slate-800">
                        {service}
                      </option>
                    ))}
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Your Query/Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share the details of your project or question..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300">
                  <FiCheck className="text-lg" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300">
                  <FiAlertCircle className="text-lg" />
                  <span>Failed to send message. Please try again or contact directly.</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:shadow-lg hover:shadow-purple-500/25'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="text-lg group-hover:translate-x-1 transition-transform duration-300" aria-label="Send message" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Contact Info Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <FiPhone className="text-2xl text-green-400" aria-label="Phone icon" />
                <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <div className={`text-${info.color}`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Let's Connect Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <FiGlobe className="text-2xl text-purple-400" aria-label="Globe icon" />
                <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm always open to exciting opportunities, freelance projects, or meaningful collaborations. 
                Drop me a message, and let's turn ideas into reality!
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-green-400">
                  <FiZap className="text-lg" />
                  <span className="text-sm">Typically replies within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-blue-400">
                  <FiGlobe className="text-lg" />
                  <span className="text-sm">Available for remote work</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;