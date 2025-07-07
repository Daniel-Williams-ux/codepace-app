"use client";
import { useEffect, useState } from "react";

type Sparkle = {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
};

export default function SparkleBackground() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const count = 20;
    const newSparkles: Sparkle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 8 + Math.random() * 12,
      delay: Math.random() * 5,
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute animate-ping-slow"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="opacity-30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L13.09 8.26L19 9.27L14.5 13.97L15.91 20L12 16.9L8.09 20L9.5 13.97L5 9.27L10.91 8.26L12 2Z" />
          </svg>
        </div>
      ))}
    </div>
  );
}