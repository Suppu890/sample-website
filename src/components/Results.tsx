import { motion } from 'motion/react';
import { Trophy, Star } from 'lucide-react';

const toppers = [
  {
    name: 'Aarav Gupta',
    achievement: 'AIR 542',
    exam: 'JEE Advanced',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'Priya Verma',
    achievement: '685/720',
    exam: 'NEET Qualified',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'Rohit Singh',
    achievement: 'Top 100',
    exam: 'SSC CGL',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'Sneha Patel',
    achievement: '100%ile',
    exam: 'CUET Top Performer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop',
  }
];

export function Results() {
  return (
    <section id="results" className="py-20 bg-blue-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-200/50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-200/40 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-500 mb-4 shadow-sm"
          >
            <Trophy size={32} />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Our Hall of Fame</h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-2">
            Celebrating the outstanding achievements of our brilliant students who turned their dreams into reality.
          </p>
          <p className="text-xs text-gray-400 italic">*Results shown are for demonstration purposes only.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toppers.map((topper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 group relative text-center"
            >
              <div className="absolute top-4 right-4 text-amber-400 flex">
                <Star fill="currentColor" size={20} />
              </div>
              <div className="w-24 h-24 mx-auto rounded-full p-1 border-2 border-blue-100 group-hover:border-amber-400 transition-colors mb-4 relative overflow-hidden">
                <img 
                  src={topper.image} 
                  alt={topper.name} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-bold text-lg text-blue-950">{topper.name}</h3>
              <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 font-bold text-sm rounded-full my-2">
                {topper.achievement}
              </div>
              <p className="text-gray-500 text-sm font-medium">{topper.exam}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
