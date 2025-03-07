
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavHeader from "@/components/ui/nav-header";
import { Footer } from "@/components/ui/footer";
import { ChevronRight, Star, Award, GraduationCap } from "lucide-react";

const coaches = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Head Strength Coach",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    bio: "Alex has 10+ years experience as a strength coach and holds multiple certifications including CSCS and NSCA. Specializes in strength training and athletic performance.",
    specialties: ["Strength Training", "Athletic Performance", "Injury Prevention"],
    certifications: ["CSCS", "NSCA-CPT", "Precision Nutrition Level 2"]
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Nutrition Coach",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    bio: "Sarah is a certified nutritionist with a background in sports nutrition. She helps clients optimize their nutrition for both performance and long-term health.",
    specialties: ["Weight Management", "Sports Nutrition", "Meal Planning"],
    certifications: ["MS in Nutrition", "Certified Sports Nutritionist", "Precision Nutrition Level 2"]
  },
  {
    id: 3,
    name: "Marcus Williams",
    role: "Mobility & Recovery Specialist",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e6aa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    bio: "Marcus specializes in mobility, flexibility and recovery techniques. His background in physical therapy helps clients move better and recover faster.",
    specialties: ["Mobility Training", "Recovery Techniques", "Injury Rehabilitation"],
    certifications: ["DPT", "NASM-CES", "FRC Mobility Specialist"]
  },
  {
    id: 4,
    name: "Tanya Rodriguez",
    role: "HIIT & Conditioning Coach",
    image: "https://images.unsplash.com/photo-1597347316205-38311c2351bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    bio: "Tanya brings energy and expertise to her high-intensity training programs. Former competitive athlete with a passion for helping clients push their limits safely.",
    specialties: ["HIIT Training", "Cardio Conditioning", "Group Fitness"],
    certifications: ["ACE-CPT", "ACSM-CPT", "CrossFit Level 2"]
  }
];

const Coaches = () => {
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
                  Meet Our Expert Coaches
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
                >
                  Our team of certified fitness professionals is dedicated to helping you achieve your goals through personalized coaching and support.
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {coaches.map((coach, index) => (
                  <motion.div
                    key={coach.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1), ease: "easeOut" }}
                    className="glass-card p-6 hover:translate-y-[-4px] transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="w-full md:w-1/3 flex-shrink-0">
                        <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                          <img 
                            src={coach.image} 
                            alt={coach.name} 
                            className="object-cover h-full w-full"
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-2/3">
                        <h3 className="text-xl font-semibold mb-1">{coach.name}</h3>
                        <p className="text-fitness-600 dark:text-fitness-400 font-medium text-sm mb-4">{coach.role}</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{coach.bio}</p>
                        
                        <div className="mb-4">
                          <div className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                            <Star className="w-4 h-4 mr-1 text-fitness-500" /> SPECIALTIES
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {coach.specialties.map((specialty, idx) => (
                              <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-fitness-100 dark:bg-fitness-800/30 text-fitness-800 dark:text-fitness-200">
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                            <Award className="w-4 h-4 mr-1 text-fitness-500" /> CERTIFICATIONS
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {coach.certifications.map((cert, idx) => (
                              <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800/30 text-gray-800 dark:text-gray-200">
                                <GraduationCap className="w-3 h-3 mr-1" /> {cert}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <a href="#" className="flex items-center text-fitness-600 dark:text-fitness-400 font-medium text-sm group">
                          Book a session
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
                      View all coaches
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

export default Coaches;
