
import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Zap, Globe, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Choose Your Server",
      description: "Select from Minecraft, CS2, Rust, ARK, or any game server. Upload your website files or connect your repository with one-click deployment.",
      color: "bg-blue-500",
      delay: 0
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Deployment",
      description: "Our German datacenter deploys your game servers and websites in under 30 seconds with automatic optimization and mod support.",
      color: "bg-convrt-purple",
      delay: 0.2
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "European Network",
      description: "Your servers are distributed across our European edge network, ensuring sub-50ms ping times for players across Germany and EU.",
      color: "bg-green-500",
      delay: 0.4
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Monitor & Scale",
      description: "Real-time server monitoring and automatic scaling ensure your game servers perform perfectly as your player base grows.",
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
            <span className="text-sm font-medium">How ReactHosting.de Works</span>
          </div>
          
          <h2 className="heading-lg text-convrt-dark-blue mb-6">
            From Setup to 
            <span className="text-convrt-purple font-extrabold"> Game-Ready</span> in Minutes
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deploy your game servers and websites with zero configuration and maximum performance. Our platform handles all the complexity so you can focus on building your gaming community.
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
              Why Gamers Choose ReactHosting.de
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-convrt-purple mb-2">{"< 50ms"}</div>
                <p className="text-gray-600 font-medium">Average Ping Time in EU</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-convrt-purple mb-2">99.9%</div>
                <p className="text-gray-600 font-medium">Server Uptime Guarantee</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-convrt-purple mb-2">24/7</div>
                <p className="text-gray-600 font-medium">German Support Team</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
