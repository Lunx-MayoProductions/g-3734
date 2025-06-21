
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertCircle, TrendingDown, Server } from 'lucide-react';

const ProblemStatement = () => {
  const problems = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "High Latency & Lag",
      description: "Traditional hosting providers leave your game servers with 200ms+ ping times, causing frustrating lag spikes that drive players away from your servers."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Complex Server Setup",
      description: "Hours spent configuring game servers, managing mods, and wrestling with control panels instead of focusing on building your gaming community."
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Poor Gaming Performance",
      description: "Shared hosting resources and outdated infrastructure cause your game servers to stutter and websites to crawl, especially during peak gaming hours."
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Server Downtime",
      description: "Unreliable hosting providers mean your game servers go offline during critical gaming sessions, frustrating your players and damaging your reputation."
    }
  ];

  return (
    <section className="py-24 bg-white" id="problem">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-600 mb-6">
            <AlertCircle className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">The Gaming Hosting Problem</span>
          </div>
          
          <h2 className="heading-lg text-convrt-dark-blue mb-6">
            Why Most Game Servers Are 
            <span className="text-red-500 font-extrabold"> Painfully Laggy</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gamers and developers spend countless hours building amazing gaming experiences, only to watch them fail due to poor hosting choices. Here's what's holding your servers back.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="text-red-500 mb-4">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-convrt-dark-blue mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-convrt-dark-blue mb-4">
              The Cost of Laggy Game Servers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">75%</div>
                <p className="text-gray-600">Players quit servers with over 150ms ping</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">60%</div>
                <p className="text-gray-600">Drop in player retention due to server lag</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">€500M</div>
                <p className="text-gray-600">Lost annually in EU gaming revenue due to poor hosting</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;
