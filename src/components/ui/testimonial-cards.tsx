
"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: string;
  author: string;
  role?: string;
  id: number;
  position: "front" | "middle" | "back";
  handleShuffle: () => void;
}

export function TestimonialCard({ 
  handleShuffle, 
  testimonial, 
  position, 
  id, 
  author,
  role 
}: TestimonialCardProps) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%"
      }}
      drag={isFront}
      dragElastic={0.35}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e, info) => {
        dragRef.current = info.point.x;
      }}
      onDragEnd={(e, info) => {
        if (dragRef.current - info.point.x > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={`https://i.pravatar.cc/128?img=${id}`}
        alt={`Avatar of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-slate-700 bg-slate-200 object-cover"
      />
      <span className="text-center text-lg italic text-slate-400">"{testimonial}"</span>
      <span className="text-center text-sm font-medium text-indigo-400">{author}</span>
      {role && <span className="text-center text-xs text-slate-500">{role}</span>}
    </motion.div>
  );
}

interface TestimonialsProps {
  testimonials: {
    id: number;
    testimonial: string;
    author: string;
    role?: string;
  }[];
  className?: string;
}

export function Testimonials({ testimonials, className }: TestimonialsProps) {
  const [positions, setPositions] = React.useState<("front" | "middle" | "back")[]>(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    newPositions.unshift(newPositions.pop() as "front" | "middle" | "back");
    setPositions(newPositions);
  };

  return (
    <section className={cn("py-24 relative overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-3"
          >
            <span className="px-4 py-1.5 text-xs font-medium rounded-full text-fitness-800 dark:text-fitness-200 bg-fitness-100 dark:bg-fitness-900">
              Success Stories
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What our members are saying
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Real results from real people who have transformed their lives with our fitness coaching
          </motion.p>
        </div>
        
        <div className="flex justify-center">
          <div className="relative h-[450px] w-[350px] md:w-[500px]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                {...testimonial}
                handleShuffle={handleShuffle}
                position={positions[index % positions.length]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
