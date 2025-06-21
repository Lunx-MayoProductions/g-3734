
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Max Schmidt",
      role: "Minecraft Server Owner",
      company: "GermanCraft Network",
      content: "ReactHosting.de transformed our Minecraft server performance. What used to be 150ms ping is now under 30ms, and our player count doubled! The German support team is incredibly helpful.",
      rating: 5,
      avatar: "/lovable-uploads/50d7bc89-98fd-49a5-b67f-94230c5d3ca5.png"
    },
    {
      name: "Lisa Weber",
      role: "Game Developer",
      company: "Indie Game Studios",
      content: "I've tried every game hosting solution in Europe. ReactHosting.de is hands down the best - zero configuration, instant deploys, and incredible performance. My game website loads instantly now.",
      rating: 5,
      avatar: "/lovable-uploads/8324ce9d-a25b-4480-beb0-990b38071d97.png"
    },
    {
      name: "Tom Müller",
      role: "Esports Team Manager",
      company: "Berlin Eagles",
      content: "As an esports team, we needed reliable CS2 servers that could handle our training sessions. ReactHosting.de delivered beyond expectations - our team's reaction time improved significantly.",
      rating: 5,
      avatar: "/lovable-uploads/ce207080-f6c2-430d-9621-79d32ab08655.png"
    },
    {
      name: "Anna Hoffmann",
      role: "Gaming Community Admin",
      company: "German Rust Community",
      content: "The difference ReactHosting.de made to our Rust servers is incredible. Player complaints about lag dropped to zero, and our community website performance increased our member signups by 40%.",
      rating: 5,
      avatar: "/lovable-uploads/ceb0d5d2-2d83-407f-bb1e-8f6959b93eb9.png"
    }
  ];

  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-50 text-yellow-600 mb-6">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Success Stories</span>
          </div>
          
          <h2 className="heading-lg text-convrt-dark-blue mb-6">
            German Gamers Love 
            <span className="text-convrt-purple font-extrabold"> ReactHosting.de</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of gamers and developers across Germany and Europe who've transformed their gaming experience with our lightning-fast hosting platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 text-convrt-purple/20">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-convrt-dark-blue">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-sm text-convrt-purple font-medium">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-convrt-purple to-convrt-purple-light rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Join 5,000+ Happy German Gamers
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Experience the difference lightning-fast hosting makes for your game servers and websites
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4.9/5</div>
                <p className="opacity-80">Average Rating</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5,000+</div>
                <p className="opacity-80">Servers Deployed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <p className="opacity-80">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
