import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "What is the admission procedure?",
    answer: "Students need to fill out the online admission form and appear for our Excellence Scholarship Test (EST). Based on the performance, admission and up to 100% scholarship will be granted."
  },
  {
    question: "Do you provide study materials?",
    answer: "Yes, we provide comprehensive, highly researched, and up-to-date study modules covering theoretical concepts, solved examples, and objective questions for rigorous practice."
  },
  {
    question: "Are there any doubt clearing sessions?",
    answer: "Absolutely. We conduct regular doubt-clearing sessions every week where students can interact 1-on-1 with faculty members to resolve their queries."
  },
  {
    question: "What is the batch size?",
    answer: "To ensure personalized attention, we maintain a strictly limited batch size of 35-40 students maximum per class."
  },
  {
    question: "Do you have hostel facilities?",
    answer: "We have tie-ups with premium hostels nearby that provide safe accommodation and hygienic food specifically for our outstation students."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-blue-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-blue-950 text-lg pr-4">{faq.question}</span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === index ? 'bg-amber-500 text-white' : 'bg-blue-50 text-blue-900'}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
