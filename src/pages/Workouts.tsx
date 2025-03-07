
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavHeader from "@/components/ui/nav-header";
import { Footer } from "@/components/ui/footer";
import { ChevronRight, Dumbbell, Clock, Calendar, Target } from "lucide-react";

const workoutPlans = [
  {
    id: 1,
    title: "Beginner Strength Training",
    description: "Perfect for those new to fitness. Build foundational strength with these beginner-friendly workouts.",
    duration: "30 min sessions",
    frequency: "3x per week",
    level: "Beginner",
    icon: <Dumbbell className="w-6 h-6" />
  },
  {
    id: 2,
    title: "HIIT Cardio Blast",
    description: "High intensity interval training to maximize calorie burn and improve cardiovascular health.",
    duration: "20-30 min sessions",
    frequency: "4x per week",
    level: "Intermediate",
    icon: <Clock className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Advanced Muscle Building",
    description: "Take your strength to the next level with this hypertrophy-focused program for experienced lifters.",
    duration: "45-60 min sessions",
    frequency: "5x per week",
    level: "Advanced",
    icon: <Target className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Functional Fitness",
    description: "Improve everyday movement patterns with exercises that enhance stability, mobility and strength.",
    duration: "40 min sessions",
    frequency: "3-4x per week",
    level: "All levels",
    icon: <Calendar className="w-6 h-6" />
  }
];

const Workouts = () => {
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex flex-col"
      >
        <NavHeader />
        
        <main className="flex-grow">
          <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-fitness-500/5 dark:bg-fitness-950/30" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-fitness-400/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-fitness-400/10 rounded-full blur-3xl" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  Expert-designed Workout Programs
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
                >
                  Choose from a variety of workout programs designed by certified fitness professionals to help you reach your goals faster and more effectively.
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {workoutPlans.map((plan, index) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1), ease: "easeOut" }}
                    className="glass-card p-6 hover:translate-y-[-4px] transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 p-3 bg-fitness-500/10 dark:bg-fitness-500/20 rounded-xl text-fitness-600 dark:text-fitness-400 mr-4">
                        {plan.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-fitness-100 dark:bg-fitness-800/30 text-fitness-800 dark:text-fitness-200">
                            <Clock className="w-3 h-3 mr-1" /> {plan.duration}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-fitness-100 dark:bg-fitness-800/30 text-fitness-800 dark:text-fitness-200">
                            <Calendar className="w-3 h-3 mr-1" /> {plan.frequency}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-fitness-100 dark:bg-fitness-800/30 text-fitness-800 dark:text-fitness-200">
                            <Target className="w-3 h-3 mr-1" /> {plan.level}
                          </span>
                        </div>
                        <a href="#" className="flex items-center text-fitness-600 dark:text-fitness-400 font-medium text-sm group">
                          View workout details
                          <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-16 text-center">
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#2563EB_50%,#3B82F6_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                    <a
                      href="#"
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-fitness-400/30 to-transparent dark:from-zinc-300/5 dark:via-fitness-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-fitness-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-fitness-400/30 transition-all sm:w-auto py-3 px-8"
                    >
                      Get personalized workout plan
                      <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </span>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Workouts;
