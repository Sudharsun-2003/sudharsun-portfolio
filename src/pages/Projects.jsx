import React, { useEffect, useState, useRef } from 'react';
import { FaExternalLinkAlt, FaGithub, FaCode, FaRocket } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const Projects = () => {
  // Animation states
  const [visibleElements, setVisibleElements] = useState([]);
  const elementRefs = useRef([]);

  // Scroll animation observer
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

  const projects = [
    {
      id: 1,
      title: "Agam Homoeopathic Clinic Website",
      status: "Live",
      description: "Created a responsive clinic website showcasing services, booking system, and doctor's profile.",
      techStack: [
        { name: "MongoDB", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
        { name: "Express", color: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
        { name: "React", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
        { name: "Node.js", color: "bg-green-500/20 text-green-400 border-green-500/30" }
      ],
      features: "Responsive design, service showcase, appointment booking, doctor profile, contact forms, mobile-optimized.",
      link: "https://agam-website.web.app/",
      type: "website",
      accentColor: "text-blue-400",
      statusBg: "bg-blue-500/20 text-blue-400 border-blue-500/30"
    },
    {
      id: 2,
      title: "Techscopic Solutions Website",
      status: "Live",
      description: "Developed and deployed the official company website for Techscopic Solutions during internship.",
      techStack: [
        { name: "React", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
        { name: "Node.js", color: "bg-green-500/20 text-green-400 border-green-500/30" },
        { name: "Tailwind", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" }
      ],
      features: "Modern UI/UX, service portfolio, team showcase, client testimonials, SEO optimization, fast loading.",
      link: "https://techscopicsolutions.com/",
      type: "website",
      accentColor: "text-purple-400",
      statusBg: "bg-purple-500/20 text-purple-400 border-purple-500/30"
    },
    {
      id: 3,
      title: "Shopify Landing Page",
      status: "Frontend Practice",
      description: "A modern landing page for a clothing store, designed to practice frontend development and animation techniques.",
      techStack: [
        { name: "React", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
        { name: "Tailwind", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" }
      ],
      features: "Smooth AOS animations, responsive design, minimal UI.",
      link: "https://shopsy-ded33.web.app/",
      type: "website",
      accentColor: "text-emerald-400",
      statusBg: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
    },
    {
      id: 4,
      title: "GlitzRent – Jewelry Renting E-Commerce Platform",
      description: "A full-stack application built to simplify jewelry renting, offering seamless browsing, cart, and checkout functionality.",
      techStack: [
        { name: "MongoDB", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
        { name: "Express", color: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
        { name: "React", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
        { name: "Node.js", color: "bg-green-500/20 text-green-400 border-green-500/30" }
      ],
      features: "User registration/login, product catalog, shopping cart, checkout system, admin panel for managing inventory.",
      link: "https://github.com/Sudharsun-2003/GlitRent.git",
      type: "github",
      accentColor: "text-orange-400",
      statusBg: "bg-orange-500/20 text-orange-400 border-orange-500/30"
    },
    {
      id: 5,
      title: "Volunteer Connecting Platform",
      description: "A web application to connect volunteers with organizations, featuring event postings, user registrations, and skill-based matching.",
      techStack: [
        { name: "React", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
        { name: "Node.js", color: "bg-green-500/20 text-green-400 border-green-500/30" },
        { name: "Express", color: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
        { name: "MongoDB", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" }
      ],
      features: "Role-based login (user/admin), filters, opportunity management, achievements system.",
      link: "https://github.com/Sudharsun-2003/Volunteer-Website.git",
      type: "github",
      accentColor: "text-indigo-400",
      statusBg: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
    }
  ];

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="relative py-8 sm:py-12 lg:py-16">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Header */}
        <div 
          ref={el => elementRefs.current[0] = el}
          data-index="0"
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
            visibleElements.includes(0) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-500 via-slate-300 to-gray-500 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          <p className="text-gray-400 text-lg sm:text-md mt-3 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development
          </p>
        </div>

        {/* Animated Projects Grid */}
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => elementRefs.current[index + 1] = el}
              data-index={index + 1}
              className={`group bg-slate-900/30 border border-slate-700/50 rounded-lg p-3 sm:p-4 hover:bg-gray-200/5 hover:border-slate-600/60 transition-all duration-300 cursor-pointer flex flex-col min-h-[280px] sm:min-h-[300px] backdrop-blur-sm ${
                visibleElements.includes(index + 1) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => handleProjectClick(project.link)}
            >
              
              {/* Header with Icon, Title and Status */}
              <div className="flex items-start gap-2.5 mb-3">
                <div className={`w-7 h-7 sm:w-8 sm:h-8 bg-slate-800/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-slate-700/60 transition-all duration-300`}>
                  {project.type === 'github' ? (
                    <FaGithub className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${project.accentColor}`} />
                  ) : (
                    <FaExternalLinkAlt className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${project.accentColor}`} />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className={`text-xs sm:text-sm font-bold text-white group-hover:${project.accentColor} transition-colors duration-300 leading-tight mb-1.5`}>
                    {project.title}
                  </h3>
                  {project.status && (
                    <span className={`inline-flex px-1.5 py-0.5 text-xs font-medium rounded border ${project.statusBg}`}>
                      {project.status}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-xs mb-3 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack with Individual Colors */}
              <div className="mb-3">
                <div className="flex items-center gap-1 mb-1.5">
                  <FaCode className={`${project.accentColor} text-xs`} />
                  <span className={`${project.accentColor} font-semibold text-xs`}>Tech Stack:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-1.5 py-0.5 rounded text-xs border ${tech.color}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              {project.features && (
                <div className="bg-slate-800/30 rounded p-2 mb-3 border border-slate-700/30">
                  <div className="flex items-center gap-1 mb-1">
                    <HiSparkles className={`${project.accentColor} text-xs`} />
                    <span className={`${project.accentColor} font-semibold text-xs`}>Key Features:</span>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {project.features}
                  </p>
                </div>
              )}

              {/* Link Indicator */}
              <div className={`flex items-center gap-1.5 ${project.accentColor} group-hover:text-gray-200 transition-colors duration-300 mt-auto pt-2 border-t border-slate-700/30`}>
                {project.type === 'github' ? (
                  <>
                    <FaGithub className="w-3 h-3" />
                    <span className="text-xs font-medium">View on GitHub</span>
                  </>
                ) : (
                  <>
                    <FaExternalLinkAlt className="w-3 h-3" />
                    <span className="text-xs font-medium">Visit Live Site</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Animated CTA */}
        <div 
          ref={el => elementRefs.current[projects.length + 1] = el}
          data-index={projects.length + 1}
          className={`text-center mt-8 sm:mt-12 transition-all duration-1000 ${
            visibleElements.includes(projects.length + 1) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-4">
              I'm always excited to work on innovative projects and collaborate with talented teams.
            </p>
            <div className="flex items-center justify-center gap-1.5 text-blue-400">
              <FaRocket className="text-xs" />
              <span className="text-xs font-medium">Let's create something extraordinary together!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;