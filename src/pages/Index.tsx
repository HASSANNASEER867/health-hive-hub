
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavHeader from "@/components/ui/nav-header";
import { HeroSection } from "@/components/ui/hero-section";
import { Squares } from "@/components/ui/squares";
import { Testimonials } from "@/components/ui/testimonial-cards";
import { Features } from "@/components/ui/features";
import { CTASection } from "@/components/ui/cta-section";
import { Footer } from "@/components/ui/footer";

const testimonials = [
  {
    id: 1,
    testimonial: "Since joining FitPrime, I've lost 30 pounds and gained so much confidence. The personalized coaching made all the difference for me.",
    author: "Sarah Johnson",
    role: "Member for 6 months"
  },
  {
    id: 2,
    testimonial: "As a busy professional, I thought I'd never find time for fitness. FitPrime's flexible program fits perfectly into my schedule.",
    author: "Michael Chen", 
    role: "Member for 1 year"
  },
  {
    id: 3,
    testimonial: "The coaches at FitPrime truly understand fitness. They created a plan that works for my body and my goals, not a one-size-fits-all approach.",
    author: "Leila Rodriguez",
    role: "Member for 8 months"
  }
];

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div 
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-950 z-50"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <motion.div 
              animate={{ 
                rotate: 360,
                transition: { duration: 2, ease: "linear", repeat: Infinity }
              }}
              className="w-16 h-16 mb-4"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-fitness-500">
                <path d="M20.9999 11.9999C20.9999 16.9704 16.9704 20.9999 11.9999 20.9999C7.0294 20.9999 2.99994 16.9704 2.99994 11.9999C2.99994 7.0294 7.0294 2.99994 11.9999 2.99994" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-fitness-600 dark:text-fitness-400 font-medium"
            >
              Loading FitPrime...
            </motion.p>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex flex-col"
        >
          <div className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Squares 
                direction="diagonal"
                speed={0.5}
                squareSize={50}
                borderColor="rgba(59, 130, 246, 0.2)" 
                hoverFillColor="rgba(59, 130, 246, 0.1)"
              />
            </div>
            
            <div className="relative z-10">
              <NavHeader />
              <HeroSection 
                title="Transform Your Body"
                subtitle={{
                  regular: "Your fitness journey begins with ",
                  gradient: "expert coaching.",
                }}
                description="Get personalized workout plans, nutrition guidance, and expert coaching to help you reach your fitness goals faster and more effectively than ever before."
                ctaText="Start your journey"
                ctaSecondaryText="Learn more"
                bottomImage={{
                  light: "https://demo-fitness-app.vercel.app/fitness-dashboard-light.png",
                  dark: "https://demo-fitness-app.vercel.app/fitness-dashboard-dark.png",
                }}
                gridOptions={{
                  angle: 60,
                  opacity: 0.3,
                  cellSize: 60,
                  lightLineColor: "rgba(59, 130, 246, 0.2)",
                  darkLineColor: "rgba(59, 130, 246, 0.2)",
                }}
              />
            </div>
          </div>
          
          <Features />
          
          <Testimonials testimonials={testimonials} className="bg-gray-50 dark:bg-gray-900" />
          
          <CTASection />
          
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
