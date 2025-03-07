
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  className?: string;
}

export function CTASection({ className }: CTASectionProps) {
  return (
    <section className={cn("py-20 relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-fitness-500/5 dark:bg-fitness-950/30" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="glass-card overflow-hidden rounded-3xl">
          <div className="p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-fitness-400/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-fitness-400/10 rounded-full blur-3xl" />
            
            <div className="max-w-2xl relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your fitness journey?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Start your personalized coaching experience today and achieve the results you've always wanted. 
                Our expert coaches are ready to guide you every step of the way.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#2563EB_50%,#3B82F6_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                    <a
                      href="#"
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-fitness-400/30 to-transparent dark:from-zinc-300/5 dark:via-fitness-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-fitness-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-fitness-400/30 transition-all sm:w-auto py-3 px-8"
                    >
                      Get started now
                      <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </span>
                <a href="#" className="inline-flex items-center justify-center py-3 px-6 rounded-full border border-fitness-500/20 text-fitness-600 dark:text-fitness-400 hover:bg-fitness-500/10 transition-all duration-300">
                  View pricing
                </a>
              </div>
            </div>
            
            <div className="w-full md:w-auto flex-shrink-0 relative z-10">
              <div className="relative h-64 w-64 md:h-80 md:w-80 mx-auto">
                <div className="absolute inset-0 bg-fitness-500/20 dark:bg-fitness-400/10 rounded-full blur-2xl" />
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Personal trainer" 
                  className="rounded-2xl object-cover h-full w-full relative z-10 border border-white/10 dark:border-white/5"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
