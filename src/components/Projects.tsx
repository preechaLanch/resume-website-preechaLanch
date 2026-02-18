import React, { useState, useEffect, useRef } from "react";
import { Github } from "lucide-react";

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "Notification Line Web Gmail",
      description:
        "A Next.js web application that monitors a Gmail inbox and sends notifications to a LINE group using the LINE Notify API. Features include OAuth2 Gmail integration, real-time email monitoring, a web dashboard for configuration, and uses Supabase as the database backend. The web app also provides notifications for users who are not logged in with Gmail or LINE.",
      image:
        "https://repository-images.githubusercontent.com/781964013/2e2e2e2e-2e2e-4e2e-8e2e-2e2e2e2e2e2e",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Gmail API",
        "LINE Notify API",
        "OAuth2",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/preechaLanch/notification-line-web-gmail-preecha",
      featured: false,
    },
    {
      title: "MEMEMASH (Mini Project)",
      description:
        "MEMEMASH is a web application designed to compare and rank memes to determine which one is the best. It features meme-versus battles, daily like tracking, ranking leaderboard, and an Elo Rating Algorithm to calculate meme scores dynamically.",
      image:
        "https://i.ytimg.com/vi/Zr-qM5Vrd0g/maxresdefault.jpg",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MySQL",
        "Firebase",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/preeZa/Backend-mememash/tree/main",
      featured: true,
    },
    {
      title: "Pet Fluffy (Senior Project)",
      description:
        "PetFluffy is a mobile application developed with Flutter to solve the problem of finding mating partners for pets. It features matchmaking, real-time notifications, and location display of nearby pets for breeding purposes.",

      image:
        "https://images.pexels.com/photos/4587990/pexels-photo-4587990.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "Flutter",
        "Figma",
        "Google Maps API",
        "Firebase Authentication",
        "Firestore",
        "Firebase Cloud Messaging",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/preeZa/Pet_Fluffy",
      featured: true,
    },
    {
      title: "EasyPass OCR & NFC",
      description:
        "A Kotlin-based mobile application for scanning and verifying travel documents in real-time using CameraX, ML Kit, and NFC chip data extraction (DG1 & DG2).",
      image:
        "https://images.pexels.com/photos/5077045/pexels-photo-5077045.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Kotlin", "CameraX", "ML Kit", "NFC", "Android"],
      liveUrl: "#",
      githubUrl: "https://github.com/preeZa/OCRpassport",
      featured: false,
    },
    {
      title: "XO (Tic-Tac-Toe)",
      description:
        "A Flutter Tic-Tac-Toe app with two modes: local 2-player and AI. Supports variable board sizes. Uses Minimax for 3×3 and alpha-beta pruning from 4×4 upward for efficient decision-making. Clean, responsive UI with optional move hints and win-streak tracking.",
      image:
        "https://images.pexels.com/photos/163064/play-stone-network-tic-tac-toe-163064.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "Flutter",
        "Dart",
        "Firestore",
        "Minimax Algorithm",
        "alpha-beta pruning",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/preeZa/xo_prreecha",
      featured: false,
    },
  ];
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

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
      id="projects"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A showcase of applications I've built, from concept to deployment,
            demonstrating my full-stack development capabilities.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + index * 200}ms` : "0ms",
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {/* <a
                    href={project.liveUrl}
                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200"
                  >
                    <ExternalLink className="w-5 h-5 text-slate-700" />
                  </a> */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200"
                  >
                    <Github className="w-5 h-5 text-slate-700" />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 group-hover:text-slate-800 dark:group-hover:text-slate-100 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white hover:scale-110 transition-all duration-300 cursor-default"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {/* <a
                    href={project.liveUrl}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 hover:scale-105 transition-all duration-200"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Live Demo
                  </a> */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3
            className={`text-2xl font-bold text-slate-900 dark:text-white text-center mb-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
          >
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className={`bg-slate-50 dark:bg-slate-800 rounded-xl p-6 hover:bg-white dark:hover:bg-slate-700 hover:shadow-lg hover:scale-105 transition-all duration-300 group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${800 + index * 100}ms` : "0ms",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:scale-125 transition-all duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 group-hover:text-slate-800 dark:group-hover:text-slate-100 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs hover:bg-slate-300 dark:hover:bg-slate-600 hover:scale-110 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs hover:bg-slate-300 dark:hover:bg-slate-600 hover:scale-110 transition-all duration-300 cursor-default">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
