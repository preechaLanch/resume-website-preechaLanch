import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, Github } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-300 dark:text-slate-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

            <div className="space-y-6 mb-8">
              <div
                className={`flex items-center group hover:translate-x-2 transition-all duration-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
              >
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-slate-300 dark:text-slate-400 group-hover:text-white transition-colors duration-300">
                    preecha.lanch@gmail.com
                  </p>
                </div>
              </div>

              <div
                className={`flex items-center group hover:translate-x-2 transition-all duration-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
              >
                <div className="w-12 h-12 bg-emerald-600 dark:bg-emerald-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-slate-300 dark:text-slate-400 group-hover:text-white transition-colors duration-300">
                    063-2537757
                  </p>
                </div>
              </div>

              <div
                className={`flex items-center group hover:translate-x-2 transition-all duration-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
              >
                <div className="w-12 h-12 bg-purple-600 dark:bg-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-slate-300 dark:text-slate-400 group-hover:text-white transition-colors duration-300">
                    Chon Buri, Thailand
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "700ms" : "0ms" }}
            >
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/preechaLanch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-700 dark:hover:bg-slate-600 hover:scale-110 hover:rotate-6 transition-all duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div
                  className={`transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-slate-600 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:scale-105 transition-all duration-200 text-white"
                    placeholder="Your full name"
                  />
                </div>

                <div
                  className={`transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isVisible ? "700ms" : "0ms" }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-slate-600 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:scale-105 transition-all duration-200 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div
                className={`transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
              >
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-slate-600 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:scale-105 transition-all duration-200 text-white"
                  placeholder="What's this about?"
                />
              </div>

              <div
                className={`transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isVisible ? "900ms" : "0ms" }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-slate-600 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:scale-105 transition-all duration-200 resize-none text-white"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isVisible ? "1000ms" : "0ms" }}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
