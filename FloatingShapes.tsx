import React from 'react';
import { motion } from 'framer-motion';

const FloatingShapes: React.FC = () => {
  const shapes = [
    { size: 60, delay: 0, duration: 8 },
    { size: 80, delay: 2, duration: 10 },
    { size: 40, delay: 4, duration: 6 },
    { size: 100, delay: 1, duration: 12 },
    { size: 50, delay: 3, duration: 9 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute bg-gradient-to-r from-primary-400/10 to-electric-400/10 rounded-full blur-sm"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;