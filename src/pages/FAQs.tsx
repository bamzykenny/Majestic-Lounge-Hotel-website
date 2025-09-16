import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What time is check-in and check-out?",
    answer:
      "Check-in begins at 3:00 PM and check-out is by 11:00 AM. Early check-in and late check-out are available upon request and subject to availability.",
  },
  {
    question: "Does the hotel provide airport shuttle service?",
    answer:
      "Yes, we offer 24/7 airport shuttle service. Please contact our concierge team at least 24 hours in advance to arrange your pick-up or drop-off.",
  },
  {
    question: "Are pets allowed in the hotel?",
    answer:
      "We welcome small pets up to 10kg with an additional cleaning fee. Please notify us at the time of booking if you’re bringing a pet.",
  },
  {
    question: "Do you offer free Wi-Fi?",
    answer:
      "Yes, complimentary high-speed Wi-Fi is available throughout the property including guest rooms, lobby, and restaurants.",
  },
    {
    question: "Is breakfast included in the room rate?",
    answer: "Yes, complimentary breakfast is included with every room booking."
  },
    {
    question: "Can I cancel or modify my booking?",
    answer: "Yes, you can cancel or modify your booking up to 24 hours before arrival without charge."
  },
   {
    question: "Is parking available?",
    answer: "Yes, we offer secure on-site parking for all our guests at no additional cost."
  },
  {
    question: "Do the rooms have air conditioning?",
    answer: "Yes, all our rooms are fully air-conditioned for your comfort."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow-sm bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-800 hover:bg-gray-100 rounded-xl"
              >
                {faq.question}
                <ChevronDown
                  className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
