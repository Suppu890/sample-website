import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Users } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-blue-950 text-white min-h-[90vh] flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
          alt="Students studying" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-blue-950/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800/50 border border-blue-700 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-sm font-medium text-blue-100">Admissions Open for 2024-25</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Shape Your Future With <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Excellence Career Academy</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed"
          >
            Empowering students with expert guidance, structured learning, and proven results to crack India's toughest competitive exams.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-blue-950 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transform hover:-translate-y-1"
            >
              Apply Now <ArrowRight size={20} />
            </a>
            <a 
              href="#courses" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/20 hover:border-white/50 text-white rounded-full font-bold text-lg transition-all"
            >
              Explore Courses
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating stats cards */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="hidden lg:flex absolute right-10 bottom-20 flex-col gap-4"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex items-center gap-4 text-white shadow-2xl">
          <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-blue-950">
            <Users size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold">5000+</div>
            <div className="text-sm text-blue-200">Students Trained</div>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex items-center gap-4 text-white shadow-2xl translate-x-8">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
            <BookOpen size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold">250+</div>
            <div className="text-sm text-blue-200">Top Selections</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
