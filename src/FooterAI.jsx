import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";
import logo from "./assets/logo.png";
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-white/5 backdrop-blur-xl border-t border-white/10 text-white overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-20 sm:h-24 md:h-32 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C180,35 420,85 600,60 C780,35 1020,85 1200,60 L1200,120 L0,120 Z" className="fill-green-900/80 animate-wave-slow" />
          <path d="M0,70 C200,45 400,95 600,70 C800,45 1000,95 1200,70 L1200,120 L0,120 Z" className="fill-green-700/70 animate-wave-med" />
          <path d="M0,80 C160,55 440,105 600,80 C760,55 1040,105 1200,80 L1200,120 L0,120 Z" className="fill-lime-500/20 animate-wave-fast" />
        </svg>
      </div>

      <div className="relative z-10 pt-24 sm:pt-28 md:pt-36 pb-6 px-4 sm:px-6 bg-black/30">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-wide whitespace-nowrap italic mb-2">Get in Touch</h3>
                <div className="flex gap-2 items-center">
                  <a href="https://wa.me/628989209979" target="_blank"><FaWhatsapp size={25} className="text-green-500"/></a>
                  <a href="https://instagram.com/sidowwws" target="_blank"><FaInstagram size={25} style={{background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', borderRadius:"5px"}}/></a>
                  <a href="https://github.com/ridhobillah" target="_blank"><FaGithub size={25}/></a>
                </div>
              </div>
              <img 
                src={logo} 
                alt="Logo" 
                className="border border-green-500 w-10 h-10 rounded-full p-2 object-contain flex-shrink-0"
              />
            </div>
            
          </div>

          <div className="border-t border-white/10 pt-4">
            <p className="text-xs text-gray-400">
              © {year} Muhammad Ridho Billah
            </p>
          </div>

        </div>
      </div>

      <style>{`
        .animate-wave-slow { animation: wave-slow 12s ease-in-out infinite; }
        .animate-wave-med { animation: wave-med 8s ease-in-out infinite; }
        .animate-wave-fast { animation: wave-fast 6s ease-in-out infinite; }
        @keyframes wave-slow { 0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)} }
        @keyframes wave-med { 0%,100%{transform:translateY(0)}50%{transform:translateY(4px)} }
        @keyframes wave-fast { 0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)} }
      `}</style>
    </footer>
  );
};

export default Footer;