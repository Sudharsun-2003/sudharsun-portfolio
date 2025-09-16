import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-slate-900/50 border-t border-white/10 py-8">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2025 Sudharsun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;