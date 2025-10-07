import React, { useState, useEffect, useRef } from "react";
import { Code, Users, Lightbulb, Target } from "lucide-react";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description:
        "Hands-on experience with React, Node.js, TypeScript, and SQL/NoSQL databases (MySQL, Firebase). Skilled in building responsive UIs with Tailwind CSS and cross-platform mobile apps using Flutter and Dart.",
    },
    {
      icon: Users,
      title: "Collaboration & Growth",
      description:
        "Enjoy working in team settings, collaborating on GitHub, reviewing code, and learning from others. Open to feedback and committed to continuous improvement.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Mindset",
      description:
        "Curious about new frameworks and tools, always exploring ways to improve performance, scalability, and user experience through creative problem-solving.",
    },
    {
      icon: Target,
      title: "Project Oriented",
      description:
        "Built several personal and academic projects, including web apps and mobile apps, focusing on real-world use cases such as authentication, database management, and responsive design.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      id="about"
      className="py-14 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I’m a developer who loves learning, enjoys creating new solutions,
            and strives to make every user experience meaningful.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            <div className="prose prose-lg text-slate-600 dark:text-slate-300">
              <p className="text-xl leading-relaxed mb-6 hover:text-slate-800 dark:hover:text-slate-100 transition-colors duration-300">
                I’m an enthusiastic full-stack developer with a strong
                foundation in web and mobile technologies. Skilled in React,
                Node.js, and TypeScript for both frontend and backend
                development. Experienced with relational and cloud databases
                (MySQL, Firebase), and cross-platform mobile applications using
                Flutter and Dart. I enjoy building clean, user-friendly
                applications from the ground up.
              </p>
              <p className="leading-relaxed mb-6 hover:text-slate-800 dark:hover:text-slate-100 transition-colors duration-300">
                Through personal and academic projects, I've gained hands-on
                experience in designing responsive UIs with Tailwind CSS,
                creating RESTful APIs, and managing data with relational and
                cloud databases. I'm passionate about writing clean,
                maintainable code and continuously learning to stay up-to-date
                with new tools and best practices.
              </p>
              <p className="leading-relaxed hover:text-slate-800 dark:hover:text-slate-100 transition-colors duration-300">
                When I'm not coding, I like exploring new technologies,
                contributing to side projects, and finding creative ways to
                solve real-world problems through software.
              </p>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            <div className=" w-full max-w-lg h-auto mx-auto px-4 sm:px-6 lg:px-8  flex items-center justify-center hover:scale-105 hover:rotate-2 transition-all duration-500 group">
              <img
                className="rounded-2xl"
                src="https://scontent.futh1-1.fna.fbcdn.net/v/t39.30808-6/471355851_634606992582667_4583594412758378618_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=SrcPJSTrcTsQ7kNvwF4s5yG&_nc_oc=Adk3A-THQmrJr-3mMT4OyH25q8qpoH7tNTB2DnUmIaJPoayYv37AsRwxRNv8r-sz8zKyaMGrJwHpsbA9t91OjW20&_nc_zt=23&_nc_ht=scontent.futh1-1.fna&_nc_gid=OODnAjQPVL1w61mXysiNsg&oh=00_AfbTgrzgf4TIgLOGbHZsAHQ_VAq8_o9D3GUY7dJ3bDnJZw&oe=68DA8CDE"
              />
            </div>
            <div className="absolute -top-4 -right-1 w-24 h-24 bg-emerald-500/20 dark:bg-emerald-400/20 rounded-full animate-pulse"></div>
            <div
              className="absolute -bottom-4 -left-0 w-20 h-20 bg-blue-500/20 dark:bg-blue-400/20 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`text-center group hover:scale-105 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${600 + index * 150}ms` : "0ms",
              }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <item.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-100 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
