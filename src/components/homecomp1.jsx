import React from "react";
import { User, Code, Book } from "lucide-react";
import { motion } from "framer-motion";

const Text = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <>
      <section className="py-20 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
          >
            {[
              {
                Icon: User,
                title: "The Best and Most Involved Teachers",
                description:
                  "Dedicated educators who go beyond teaching, fostering growth and inspiring students through active engagement and personalized support.",
              },
              {
                Icon: Code,
                title: "The Large Selection of Courses and Instruction",
                description:
                  "A wide variety of courses and teaching methods designed to cater to diverse interests, skill levels, and learning preferences.",
              },
              {
                Icon: Book,
                title: "High-Quality Classes & Course Categories",
                description:
                  "Top-notch classes across various categories, ensuring an exceptional learning experience for every student.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                className="flex flex-col items-center text-center p-6"
                whileHover={{ scale: 1.05 }}
              >
                <item.Icon className="w-16 h-16 text-red-500 mb-6" />
                <h3 className="text-3xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Text;
