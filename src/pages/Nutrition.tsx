
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavHeader from "@/components/ui/nav-header";
import { Footer } from "@/components/ui/footer";
import { ChevronRight, Heart, Utensils, ScrollText, Apple } from "lucide-react";

const nutritionServices = [
  {
    id: 1,
    title: "Personalized Meal Plans",
    description: "Custom nutrition plans designed for your specific goals, preferences, and dietary requirements.",
    features: ["Calorie and macronutrient targets", "Food preference consideration", "Weekly grocery lists"],
    icon: <ScrollText className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Nutrition Coaching",
    description: "One-on-one guidance from certified nutrition coaches to help you develop sustainable eating habits.",
    features: ["Bi-weekly check-ins", "Adjustment based on progress", "Accountability support"],
    icon: <Utensils className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Dietary Analysis",
    description: "In-depth analysis of your current eating patterns to identify areas for improvement.",
    features: ["Detailed nutrition report", "Specific recommendations", "Follow-up reviews"],
    icon: <Heart className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Recipe Library",
    description: "Access to hundreds of healthy, delicious recipes that align with your nutrition goals.",
    features: ["Searchable database", "Meal prep guides", "Quick & easy options"],
    icon: <Apple className="w-6 h-6" />
  }
];

const Nutrition = () => {
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
                  Nutrition Services
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
                >
                  Proper nutrition is the foundation of any successful fitness journey. Our expert nutritionists provide personalized guidance to fuel your workouts and optimize results.
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {nutritionServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1), ease: "easeOut" }}
                    className="glass-card p-6 hover:translate-y-[-4px] transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 p-3 bg-fitness-500/10 dark:bg-fitness-500/20 rounded-xl text-fitness-600 dark:text-fitness-400 mr-4">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                        <ul className="space-y-2 mb-4">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-2 text-fitness-500">•</span>
                              <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <a href="#" className="flex items-center text-fitness-600 dark:text-fitness-400 font-medium text-sm group">
                          Learn more
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
                      Schedule nutrition consultation
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

export default Nutrition;
