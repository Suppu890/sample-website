import { motion } from 'motion/react';
import { Target, Lightbulb, Award, CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const stats = [
  { value: 5000, label: 'Students Trained', suffix: '+' },
  { value: 250, label: 'Selections', suffix: '+' },
  { value: 15, label: 'Expert Faculty', suffix: '+' },
  { value: 12, label: 'Years of Excellence', suffix: '+' },
];

function AnimatedCounter({ value, suffix }: { value: number, suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">About Our Academy</h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-900 rounded-2xl transform translate-x-4 translate-y-4 opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
                alt="Classroom" 
                className="relative rounded-2xl shadow-xl w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                    <Award size={32} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-950">Est. 2014</div>
                    <div className="text-sm text-gray-500">10+ Years of Trust</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">Your Path to Academic Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded by Dr. Rajesh Sharma, Excellence Career Academy has been at the forefront of providing premium education for competitive exams. We believe in nurturing talent and guiding students toward their dream careers.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <Target className="text-amber-500 mb-3" size={28} />
                <h4 className="font-bold text-blue-950 mb-2">Our Mission</h4>
                <p className="text-sm text-gray-600">To provide accessible, high-quality education that empowers students to achieve their academic goals.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <Lightbulb className="text-amber-500 mb-3" size={28} />
                <h4 className="font-bold text-blue-950 mb-2">Our Vision</h4>
                <p className="text-sm text-gray-600">To be the most trusted educational institution known for producing top achievers consistently.</p>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500" size={20} />
                <span className="text-gray-700 font-medium">Personalized Mentorship</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500" size={20} />
                <span className="text-gray-700 font-medium">Comprehensive Study Material</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500" size={20} />
                <span className="text-gray-700 font-medium">Regular Mock Tests & Analysis</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="bg-blue-950 rounded-3xl p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0,transparent_100%)]"></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
