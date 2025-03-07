
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavHeader from "@/components/ui/nav-header";
import { Footer } from "@/components/ui/footer";
import { ChevronRight, Check, Calendar, Clock, BarChart } from "lucide-react";

const membershipPlans = [
  {
    id: 1,
    name: "Basic",
    price: 49,
    billing: "monthly",
    description: "Perfect for beginners looking to start their fitness journey.",
    features: [
      "Personalized workout plan",
      "Basic nutrition guidance",
      "Weekly check-ins",
      "Access to mobile app",
      "Access to workout library"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Premium",
    price: 99,
    billing: "monthly",
    description: "Our most popular plan for dedicated fitness enthusiasts.",
    features: [
      "Advanced personalized workout plan",
      "Custom nutrition plan",
      "Bi-weekly coach consultations",
      "Progress tracking dashboard",
      "Access to premium classes",
      "Priority support"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Elite",
    price: 199,
    billing: "monthly",
    description: "The ultimate fitness experience with maximum support.",
    features: [
      "Fully customized workout program",
      "Advanced nutrition coaching",
      "Weekly 1-on-1 sessions",
      "Body composition analysis",
      "Performance analytics",
      "24/7 coach access",
      "Exclusive workshops"
    ],
    popular: false
  }
];

const Plans = () => {
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
                  Membership Plans
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
                >
                  Choose the perfect plan for your fitness goals. All plans include access to personalized coaching and support to help you succeed.
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {membershipPlans.map((plan, index) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1), ease: "easeOut" }}
                    className={`glass-card overflow-hidden rounded-xl hover:translate-y-[-4px] transition-all duration-300 ${plan.popular ? 'ring-2 ring-fitness-500 dark:ring-fitness-400' : ''}`}
                  >
                    {plan.popular && (
                      <div className="bg-fitness-500 text-white dark:bg-fitness-600 dark:text-white py-1 text-center text-xs font-medium">
                        MOST POPULAR
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                      <div className="flex items-baseline mb-4">
                        <span className="text-3xl font-bold">${plan.price}</span>
                        <span className="text-gray-500 dark:text-gray-400 ml-1">/{plan.billing}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                      
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="mr-2 h-5 w-5 text-fitness-500 dark:text-fitness-400 flex-shrink-0" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button className={`w-full py-2 px-4 rounded-full flex items-center justify-center text-sm font-medium ${plan.popular ? 'bg-fitness-500 hover:bg-fitness-600 text-white' : 'border border-fitness-500/20 text-fitness-600 dark:text-fitness-400 hover:bg-fitness-500/10'} transition-all duration-300`}>
                        Get started
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-16">
                <div className="glass-card p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Need a custom plan?</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Contact us for custom corporate packages or specialized training programs tailored to your specific goals.
                      </p>
                    </div>
                    <button className="whitespace-nowrap py-2 px-6 rounded-full flex items-center text-sm font-medium bg-fitness-500 hover:bg-fitness-600 text-white transition-all duration-300">
                      Contact us
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Plans;
