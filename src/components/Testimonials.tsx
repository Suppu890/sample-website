import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Aarav Gupta',
    review: 'The faculty and study material helped me achieve my goals. The personalized attention I received here was unparalleled.',
    course: 'JEE Advanced Batch',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2000&auto=format&fit=crop'
  },
  {
    name: 'Priya Verma',
    review: 'Excellent mentoring and regular tests improved my performance drastically. The competitive environment keeps you motivated.',
    course: 'NEET Target Batch',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2000&auto=format&fit=crop'
  },
  {
    name: 'Rohit Singh',
    review: 'One of the best coaching institutes for competitive exam preparation. The shortcut tricks taught by the math faculty were life-saving.',
    course: 'SSC CGL Batch',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop'
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-blue-950 text-white relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-white/20"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border-4 border-white/20"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-white"></div>
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6 rounded-full bg-amber-400"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
        <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-16"></div>

        <div className="relative h-[300px] md:h-[250px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: index === currentIndex ? 1 : 0, 
                x: index === currentIndex ? 0 : (index < currentIndex ? -100 : 100),
                pointerEvents: index === currentIndex ? 'auto' : 'none'
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <Quote className="text-amber-500/50 w-16 h-16 mb-6" />
              <p className="text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-3xl">
                "{testimonial.review}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-500"
                />
                <div className="text-left">
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-blue-300 text-sm">{testimonial.course}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-amber-500 w-8' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
