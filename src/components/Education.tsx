import React, { useState, useEffect, useRef } from "react";
import { GraduationCap } from "lucide-react";

const Education: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: " Mahasarakham University",
      location: "Mahasarakham",
      period: "2021 - 2025",
      gpa: "3.49/4.0",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Academic foundation and hands-on projects that fuel my continuous
            growth as a developer.
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div
            className={`flex items-center justify-center mb-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3 hover:scale-110 hover:rotate-12 transition-all duration-300" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Education
            </h3>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 group ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12"
                }`}
                style={{
                  transitionDelay: isVisible ? `${400 + index * 200}ms` : "0ms",
                }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {edu.degree}
                    </h4>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2 group-hover:-translate-x-2 transition-transform duration-300">
                      {edu.institution}
                    </p>
                    <div className="text-slate-500 dark:text-slate-400 text-sm">
                      {edu.location} • {edu.period}
                      {edu.gpa && ` • GPA: ${edu.gpa}`}
                    </div>
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

export default Education;
