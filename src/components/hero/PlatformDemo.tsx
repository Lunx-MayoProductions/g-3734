
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Globe, BarChart2, Upload, Terminal, Sparkles } from 'lucide-react';

const PlatformDemo = () => {
  return (
    <div className="relative max-w-5xl mx-auto mb-20">
      {/* Gradient background */}
      <div className="absolute inset-0 -m-10 bg-gradient-to-br from-convrt-purple/20 via-convrt-purple/20 to-convrt-purple/20 rounded-3xl blur-3xl opacity-40"></div>
      
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
        {/* Platform UI Header */}
        <div className="bg-white border-b border-gray-200 flex items-center px-6 py-3">
          <div className="flex space-x-1 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-lg font-bold text-convrt-purple">React Hosting Dashboard</div>
            <div className="flex items-center bg-green-50 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-xs font-medium text-green-700">All Systems Operational</span>
            </div>
          </div>
          
          <div className="ml-auto flex items-center space-x-4">
            <div className="flex items-center bg-convrt-purple/10 px-3 py-1 rounded-full">
              <Zap className="w-3 h-3 text-convrt-purple mr-1" />
              <span className="text-xs font-medium text-convrt-purple">Pro Plan</span>
            </div>
          </div>
        </div>
        
        {/* Main Content Area - React Hosting Dashboard */}
        <div className="bg-gray-50 p-6">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Panel - Deployment Process */}
            <div className="col-span-8 space-y-6">
              {/* Deploy New React App */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-convrt-dark-blue">Deploy New React App</h3>
                  <div className="bg-convrt-purple/10 text-convrt-purple px-3 py-1 rounded-lg text-sm font-medium">
                    Ready to Deploy
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Upload className="w-5 h-5 text-convrt-purple mr-3" />
                    <div className="flex-1">
                      <div className="font-medium text-convrt-dark-blue">my-awesome-react-app</div>
                      <div className="text-sm text-gray-500">Connected to GitHub • React 18 + Vite</div>
                    </div>
                    <div className="text-green-600 font-medium text-sm">✓ Ready</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg text-center">
                      <Terminal className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-blue-600">Build Optimized</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg text-center">
                      <Globe className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-green-600">CDN Ready</div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg text-center">
                      <Sparkles className="w-6 h-6 text-convrt-purple mx-auto mb-2" />
                      <div className="text-sm font-medium text-convrt-purple">SSL Secured</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-convrt-purple text-white py-3 rounded-lg font-medium flex items-center justify-center hover:bg-convrt-purple-hover transition-colors">
                    <Zap className="w-5 h-5 mr-2" />
                    Deploy Now - 30 Seconds
                  </button>
                </div>
              </div>
              
              {/* Live Deployment Status */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 bg-convrt-purple text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Live Deployment Status</h3>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm">Deploying...</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">Code Analysis Complete</span>
                      </div>
                      <span className="text-xs text-gray-500">2s</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">Dependencies Installed</span>
                      </div>
                      <span className="text-xs text-gray-500">8s</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">Production Build Created</span>
                      </div>
                      <span className="text-xs text-gray-500">12s</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-convrt-purple border-t-transparent rounded-full animate-spin mr-2"></div>
                        <span className="text-sm">Deploying to Global CDN</span>
                      </div>
                      <span className="text-xs text-gray-500">18s</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Globe className="w-4 h-4 text-green-600 mr-2" />
                        <span className="text-sm font-medium text-green-600">Live URL Ready</span>
                      </div>
                      <button className="text-convrt-purple text-sm font-medium hover:underline">
                        https://my-app.reacthosting.com
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Panel - Performance Metrics */}
            <div className="col-span-4 space-y-4">
              {/* Performance Score */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                  <BarChart2 className="w-4 h-4 mr-2" />
                  Performance Score
                </h3>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">98</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '98%'}}></div>
                  </div>
                  <div className="text-xs text-gray-500">Lighthouse Score</div>
                </div>
              </div>
              
              {/* Load Time */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Average Load Time</h3>
                <div className="text-center">
                  <div className="text-2xl font-bold text-convrt-purple">0.8s</div>
                  <div className="text-xs text-gray-500 mt-1">Globally</div>
                </div>
              </div>
              
              {/* Global Locations */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3">CDN Locations</h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>North America</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Europe</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Asia Pacific</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Australia</span>
                  </div>
                </div>
              </div>
              
              {/* Traffic Stats */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3">This Month</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-500">Visitors</span>
                    <span className="text-sm font-medium">24,891</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-500">Page Views</span>
                    <span className="text-sm font-medium">89,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-500">Uptime</span>
                    <span className="text-sm font-medium text-green-600">99.98%</span>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full text-left p-2 text-sm bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    View Analytics
                  </button>
                  <button className="w-full text-left p-2 text-sm bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    Custom Domain
                  </button>
                  <button className="w-full text-left p-2 text-sm bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    Environment Variables
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating UI Element */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -right-8 top-1/4 z-10"
      >
        <div className="animate-float bg-white/70 backdrop-blur-md p-3 rounded-xl shadow-xl border border-white/20 flex items-center">
          <div className="bg-green-500/20 rounded-lg p-2 mr-3">
            <Check className="w-4 h-4 text-green-500" />
          </div>
          <div>
            <div className="text-gray-800 text-xs font-medium">Deploy Complete!</div>
            <div className="text-gray-600 text-xs">98/100 Performance Score</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PlatformDemo;
