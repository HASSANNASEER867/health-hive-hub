
import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  handleShuffle: () => void;
  testimonial: string;
  position: "front" | "middle" | "back";
  id: number;
  author: string;
  role?: string;
  className?: string;
}

export function TestimonialCard({ 
  handleShuffle, 
  testimonial, 
  position, 
  id, 
  author,
  role,
  className
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
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%",
        scale: position === "front" ? 1 : position === "middle" ? 0.95 : 0.9,
        opacity: position === "front" ? 1 : position === "middle" ? 0.8 : 0.6
      }}
      drag={isFront}
      dragElastic={0.35}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e) => {
        dragRef.current = e.clientX;
      }}
      onDragEnd={(e) => {
        if (dragRef.current - e.clientX > 50) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={cn(`absolute left-0 top-0 grid h-[450px] w-[350px] select-none space-y-6 rounded-2xl p-6 shadow-xl 
        backdrop-blur-md bg-white/10 dark:bg-slate-800/20 border-[1px] border-white/20 dark:border-slate-700/50
        ${isFront ? "cursor-grab active:cursor-grabbing" : ""}`, className)}
    >
      <img
        src={`https://i.pravatar.cc/128?img=${id}`}
        alt={`Avatar of ${author}`}
        className="pointer-events-none mx-auto h-24 w-24 rounded-full border border-white/20 dark:border-slate-700/50 bg-slate-200 object-cover"
      />
      <span className="text-center text-lg italic text-gray-900 dark:text-slate-200">"{testimonial}"</span>
      <div className="text-center">
        <span className="block text-base font-medium text-fitness-600 dark:text-fitness-400">{author}</span>
        {role && <span className="text-sm text-gray-600 dark:text-gray-400">{role}</span>}
      </div>
      {isFront && (
        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
            <span className="mr-2">Swipe to see more</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      )}
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
  const [positions, setPositions] = React.useState(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    newPositions.push(newPositions.shift() as string);
    setPositions(newPositions);
  };

  return (
    <div className={cn("relative overflow-hidden py-24 px-8", className)}>
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto text-center mb-16">
          <h3 className="text-sm uppercase tracking-wider text-fitness-600 dark:text-fitness-400 mb-3 font-medium">Testimonials</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What our clients say</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Real stories from real people who have transformed their lives with our fitness coaching program.
          </p>
        </div>
        
        <div className="relative mx-auto h-[450px] w-[350px] md:h-[450px] md:w-[350px]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
              handleShuffle={handleShuffle}
              position={positions[index % positions.length] as "front" | "middle" | "back"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
