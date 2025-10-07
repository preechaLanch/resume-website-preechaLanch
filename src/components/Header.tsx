import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import AOS from "aos";
import "aos/dist/aos.css";

interface HeaderProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: "About", id: "about", aosDuration: "1000" },
    { name: "Experience", id: "experience", aosDuration: "1200" },
    { name: "Skills", id: "skills", aosDuration: "1400" },
    { name: "Education", id: "education", aosDuration: "1600" },
    { name: "Projects", id: "projects", aosDuration: "1800" },
    { name: "Contact", id: "contact", aosDuration: "2000" },
  ];

  useEffect(() => {
    AOS.init();
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume_fullstack.pdf";
    link.download = "Preecha-Resume.pdf";
    link.click();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg transform translate-y-0"
          : "bg-transparent transform translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-slate-800 dark:text-white hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-default">
            Preecha Lanchanthong
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                data-aos="fade-down"
                data-aos-duration={item.aosDuration}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-110 ${
                  activeSection === item.id
                    ? "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/30 scale-105"
                    : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="inline-flex items-center px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 hover:scale-110 hover:shadow-lg transition-all duration-300"
              onClick={handleDownload}
            >
              <Download className="w-4 h-4 mr-2 hover:rotate-12 transition-transform duration-300" />
              Resume
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className=" md:hidden border-t border-slate-200 dark:border-slate-700 animate-fade-in-up">
            <div className="px-2 pt-2 pb-4 pd-3 space-y-1">
              {navigation.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === item.id
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </button>
              ))}
              <button
                className="w-full mt-4  inline-flex items-center justify-center px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 hover:scale-105 transition-all duration-300"
                onClick={handleDownload}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
