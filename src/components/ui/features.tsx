
import { motion } from "framer-motion";
import { Dumbbell, ArrowRight, Calendar, Heart, User, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  className?: string;
}

function FeatureCard({ title, description, icon, delay = 0, className }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "glass-card p-6 flex flex-col space-y-4 hover:translate-y-[-4px] transition-all duration-300",
        className
      )}
    >
      <div className="p-3 bg-fitness-500/10 dark:bg-fitness-500/20 w-fit rounded-xl text-fitness-600 dark:text-fitness-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
      <a href="#" className="flex items-center text-fitness-600 dark:text-fitness-400 font-medium text-sm group pt-2">
        Learn more{" "}
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </motion.div>
  );
}

export function Features() {
  const features = [
    {
      title: "Personalized Workouts",
      description: "Get custom workout plans designed specifically for your goals, fitness level, and available equipment.",
      icon: <Dumbbell className="w-6 h-6" />,
      delay: 0.1
    },
    {
      title: "Nutrition Guidance",
      description: "Receive tailored nutrition advice and meal plans that complement your training for optimal results.",
      icon: <Heart className="w-6 h-6" />,
      delay: 0.2
    },
    {
      title: "Progress Tracking",
      description: "Track your fitness journey with detailed metrics, milestones, and visual progress indicators.",
      icon: <Calendar className="w-6 h-6" />,
      delay: 0.3
    },
    {
      title: "Expert Coaching",
      description: "Learn from certified trainers who provide feedback, form corrections, and motivational support.",
      icon: <User className="w-6 h-6" />,
      delay: 0.4
    },
    {
      title: "Flexible Membership",
      description: "Choose from various membership options that suit your schedule and budget requirements.",
      icon: <DollarSign className="w-6 h-6" />,
      delay: 0.5
    },
    {
      title: "Community Support",
      description: "Join a community of like-minded individuals to share experiences and stay motivated.",
      icon: <Users className="w-6 h-6" />,
      delay: 0.6
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-fitness-400/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-fitness-400/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-3"
          >
            <span className="px-4 py-1.5 text-xs font-medium rounded-full text-fitness-800 dark:text-fitness-200 bg-fitness-100 dark:bg-fitness-900">
              Why Choose Us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Everything you need for your fitness journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Comprehensive tools and expert guidance to help you transform your body
            and achieve lasting results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Users(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
