import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
interface Dot {
  id: number;
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  speed: number;
}

const FloatingDots: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDark = useTheme();
  const [dots, setDots] = useState<Dot[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    // Create dots
    const createDots = () => {
      const newDots: Dot[] = [];
      const dotCount = 100;

      for (let i = 0; i < dotCount; i++) {
        newDots.push({
          id: i,
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          baseX: Math.random() * rect.width,
          baseY: Math.random() * rect.height,
          size: Math.random() * 6 + 2,
          speed: Math.random() * 0.5 + 0.1,
        });
      }
      setDots(newDots);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const animate = () => {
      if (dots.length === 0) return;

      const mouse = mouseRef.current;

      dots.forEach((dot, index) => {
        // Mouse attraction effect
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          dot.x += dx * force * 0.01;
          dot.y += dy * force * 0.01;
        } else {
          // Return to base position
          dot.x += (dot.baseX - dot.x) * 0.005;
          dot.y += (dot.baseY - dot.y) * 0.005;
        }

        // Floating animation
        dot.baseX += Math.sin(Date.now() * 0.001 + index) * dot.speed;
        dot.baseY += Math.cos(Date.now() * 0.0015 + index) * dot.speed;

        // Keep dots in bounds
        if (dot.baseX > rect.width) dot.baseX = 0;
        if (dot.baseX < 0) dot.baseX = rect.width;
        if (dot.baseY > rect.height) dot.baseY = 0;
        if (dot.baseY < 0) dot.baseY = rect.height;

        // Update DOM element
        const dotElement = container.children[index] as HTMLElement;
        if (dotElement) {
          dotElement.style.transform = `translate(${dot.x}px, ${dot.y}px)`;
          const opacity = distance < maxDistance ? 0.8 : 0.4;
          dotElement.style.opacity = opacity.toString();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      createDots();
    };

    createDots();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Start animation after dots are created
    const animationTimer = setTimeout(() => {
      animate();
    }, 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      clearTimeout(animationTimer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dots.length]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ overflow: "hidden" }}
    >
      {dots.map((dot) => (
        <div
          key={dot.id}
          className={`absolute rounded-full transition-colors duration-500 ${
            isDark
              ? "bg-gradient-to-r from-blue-400 to-purple-500"
              : "bg-gradient-to-r from-blue-500 to-blue-600"
          }`}
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            left: 0,
            top: 0,
            transform: `translate(${dot.x}px, ${dot.y}px)`,
            opacity: 0.4,
            boxShadow: isDark
              ? "0 0 10px rgba(96, 165, 250, 0.3)"
              : "0 0 10px rgba(59, 130, 246, 0.3)",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingDots;
