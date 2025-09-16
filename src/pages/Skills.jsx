import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";

// Import React Icons
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaAws 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiPostman, 
  SiSwagger, 
  SiMysql
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { 
  MdCode, 
  MdWeb, 
  MdStorage, 
  MdCloud, 
  MdBuild 
} from 'react-icons/md';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Skills = () => {
  const sliderRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [key, setKey] = useState(0);

  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Force re-render on resize to fix small screen issues
  useEffect(() => {
    const handleResize = () => {
      setKey(prev => prev + 1);
    };

    if (isClient) {
      // Small delay to ensure proper initialization
      const timer = setTimeout(() => {
        setKey(prev => prev + 1);
      }, 100);

      window.addEventListener('resize', handleResize);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isClient]);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <MdWeb className="text-3xl text-blue-400" />,
      color: "from-blue-600 to-cyan-500",
      skills: [
        { name: "React.js", level: 90, icon: <FaReact className="text-blue-500" /> },
        { name: "JavaScript (ES6+)", level: 85, icon: <FaJs className="text-yellow-500" /> },
        { name: "HTML5", level: 95, icon: <FaHtml5 className="text-orange-600" /> },
        { name: "CSS3", level: 90, icon: <FaCss3Alt className="text-blue-600" /> },
        { name: "Tailwind CSS", level: 88, icon: <SiTailwindcss className="text-cyan-400" /> }
      ]
    },
    {
      title: "Backend Development",
      icon: <MdCode className="text-3xl text-green-400" />,
      color: "from-green-600 to-emerald-500",
      skills: [
        { name: "Node.js", level: 85, icon: <FaNodeJs className="text-green-600" /> },
        { name: "Express.js", level: 82, icon: <SiExpress className="text-yellow-500" /> }
      ]
    },
    {
      title: "Database Management",
      icon: <MdStorage className="text-3xl text-purple-400" />,
      color: "from-purple-600 to-violet-500",
      skills: [
        { name: "MongoDB", level: 80, icon: <SiMongodb className="text-green-500" /> },
        { name: "SQL", level: 75, icon: <SiMysql className="text-blue-600" /> }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <MdCloud className="text-3xl text-orange-400" />,
      color: "from-orange-600 to-red-500",
      skills: [
        { name: "AWS EC2", level: 61, icon: <FaAws className="text-orange-500" /> },
        { name: "AWS S3", level: 72, icon: <FaAws className="text-orange-500" /> },
        { name: "AWS IAM", level: 65, icon: <FaAws className="text-orange-500" /> }
      ]
    },
    {
      title: "Tools & Development",
      icon: <MdBuild className="text-3xl text-pink-400" />,
      color: "from-pink-600 to-rose-500",
      skills: [
        { name: "Git", level: 85, icon: <FaGitAlt className="text-red-500" /> },
        { name: "GitHub", level: 88, icon: <FaGithub className="text-gray-400" /> },
        { name: "Postman", level: 80, icon: <SiPostman className="text-orange-500" /> },
        { name: "Swagger", level: 75, icon: <SiSwagger className="text-green-500" /> },
        { name: "VS Code", level: 90, icon: <VscVscode className="text-blue-500" /> }
      ]
    }
  ];

  // Custom Arrow Components
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute -left-12 lg:-left-16 top-1/2 -translate-y-1/2 z-30 bg-gradient-to-r from-gray-700/90 to-gray-800/90 border border-gray-600/50 rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-blue-600/90 hover:to-blue-700/90 transition-all duration-300 shadow-md"
    >
      <ChevronLeft className="w-5 h-5" />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute -right-12 lg:-right-16 top-1/2 -translate-y-1/2 z-30 bg-gradient-to-r from-gray-700/90 to-gray-800/90 border border-gray-600/50 rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-blue-600/90 hover:to-blue-700/90 transition-all duration-300 shadow-md"
    >
      <ChevronRight className="w-5 h-5" />
    </button>
  );

  // Get current screen size
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    if (isClient) {
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, [isClient]);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: !isMobile,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    centerMode: !isMobile,
    centerPadding: '0px',
    lazyLoad: 'ondemand',
    adaptiveHeight: false,
    variableWidth: false,
    beforeChange: (oldIndex, newIndex) => {
      if (isMobile) {
        setCurrentSlide(newIndex);
      }
    },
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
          arrows: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px',
          arrows: false,
          dots: true,
          infinite: true,
          variableWidth: false,
          fade: false,
          beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        }
      }
    ]
  };

  // Only render slider on client-side
  if (!isClient) {
    return (
      <section id="skills" className="relative py-16 bg-gray-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-3"></div>
            <p className="text-gray-200 text-lg sm:text-xl mt-4 max-w-3xl mx-auto leading-relaxed">
              Loading skills...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="relative py-10 ">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-500 via-slate-300 to-gray-500 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          <p className="text-gray-200 text-lg sm:text-xl mt-4 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technologies for modern web solutions
          </p>
        </div>

        {/* Skills Slider */}
        <div className="relative skills-slider-container">
          <Slider 
            {...sliderSettings} 
            ref={sliderRef} 
            className="skills-slider"
            key={key}
            data-current={currentSlide}
          >
            {skillCategories.map((category, index) => (
              <div key={index} className="px-2 outline-none">
                <div className="group bg-gradient-to-b from-gray-800/70 to-gray-700/70 border border-gray-600/30 rounded-3xl p-6 min-h-[480px] max-h-[480px] h-[480px] flex flex-col transition-all duration-500 hover:shadow-xl hover:bg-gradient-to-b hover:from-gray-700/70 hover:to-gray-800/70">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="text-3xl text-white group-hover:scale-105 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white tracking-wide">
                        {category.title}
                      </h3>
                      <div className={`w-12 h-0.5 bg-gradient-to-r ${category.color} rounded-full mt-1 group-hover:scale-x-110 transition-transform duration-300`} />
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="flex-grow space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="text-lg group-hover:scale-105 transition-transform duration-300">
                              {skill.icon}
                            </div>
                            <span className="text-gray-100 text-sm font-medium">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-gray-300 text-sm font-medium">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700/30 rounded-full h-1.5 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-700`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                    {category.skills.length < 5 && <div className="flex-grow" />}
                  </div>

                  {/* Category Badge */}
                  <div className="mt-5 pt-4  border-t border-gray-600/20">
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${category.color} bg-opacity-20 text-xs font-medium text-white rounded-full group-hover:scale-105 transition-transform duration-300`}>
                      {category.skills.length} {category.skills.length === 1 ? 'Skill' : 'Skills'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .skills-slider-container {
          max-width: 100%;
          padding: 0 16px;
          overflow: hidden;
        }
        .skills-slider .slick-slide {
          transition: opacity 0.5s ease, transform 0.5s ease;
          opacity: 0.3;
          transform: scale(0.95);
        }
        .skills-slider .slick-slide.slick-active {
          opacity: 1;
          transform: scale(1);
        }
        .skills-slider .slick-slide > div {
          height: 100%;
          display: flex;
          align-items: stretch;
        }
        .skills-slider .slick-slide > div > div {
          width: 100%;
        }
        .skills-slider .slick-list {
          margin: 0 -8px;
          overflow: hidden;
        }
        .skills-slider .slick-track {
          display: flex;
          align-items: stretch;
        }
        .skills-slider .slick-dots {
          bottom: -50px;
          text-align: center;
          display: flex !important;
          justify-content: center;
          align-items: center;
          list-style: none;
          padding: 0;
          margin: 20px 0 0 0;
        }
        .skills-slider .slick-dots li {
          display: inline-block;
          margin: 0 6px;
          padding: 0;
          cursor: pointer;
        }
        .skills-slider .slick-dots li button {
          border: none;
          background: transparent;
          color: transparent;
          cursor: pointer;
          display: block;
          outline: none;
          padding: 0;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }
        .skills-slider .slick-dots li button:before {
          display: none;
        }
        .skills-slider .slick-dots li.slick-active button {
          background-color: #ffffff;
          transform: scale(1.2);
        }
        .skills-slider .slick-dots li button:hover {
          background-color: rgba(255, 255, 255, 0.6);
        }
        
        @media (min-width: 1281px) {
          .skills-slider .slick-slide {
            width: calc((100% - 48px) / 3) !important;
            padding: 0 8px;
          }
          .skills-slider-container {
            padding: 0 64px;
          }
        }
        @media (min-width: 769px) and (max-width: 1280px) {
          .skills-slider .slick-slide {
            width: calc((100% - 32px) / 2) !important;
            padding: 0 8px;
          }
          .skills-slider-container {
            padding: 0 48px;
          }
        }
        @media (max-width: 768px) {
          .skills-slider-container {
            padding: 0 20px;
            max-width: 100%;
            overflow: hidden;
          }
          .skills-slider .slick-list {
            overflow: hidden;
            margin: 0;
            width: 100%;
          }
          .skills-slider .slick-track {
            display: flex;
            width: 500%; /* 5 slides × 100% each */
            transform: translateX(0);
          }
          .skills-slider .slick-slide {
            width: 20% !important; /* 100% / 5 slides */
            padding: 0 10px;
            opacity: 1 !important;
            transform: scale(1) !important;
            float: left;
            height: auto;
            min-height: 480px;
          }
          .skills-slider .slick-slide > div {
            width: 100%;
            height: auto;
            display: block;
          }
          .skills-slider .slick-slide > div > div {
            width: 100%;
            max-width: 100%;
            margin: 0;
          }
          .skills-slider .slick-dots {
            bottom: -60px;
            margin: 30px 0 0 0;
          }
          .skills-slider .slick-dots li button {
            width: 8px;
            height: 8px;
          }
          /* Hide non-active slides by moving them out of view */
          .skills-slider[data-current="0"] .slick-track {
            transform: translateX(0%) !important;
          }
          .skills-slider[data-current="1"] .slick-track {
            transform: translateX(-20%) !important;
          }
          .skills-slider[data-current="2"] .slick-track {
            transform: translateX(-40%) !important;
          }
          .skills-slider[data-current="3"] .slick-track {
            transform: translateX(-60%) !important;
          }
          .skills-slider[data-current="4"] .slick-track {
            transform: translateX(-80%) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;