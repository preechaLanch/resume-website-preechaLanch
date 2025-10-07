import React, { useState, useEffect, useRef } from "react";
import {
  Code,
  Database,
  Wrench,
  Users,
  Monitor,
  Server,
} from "lucide-react";

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["TypeScript", "JavaScript", "PHP", "Dart"],
    },
    {
      icon: Monitor,
      title: "Frontend Development",
      skills: ["Flutter", "React", "HTML", "CSS", "tailwind"],
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js"],
    },
    {
      icon: Server,
      title: "Databases",
      skills: ["MySQL", "Firebase"],
    },
    {
      icon: Wrench,
      title: "Developer Tools",
      skills: ["Git", "Postman", "VSCode"],
    },
  ];
  const softSkills = [
    "Problem Solving", 
    "Collaboration",
    "Communication",  
    "Adaptability",
    "Continuous Learning", 
    "Growth Mindset",
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
      id="skills"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Technical proficiencies and soft skills developed through years of
            hands-on experience and continuous learning.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-slate-50 dark:bg-slate-800 rounded-xl p-8 hover:bg-slate-100 dark:hover:bg-slate-700 hover:shadow-xl hover:scale-105 transition-all duration-500 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
              }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
                  <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`flex items-center group/skill hover:translate-x-2 transition-all duration-300 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                    style={{
                      transitionDelay: isVisible
                        ? `${index * 200 + skillIndex * 100}ms`
                        : "0ms",
                    }}
                  >
                    <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 group-hover/skill:bg-emerald-500 dark:group-hover/skill:bg-emerald-400 group-hover/skill:scale-125 transition-all duration-300"></div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium group-hover/skill:text-slate-900 dark:group-hover/skill:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Professional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className={`group transition-all duration-500 hover:scale-110 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isVisible
                    ? `${1000 + index * 150}ms`
                    : "0ms",
                }}
              >
                <span className="inline-flex items-center px-6 py-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full font-medium group-hover:bg-emerald-600 dark:group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-lg transition-all duration-300 cursor-default">
                  <Users className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
