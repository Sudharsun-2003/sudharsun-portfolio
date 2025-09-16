import React from 'react';
import { FaBriefcase, FaGlobe } from 'react-icons/fa';

const Experience = () => {
  // Experience data object
  const experienceData = [
    {
      id: 1,
      icon: <FaBriefcase className="text-purple-400 text-2xl" />,
      title: "Full Stack Developer Intern",
      company: "Techscopic Solutions",
      duration: "July 2025 – September 2025",
      companyColor: "purple-400",
      achievements: [
        "Designed and developed the company's official website and deployed it live",
        "Created and deployed a client website (Agam Homoeopathic Clinic) with modern UI and responsive design",
        "Gained hands-on experience in full-stack development, API integration, and deployment"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript"],
      techColor: "purple-500"
    },
    {
      id: 2,
      icon: <FaGlobe className="text-blue-400 text-2xl" />,
      title: "Web Development Intern",
      company: "NSIC, Chennai",
      duration: "July 2023 - September 2023",
      companyColor: "blue-400",
      achievements: [
        "Built exclusive static webpages with responsive design and cross-browser compatibility",
        "Developed interactive web components using vanilla JavaScript and modern CSS techniques",
        "Created pixel-perfect landing pages following industry best practices and web standards"
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      techColor: "blue-500"
    }
  ];

  return (
    <section id="experience" className="relative  py-10">
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-500 via-slate-300 to-gray-500 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        {/* Experience Content */}
        <div className="max-w-6xl mx-auto">
          
          {/* Experience Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {experienceData.map((experience) => (
              <div key={experience.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
                
                {/* Header Section */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="mt-1">{experience.icon}</div>
                  <div>
                    <h3 className="text-xl sm:text-xl font-bold text-gray-300 mb-2">
                      {experience.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`text-lg font-semibold text-${experience.companyColor}`}>
                        {experience.company}
                      </span>
                    <div className={`w-2 h-2 bg-${experience.companyColor} rounded-full`}></div>
                      <span className="text-gray-400 text-sm">{experience.duration}</span>
                    </div>
                  </div>
                </div>
                {/* Key Points */}
                <div className="space-y-3 text-gray-300 mb-6">
                  {experience.achievements.map((achievement, index) => {
                    const colors = ['blue-400', 'purple-400', 'green-400'];
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`w-2 h-2 bg-${colors[index % colors.length]} rounded-full mt-2 flex-shrink-0`}></div>
                        <p>{achievement}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Technologies */}
                <div className="border-t border-white/10 pt-4">
                  <p className="text-sm text-gray-400 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className={`px-2 py-1 bg-${experience.techColor}/20 border border-${experience.techColor}/30 rounded-md text-${experience.companyColor} text-xs`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;