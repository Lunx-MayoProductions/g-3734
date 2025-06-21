
import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Zap, Globe, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Connect Your Repo",
      description: "Link your GitHub repository or upload your React project directly. We support all React frameworks including Next.js, Vite, and Create React App.",
      color: "bg-blue-500",
      delay: 0
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Deploy",
      description: "Our optimized build system deploys your React app in under 30 seconds with automatic code splitting and performance optimization.",
      color: "bg-convrt-purple",
      delay: 0.2
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global CDN",
      description: "Your app is instantly distributed across our global edge network, ensuring blazing-fast load times for users worldwide.",
      color: "bg-green-500",
      delay: 0.4
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Monitor & Scale",
      description: "Real-time analytics and automatic scaling ensure your React app performs perfectly as your traffic grows.",
      color: "bg-orange-500",
      delay: 0.6
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white" id="how-it-works">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-purple/10 text-convrt-purple mb-6">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">How React Hosting Works</span>
          </div>
          
          <h2 className="heading-lg text-convrt-dark-blue mb-6">
            From Code to 
            <span className="text-convrt-purple font-extrabold"> Lightning Fast</span> in Minutes
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deploy your React applications with zero configuration and maximum performance. Our platform handles all the complexity so you can focus on building great features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: step.delay }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                
                <div className="absolute top-4 right-4 text-gray-200 font-bold text-4xl">
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-bold text-convrt-dark-blue mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-convrt-purple to-convrt-purple-light"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-convrt-dark-blue mb-6">
              Why Developers Choose React Hosting
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-convrt-purple mb-2">< 30s</div>
                <p className="text-gray-600 font-medium">Average Deploy Time</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-convrt-purple mb-2">99.9%</div>
                <p className="text-gray-600 font-medium">Uptime Guarantee</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-convrt-purple mb-2">180+</div>
                <p className="text-gray-600 font-medium">Global Edge Locations</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
