import img from "../assets/doubt.jpg";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const Frequent = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const faqData = [
    {
      question: "How can I reset my student portal password?",
      answer: "Please contact your faculty for assistance with resetting your password.",
    },
    {
      question: "Can I update my personal details in the system?",
      answer: "To update your personal details, write a letter to your student data manager.",
    },
    {
      question: "How can I check my attendance records?",
      answer: "You can view your attendance records on the 'Attendance' page in the portal.",
    },
    {
      question: "Who can I contact for help?",
      answer: "Just give us a message on the 'Contact' page, and we’ll assist you.",
    },
    {
      question: "What should I do if I face issues accessing the system?",
      answer: "If you encounter issues, contact the system administrator or email saec@saec.ac.in for assistance.",
    },
  ];
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };
  return (
    <>
     <div className="relative z-10">
        <Navbar textSize="text-xl" textColor="text-black dark:text-white" />
      </div>
    <div className="mt-20 min-h-screen bg-gray-50 dark:bg-black py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-4xl font-bold mb-2 dark:text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Find answers to common questions about the Student Information
              System.
            </p>
          </div>
          <img
                src={img}
                alt="Sub Category 2"
                className="w-96 h-64 md:h-48 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
              />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 dark:border-gray-700 py-4"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between text-left text-lg font-medium text-gray-700 dark:text-gray-200 focus:outline-none"
              >
                {faq.question}
                {openQuestion === index ? (
                  <ChevronUp className="ml-2" />
                ) : (
                  <ChevronDown className="ml-2" />
                )}
              </button>
              {openQuestion === index && (
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
     </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Frequent;
