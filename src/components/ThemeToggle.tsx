import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300 flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun
          className={`absolute inset-0 w-6 h-6 text-amber-500 transition-all duration-300 ${
            isDark
              ? "opacity-0 rotate-90 scale-0"
              : "opacity-100 rotate-0 scale-100"
          }`}
        />
        <Moon
          className={`absolute inset-0 w-6 h-6 text-blue-400 transition-all duration-300 ${
            isDark
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-90 scale-0"
          }`}
        />
      </div>
    </button>
  );
};
export default ThemeToggle;
