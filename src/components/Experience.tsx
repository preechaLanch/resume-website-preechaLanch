import React, { useState, useEffect, useRef } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const experiences = [
    {
      title: "Website: MEMEMASH (Mini Project)",
      company: "Mahasarakham University",
      link: "https://maps.app.goo.gl/2vpw9xbJVCAHP16p6",
      location: "Mahasarakham",
      period: "2023",
      description:
        "Created a meme ranking website with modern UX/UI and scalable architecture.",
      achievements: [
        "Designed UX/UI in Figma for a user-friendly and visually appealing interface",
        "Developed frontend using React and TypeScript, styled with Tailwind CSS",
        "Built backend with Node.js and Express.js connected to MySQL",
        "Implemented Firebase Storage for efficient image storage and retrieval",
        "Integrated Elo Rating Algorithm to calculate scores and rank images",
      ],
      technologies: [
        "Figma",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MySQL",
        "Firebase",
      ],
    },
    {
      title: "Mobile Application: Pet Fluffy (Senior Project)",
      company: "Mahasarakham University",
      link: "https://maps.app.goo.gl/2vpw9xbJVCAHP16p6",
      location: "Mahasarakham",
      period: "2024",
      description:
        "Developed a pet dating mobile app with real-time features, authentication, and cloud integration.",
      achievements: [
        "Designed intuitive UX/UI with Figma",
        "Created ER diagrams for optimized database structure",
        "Integrated Google Login and Google Maps API",
        "Implemented Firebase Authentication for secure user management",
        "Stored persistent data with Firestore",
        "Enabled push notifications with Firebase Cloud Messaging",
      ],
      technologies: [
        "Flutter",
        "Figma",
        "Google Maps API",
        "Google Login",
        "Firebase Authentication",
        "Firestore",
        "Firebase Cloud Messaging",
      ],
    },
    {
      title: "Mobile Application: EasyPass OCR & NFC",
      company: "DIGIO (THAILAND) CO., LTD. ",
      link: "https://maps.app.goo.gl/FT4787x3rLkR6BTQ8",
      location: "Bangkok, Huaykwang",
      period: "2025",
      description:
        "Built an OCR & NFC-based mobile application for real-time travel document verification.",
      achievements: [
        "Developed with Kotlin for Android platform",
        "Implemented real-time scanning with CameraX and ML Kit",
        "Designed custom Scanner Code UI to display results",
        "Created NFC reader function to extract passport chip data (DG1 & DG2)",
        "Processed and displayed extracted data in UI with J2000 support",
      ],
      technologies: ["Kotlin", "CameraX", "ML Kit", "NFC", "Android"],
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
      id="experience"
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Shaped by hands-on projects and constant learning, I focus on
            creating scalable, user-friendly applications.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className={`absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 hidden lg:block transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
            }`}
            style={{
              transformOrigin: "top",
              transitionDelay: isVisible ? "200ms" : "0ms",
            }}
          ></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-800 shadow-lg hidden lg:block transition-all duration-500 hover:scale-125 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                  style={{
                    transitionDelay: isVisible
                      ? `${400 + index * 200}ms`
                      : "0ms",
                  }}
                ></div>

                <div className="lg:ml-20">
                  <div
                    className={`bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 group ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-12"
                    }`}
                    style={{
                      transitionDelay: isVisible
                        ? `${600 + index * 200}ms`
                        : "0ms",
                    }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2 group-hover:-translate-x-2 transition-transform duration-300">
                          <a
                            title={exp.company}
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                          </a>
                          <span className="font-semibold text-lg">
                            {exp.company}
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center text-slate-500 dark:text-slate-400 text-sm space-y-1 sm:space-y-0 sm:space-x-4">
                          <div className="flex items-center hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-300">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-300">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 group-hover:text-slate-800 dark:group-hover:text-slate-100 transition-colors duration-300">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start group/achievement hover:translate-x-2 transition-transform duration-300"
                          >
                            <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/achievement:scale-125 transition-transform duration-300"></div>
                            <span className="text-slate-600 dark:text-slate-300 group-hover/achievement:text-slate-800 dark:group-hover/achievement:text-slate-100 transition-colors duration-300">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white hover:scale-110 transition-all duration-300 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
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

export default Experience;
