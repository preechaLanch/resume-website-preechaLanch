import {
  ArrowDown,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import React from "react";
import FloatingDots from "./FloatingDots";

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 dark:bg-blue-400/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
      <FloatingDots />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 mt-24 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-xl hover:scale-110 hover:rotate-6 transition-all duration-500 cursor-default">
              FIW
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight hover:scale-105 transition-transform duration-300">
            Preecha Lanchanthong
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-4 font-light animate-pulse">
            Junior Full-Stack Developer
          </p>
          <p className="text-lg text-slate-300 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed hover:text-slate-100 dark:hover:text-slate-200 transition-colors duration-300">
            Motivated by curiosity and creativity, I'm focused on learning best
            practices in web development, clean code, and user-centered design
            to build great digital experiences.
          </p>
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-slate-300 dark:text-slate-400">
            <div className="flex items-center hover:text-blue-300 dark:hover:text-blue-200 hover:scale-110 transition-all duration-300 cursor-default">
              <Mail className="w-5 h-5 mr-2 text-blue-400 dark:text-blue-300" />
              <span>preecha.lanch@gmail.com</span>
            </div>
            <div className="flex items-center hover:text-blue-300 dark:hover:text-blue-200 hover:scale-110 transition-all duration-300 cursor-default">
              <Phone className="w-5 h-5 mr-2 text-blue-400 dark:text-blue-300" />
              <span>063 446 3840</span>
            </div>
            <div className="flex items-center hover:text-blue-300 dark:hover:text-blue-200 hover:scale-110 transition-all duration-300 cursor-default">
              <MapPin className="w-5 h-5 mr-2 text-blue-400 dark:text-blue-300" />
              <span>Chon Buri Thailand</span>
            </div>
          </div>
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/preeZa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 dark:hover:text-slate-300 hover:scale-125 hover:rotate-12 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-blue-400 dark:hover:text-slate-300 hover:scale-125 hover:rotate-12 transition-all duration-300"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 hover:scale-110 hover:shadow-2xl transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-blue-400 dark:border-blue-300 text-blue-400 dark:text-blue-300 rounded-lg font-medium hover:bg-blue-400 hover:text-white dark:hover:bg-blue-300 dark:hover:text-slate-900 dark:hover:scale-110 hover:shadow-2xl transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-slate-400 hover:text-blue-400 dark:hover:text-blue-300 hover:scale-125 transition-all duration-300"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
