import React from "react";
import pic5 from "../assets/graduation.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Number = () => {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true });

  const statsVariants = {
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
      <section className="py-12 bg-gray-100 dark:bg-gray-700 transition-colors duration-500" ref={statsRef}>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={statsInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <img src={pic5} alt="Group of people" className="rounded-lg shadow-lg" />
          </motion.div>
          <motion.div
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            className="flex flex-col justify-center space-y-8"
          >
            {[
              {
                number: 457,
                label: "The Best and Most Involved Teachers",
                description:
                  "Passionate educators who actively engage with students, making learning interactive and meaningful through their dedication and expertise.",
              },
              {
                number: 4496,
                label: "The Large Selection of Courses and Instruction",
                description:
                  "A diverse and expansive range of courses combined with innovative teaching methods, thoughtfully designed to cater to the unique interests, learning styles, and career aspirations of every student.",
              },
              {
                number: 183,
                label: "High-Quality Course Categories",
                description:
                  "Well-structured course categories designed to provide high-quality education, ensuring in-depth knowledge and practical skills across diverse fields.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={statsVariants}
                className="flex items-start space-x-4"
              >
                <span className="text-red-500 text-5xl font-bold mr-9">
                  {statsInView && <CountUp end={item.number} duration={5} />}
                </span>
                <div className="dark:text-white">
                  <h3 className="text-xl font-semibold">{item.label}</h3>
                  <p className="text-gray-600 dark:text-zinc-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Number;
