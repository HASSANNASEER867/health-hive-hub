
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Dumbbell, Heart, ChevronRight, User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<{
    left: number;
    width: number;
    opacity: number;
  }>>;
  icon?: React.ReactNode;
  to: string;
}

const Tab: React.FC<TabProps> = ({ children, setPosition, icon, to }) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 flex items-center cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      <Link to={to} className="flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-fitness-500 md:h-12"
    />
  );
};

interface NavHeaderProps {
  className?: string;
}

function NavHeader({ className }: NavHeaderProps) {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className={cn("flex justify-center items-center p-5", className)}>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-4xl mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex items-center">
          <Link to="/" className="flex items-center">
            <Dumbbell className="h-8 w-8 mr-2 text-fitness-500" />
            <span className="text-xl font-geist font-bold">FitPrime</span>
          </Link>
        </motion.div>
        
        <ul
          className="relative mx-auto hidden md:flex w-fit rounded-full border border-white/10 dark:border-white/5 bg-black/10 dark:bg-white/5 backdrop-blur-md p-1"
          onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
        >
          <Tab setPosition={setPosition} to="/workouts" icon={<Dumbbell className="w-4 h-4" />}>Workouts</Tab>
          <Tab setPosition={setPosition} to="/nutrition" icon={<Heart className="w-4 h-4" />}>Nutrition</Tab>
          <Tab setPosition={setPosition} to="/plans" icon={<Calendar className="w-4 h-4" />}>Plans</Tab>
          <Tab setPosition={setPosition} to="/coaches" icon={<User className="w-4 h-4" />}>Coaches</Tab>

          <Cursor position={position} />
        </ul>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex items-center space-x-4">
          <button className="py-2 px-4 rounded-full hidden md:flex items-center text-sm font-medium text-fitness-500 border border-fitness-500/20 hover:bg-fitness-500/10 transition-all duration-300">
            Sign in
          </button>
          <button className="py-2 px-4 rounded-full flex items-center text-sm font-medium text-white bg-fitness-500 hover:bg-fitness-600 transition-all duration-300">
            Get started <ChevronRight className="ml-1 w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default NavHeader;
