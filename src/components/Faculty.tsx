import { motion } from 'motion/react';
import { BookOpen, Award } from 'lucide-react';

const facultyMembers = [
  {
    name: 'Dr. Rajesh Sharma',
    subject: 'Physics Expert',
    experience: '15 Years Experience',
    qualification: 'Ph.D. in Physics, IIT Delhi',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop'
  },
  {
    name: 'Neha Verma',
    subject: 'Chemistry Specialist',
    experience: '10 Years Experience',
    qualification: 'M.Sc. Chemistry, NIT Bhopal',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop'
  },
  {
    name: 'Amit Patel',
    subject: 'Mathematics Faculty',
    experience: '12 Years Experience',
    qualification: 'B.Tech, M.Tech, IIT Roorkee',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop'
  },
  {
    name: 'Anjali Gupta',
    subject: 'Biology Faculty',
    experience: '11 Years Experience',
    qualification: 'MBBS, AIIMS Bhopal',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2000&auto=format&fit=crop'
  }
];

export function Faculty() {
  return (
    <section id="faculty" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Meet Our Expert Faculty</h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from the best minds in the industry who bring years of experience, proven teaching methodologies, and a passion for student success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((faculty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden group"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={faculty.image} 
                  alt={faculty.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-blue-950 mb-1">{faculty.name}</h3>
                <div className="text-amber-600 font-semibold text-sm mb-4">{faculty.subject}</div>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <Award size={16} className="text-blue-900 mt-0.5 shrink-0" />
                    <span>{faculty.qualification}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <BookOpen size={16} className="text-blue-900 mt-0.5 shrink-0" />
                    <span>{faculty.experience}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
