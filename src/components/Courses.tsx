import { motion } from 'motion/react';
import { Microscope, Activity, BookOpen, GraduationCap, Building2, Calculator, Clock } from 'lucide-react';

const courses = [
  {
    title: 'JEE Main & Advanced',
    icon: <Calculator size={32} />,
    description: 'Comprehensive preparation program for engineering aspirants focusing on deep conceptual clarity.',
    duration: '1-2 Years',
    fee: '₹85,000/year',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'NEET Preparation',
    icon: <Microscope size={32} />,
    description: 'Specialized coaching for medical aspirants with expert faculty and extensive test series.',
    duration: '1-2 Years',
    fee: '₹90,000/year',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'CUET Preparation',
    icon: <GraduationCap size={32} />,
    description: 'Targeted preparation for admission into top central universities across India.',
    duration: '6 Months',
    fee: '₹35,000',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'SSC Preparation',
    icon: <Activity size={32} />,
    description: 'Intensive coaching for all SSC exams including CGL, CHSL, and MTS.',
    duration: '8 Months',
    fee: '₹25,000',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Banking Exams',
    icon: <Building2 size={32} />,
    description: 'Focused training for IBPS, SBI, and RBI exams with speed-building techniques.',
    duration: '6 Months',
    fee: '₹22,000',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    title: 'Foundation Courses',
    icon: <BookOpen size={32} />,
    description: 'Early preparation for Classes 9-12 to build strong basics for future competitive exams.',
    duration: '1 Year',
    fee: '₹45,000/year',
    color: 'from-amber-500 to-orange-500'
  }
];

export function Courses() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Our Premium Courses</h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our expertly crafted programs designed to maximize your potential and ensure success in your chosen field.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 bg-gradient-to-br ${course.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {course.icon}
              </div>
              
              <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-amber-600 transition-colors">{course.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
                {course.description}
              </p>
              
              <div className="flex flex-col gap-2 mb-8 text-sm font-medium text-gray-500 border-t border-gray-100 pt-4">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-amber-500" />
                  <span>Duration: {course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 text-amber-500 font-bold">₹</span>
                  <span>Fee: <span className="text-blue-950 font-bold">{course.fee}</span> (Demo)</span>
                </div>
              </div>
              
              <a href="#contact" className="inline-block w-full text-center py-3 px-6 rounded-lg font-semibold border-2 border-blue-900 text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
