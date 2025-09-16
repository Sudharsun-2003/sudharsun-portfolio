import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Don't prevent body scroll - let the menu handle its own scrolling
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" }
  ];

  // Smooth scroll function
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false); // Close mobile menu after click
    // Don't need to restore body scroll since we're not blocking it
    setIsVisible(false); // Hide navbar after click
  };

  // Control navbar visibility based on scroll direction
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Cleanup on unmount - removed body scroll manipulation
  useEffect(() => {
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50 transition-all duration-500 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <span className="text-3xl font-bold bg-gradient-to-r from-gray-500 via-slate-300 to-gray-500 bg-clip-text text-transparent tracking-wider font-serif">
                Sudharsun
              </span>
            </div>
          </div>

          {/* Desktop Navigation - Moved further right */}
          <div className="hidden md:flex md:ml-auto md:mr-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-medium text-sm tracking-wide uppercase transition-all duration-300 relative group cursor-pointer ${
                      activeSection === link.href.substring(1)
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                      activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay - Fixed positioning */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-[60]"
          onClick={() => {
            setIsOpen(false);
          }}
        />
      )}

      {/* Mobile Navigation - Fixed positioning */}
      <div className={`fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-black md:hidden transform transition-transform duration-300 ease-in-out z-[65] ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Mobile menu header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="relative">
            <span className="text-xl font-bold bg-gradient-to-r from-gray-500 via-slate-300 to-gray-500 bg-clip-text text-transparent tracking-wider font-serif">
              Menu
            </span>
          </div>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="text-white hover:text-gray-300 transition-colors duration-300 p-2"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile menu items */}
        <div className="py-6 flex flex-col overflow-y-auto" style={{ height: 'calc(100vh - 120px)' }}>
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block px-6 py-4 transition-all duration-300 cursor-pointer border-b border-gray-800 last:border-b-0 ${
                activeSection === link.href.substring(1)
                  ? 'text-white bg-gray-900 border-l-4 border-l-purple-500'
                  : 'text-gray-300 hover:text-white hover:bg-gray-900/50'
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: isOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
              }}
            >
              <span className="font-semibold tracking-wide text-lg">{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;