import React, { useEffect, useState, useRef } from 'react';
import { FaCode, FaAws, FaRocket, FaLightbulb, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import My_image from '../assets/My_image.png';
import { FiZap, FiTarget } from "react-icons/fi";
import { GiOnTarget } from "react-icons/gi";

const About = () => {
  const [visibleElements, setVisibleElements] = useState([]);
  const elementRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute('data-index');
          if (entry.isIntersecting) {
            setVisibleElements(prev => [...prev, parseInt(index)]);
          } else {
            setVisibleElements(prev => prev.filter(i => i !== parseInt(index)));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    elementRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      elementRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const highlights = [
    {
      icon: <FaCode className="text-blue-400" />,
      title: "MERN Stack Developer",
      description: "Full-stack applications with modern technologies"
    },
    {
      icon: <FaAws className="text-orange-400" />,
      title: "AWS Certified",
      description: "Cloud Practitioner certification"
    }
  ];

  return (
    <section id="about" className="relative py-16">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/20 to-slate-900/0"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div 
          ref={el => elementRefs.current[0] = el}
          data-index="0"
          className={`text-center mb-12 transition-all duration-1000 ${
            visibleElements.includes(0) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-500 via-slate-300 to-gray-500 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Image */}
          <div 
            ref={el => elementRefs.current[1] = el}
            data-index="1"
            className={`lg:col-span-2 transition-all duration-1000 ${
              visibleElements.includes(1) 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative max-w-xs mx-auto lg:mx-0">
              
              {/* Image Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-3">
                  <img 
                    src={My_image} 
                    alt="Sudharsun - MERN Stack Developer" 
                    className="w-full h-auto rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-8 space-y-3">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  ref={el => elementRefs.current[2 + index] = el}
                  data-index={2 + index}
                  className={`flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 ${
                    visibleElements.includes(2 + index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="text-xl">{item.icon}</div>
                  <div>
                    <div className="text-white text-sm font-medium">{item.title}</div>
                    <div className="text-gray-400 text-xs">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Main Description */}
            <div 
              ref={el => elementRefs.current[4] = el}
              data-index="4"
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-1000 ${
                visibleElements.includes(4) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <FaLightbulb className="text-blue-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Full Stack Developer
                  </h3>
                  <p className="text-blue-400 text-sm font-medium">
                    Specialized in MERN Stack Development
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a dedicated MERN stack developer with practical experience in building 
                  comprehensive full-stack applications, from dynamic business websites to 
                  interactive digital platforms.
                </p>
                
                <p>
                  Currently working as a <span className="text-blue-400 font-medium">Full Stack Developer Intern</span> at Techscopic Solutions, where I am contributing to the development and deployment of live client websites, gaining valuable real-world experience.
                </p>
                
                <p>
                  I also hold an <span className="text-orange-400 font-medium">AWS Certified Cloud Practitioner</span> certification 
                  through a specialized program at Don Bosco Skill Mission, Bengaluru, 
                  demonstrating my commitment to cloud technologies.
                </p>
              </div>
            </div>

            {/* Professional Goals */}
            <div 
              ref={el => elementRefs.current[5] = el}
              data-index="5"
              className={`bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-1000 ${
                visibleElements.includes(5) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaRocket className="text-green-400 text-lg" />
                <h4 className="text-lg font-semibold text-white">Professional Objective</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about contributing my technical skills to innovative projects, 
                advancing as a professional developer, and <span className="text-green-400 font-medium">
                creating impactful solutions that deliver real value</span> to businesses and users alike.
              </p>
            </div>

            {/* Skills Preview */}
            <div className="grid grid-cols-2 gap-4">
              <div 
                ref={el => elementRefs.current[6] = el}
                data-index="6"
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 ${
                  visibleElements.includes(6) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <FiZap className="text-3xl text-purple-400 mx-auto mb-2" />
                <div className="text-white font-medium text-sm">Fast Development</div>
                <div className="text-gray-400 text-xs">Efficient Coding</div>
              </div>
              
              <div 
                ref={el => elementRefs.current[7] = el}
                data-index="7"
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 ${
                  visibleElements.includes(7) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <GiOnTarget className="text-3xl text-fuchsia-400 mx-auto mb-2" />
                <div className="text-white font-medium text-sm">Problem Solving</div>
                <div className="text-gray-400 text-xs">Creative Solutions</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;