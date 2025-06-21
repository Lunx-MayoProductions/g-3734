
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertCircle, TrendingDown, Server } from 'lucide-react';

const ProblemStatement = () => {
  const problems = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Slow Loading Times",
      description: "Traditional hosting platforms leave your React apps crawling with 3-5 second load times, driving users away before they even see your content."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Complex Deployment",
      description: "Hours spent configuring servers, managing build processes, and wrestling with deployment pipelines instead of building amazing features."
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Poor Performance",
      description: "Shared hosting resources and outdated infrastructure cause your React apps to lag, especially during traffic spikes."
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Downtime Issues",
      description: "Unreliable hosting providers mean your apps go offline when your users need them most, damaging your reputation."
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
            <span className="text-sm font-medium">The React Hosting Problem</span>
          </div>
          
          <h2 className="heading-lg text-convrt-dark-blue mb-6">
            Why Most React Apps Are 
            <span className="text-red-500 font-extrabold"> Painfully Slow</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Developers spend countless hours building amazing React applications, only to watch them fail due to poor hosting choices. Here's what's holding your apps back.
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
              The Cost of Slow React Hosting
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">40%</div>
                <p className="text-gray-600">Users abandon sites that take over 3 seconds to load</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">70%</div>
                <p className="text-gray-600">Drop in conversions due to slow page speeds</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">$2.6B</div>
                <p className="text-gray-600">Lost annually due to slow e-commerce sites</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;
