import React from 'react';
import { Download, Eye, Github, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const HeroSection = () => {
  // Function to handle resume download
  const handleResumeDownload = () => {
    const fileId = '1_TGI-lYcTeIf0kBlH-jhFAJJn6HSfmgJ';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Sudharsun_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to scroll to Projects section
  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Function to handle WhatsApp message
  const handleWhatsAppMessage = () => {
    const phoneNumber = '916380619680';
    const message = encodeURIComponent('Hi Sudharsun! I found your portfolio and would like to connect.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-purple-950 to-slate-900">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-32 md:pt-28 lg:pt-24 pb-16 sm:pb-20">

        {/* Main Content */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-14 xl:space-y-12">

          {/* Greeting & Name Section */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-8 xl:space-y-6">

            {/* Greeting */}
            <div className="inline-block">
              <span className="text-lg sm:text-xl lg:text-xl xl:text-xl text-blue-300/90 font-medium">
                Hello, I'm
              </span>
            </div>

            {/* Name - Reduced size for larger screens */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-7xl font-bold bg-gradient-to-r from-gray-500 via-slate-300 to-gray-500 bg-clip-text text-transparent">
              Sudharsun
            </h1>

            {/* Title & Subtitle - Better scaling */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-3xl font-bold bg-gradient-to-r from-indigo-900 via-slate-300 to-indigo-800 bg-clip-text text-transparent">
                MERN Stack Developer
              </h2>
              <p className="text-base sm:text-lg lg:text-lg xl:text-xl 2xl:text-lg text-gray-300/80 max-w-3xl mx-auto leading-relaxed">
                Passionate About Building Scalable Web Applications
              </p>
            </div>
          </div>

          {/* Professional Description */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-purple-300/20 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-8 xl:p-8">
  <p className="text-gray-300/80 leading-relaxed text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-base">
    I specialize in creating modern, user-friendly, and responsive web applications using{' '}
    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-white-800 font-semibold">React</span>,{' '}
    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-white-800 font-semibold">Node.js</span>,{' '}
    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-white-800 font-semibold">Express</span>, and{' '}
    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-white-800 font-semibold">MongoDB</span>.{' '}
    I enjoy solving real-world problems through code and delivering impactful solutions.
  </p>
</div>

          </div>

          {/* CTA Buttons - Updated colors */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button
              onClick={handleViewWork}
              className="group bg-gradient-to-r from-violet-600 via-purple-700 to-fuchsia-700 
hover:from-violet-700 hover:via-purple-800 hover:to-fuchsia-800 
text-white px-8 sm:px-10 lg:px-10 xl:px-12 py-3 sm:py-3 lg:py-3 xl:py-4 
rounded-full font-semibold flex items-center space-x-3 
transition-all duration-300 transform hover:scale-105 
shadow-lg hover:shadow-fuchsia-900/50 w-full sm:w-auto justify-center 
text-sm sm:text-base lg:text-base xl:text-lg"

            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 group-hover:scale-110 transition-transform duration-300" />
              <span>View My Work</span>
            </button>
           <button
  onClick={handleResumeDownload}
  className="group bg-transparent border-2 border-purple-400/50 hover:border-fuchsia-400 text-purple-300 hover:text-white 
  px-8 sm:px-10 lg:px-10 xl:px-12 py-3 sm:py-3 lg:py-3 xl:py-4 
  rounded-full font-semibold flex items-center space-x-3 
  transition-all duration-300 transform hover:scale-105 
  w-full sm:w-auto justify-center text-sm sm:text-base lg:text-base xl:text-lg 
  hover:bg-gradient-to-r hover:from-violet-700/10 hover:via-purple-800/10 hover:to-fuchsia-900/10"
>
  <Download className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 group-hover:scale-110 transition-transform duration-300" />
  <span>Download Resume</span>
</button>

          </div>

          {/* Social Links - Updated colors */}
          <div className="flex justify-center space-x-6 sm:space-x-8 pt-6 sm:pt-6 lg:pt-4">
            <a
              href="https://github.com/Sudharsun-2003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400/70 hover:text-blue-300 hover:scale-110 transition-all duration-300 p-3 rounded-full hover:bg-blue-500/10"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sudharsun-s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400/70 hover:text-blue-300 hover:scale-110 transition-all duration-300 p-3 rounded-full hover:bg-blue-500/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6" />
            </a>
            <button
              onClick={handleWhatsAppMessage}
              className="text-gray-400/70 hover:text-blue-300 hover:scale-110 transition-all duration-300 p-3 rounded-full hover:bg-blue-500/10"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;