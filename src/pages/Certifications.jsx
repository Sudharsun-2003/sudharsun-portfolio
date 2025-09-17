import React, { useEffect } from 'react';
import { FaAws, FaJava, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Certifications = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  // Certifications data object
  const certificationsData = [
    {
      id: 1,
      icon: <FaAws className="text-orange-400 text-2xl" />,
      title: "AWS Certified Cloud Practitioner",
      provider: "Don Bosco Skill Mission, Bengaluru",
      duration: "Certified",
      certificateLink: "https://drive.google.com/file/d/1fCfcN8qHx8yw2E17a-3e3BHwwrQaZ6qE/view?usp=drive_link",
      accentColor: "orange-400",
      description: "Foundational understanding of AWS cloud services, security, and pricing models",
      skills: ["AWS Services", "Cloud Computing", "Security", "Pricing Models"]
    },
    {
      id: 2,
      icon: <FaJava className="text-blue-400 text-2xl" />,
      title: "Programming in Java",
      provider: "NPTEL SWAYAM Online Course",
      duration: "Certified",
      certificateLink: "https://drive.google.com/file/d/1U2dUoI9_UZKXqLduVnJhDnM5BtCUJc4G/view?usp=drive_link",
      accentColor: "blue-400",
      description: "Comprehensive Java programming course covering core concepts and advanced topics",
      skills: ["Java Programming", "Object-Oriented Programming", "Data Structures", "Algorithms"]
    }
  ];

  return (
    <section id="certifications" className="relative py-8 sm:py-12 lg:py-16">
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12" data-aos="fade-up" data-aos-duration="800">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-500 via-slate-300 to-gray-500 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          <p className="text-gray-400 text-md sm:text-xl mt-3 max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        {/* Certifications Content */}
        <div className="max-w-5xl mx-auto">
          
          {/* Certifications Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            
            {certificationsData.map((cert, index) => (
              <div 
                key={cert.id} 
                className="group bg-slate-900/30 border border-slate-700/50 rounded-lg p-4 sm:p-6 hover:bg-gray-200/5 hover:border-slate-600/60 transition-all duration-300 backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 200}
              >
                
                {/* Header Section */}
                <div 
                  className="flex items-start gap-4 mb-4"
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-delay={index * 200 + 100}
                >
                  <div className="bg-slate-800/50 rounded-lg p-2 group-hover:bg-slate-700/60 transition-all duration-300">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-sm sm:text-base font-bold text-white group-hover:text-${cert.accentColor} transition-colors duration-300 mb-2`}>
                      {cert.title}
                    </h3>
                    <div className="flex flex-col gap-1">
                      <span className={`text-${cert.accentColor} text-sm font-semibold`}>
                        {cert.provider}
                      </span>
                      <span className={`inline-flex px-2 py-0.5 text-xs font-medium rounded border bg-${cert.accentColor}/20 text-${cert.accentColor} border-${cert.accentColor}/30 w-fit`}>
                        {cert.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div 
                  className="mb-4"
                  data-aos="fade-left"
                  data-aos-duration="600"
                  data-aos-delay={index * 200 + 200}
                >
                  <p className="text-gray-300 leading-relaxed text-xs">
                    {cert.description}
                  </p>
                </div>

                {/* Skills */}
                <div 
                  className="mb-4"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay={index * 200 + 300}
                >
                  <div className="flex items-center gap-1 mb-2">
                    <HiSparkles className={`text-${cert.accentColor} text-xs`} />
                    <span className={`text-${cert.accentColor} font-semibold text-xs`}>Skills & Topics:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className={`px-2 py-0.5 rounded text-xs border bg-${cert.accentColor}/20 text-${cert.accentColor} border-${cert.accentColor}/30`}
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay={index * 200 + 400 + skillIndex * 50}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Certificate Button */}
                <div 
                  className="border-t border-slate-700/30 pt-4"
                  data-aos="slide-up"
                  data-aos-duration="600"
                  data-aos-delay={index * 200 + 500}
                >
                  <a
                    href={cert.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${cert.id === 1 ? 'from-orange-500/20 via-amber-500/30 to-yellow-500/20 hover:from-orange-500/30 hover:via-amber-500/40 hover:to-yellow-500/30' : 'from-blue-500/20 via-indigo-500/30 to-purple-500/20 hover:from-blue-500/30 hover:via-indigo-500/40 hover:to-purple-500/30'} border border-${cert.accentColor}/40 rounded-lg text-${cert.accentColor} font-medium transition-all duration-300 hover:shadow-lg hover:shadow-${cert.accentColor}/20`}
                  >
                    <FaCertificate className="text-xs" />
                    <span className="text-xs">View Certificate</span>
                    <FaExternalLinkAlt className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                  </a>
                </div>

              </div>
            ))}

          </div>

          {/* Bottom CTA Section */}
          <div 
            className="mt-8 sm:mt-12 text-center"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Committed to staying updated with the latest technologies and industry best practices 
                through continuous professional development and certification programs.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;