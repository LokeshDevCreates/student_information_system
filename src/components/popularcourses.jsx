import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/courseimg1.jpg";
import img2 from "../assets/courseimg2.jpg";
import img3 from "../assets/courseimg3.jpg";
import img4 from "../assets/courseimg4.jpg";
import img5 from "../assets/courseimg6.jpg";
import img6 from "../assets/courseimg7.jpg";
import img7 from "../assets/courseimg8.jpg";
import img8 from "../assets/courseimg9.jpg";

const PopularCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      label: ["Beginner", "Most Interested"],
      title: "Computer Science and Engineering",
      students: 220,
      image: img1,
      description:
        "This course covers the fundamentals of computer science, including algorithms, data structures, and software engineering principles.",
    },
    {
      label: ["Future"],
      title: "Artificial Intelligence",
      students: 135,
      image: img2,
      description:
        "Explore the exciting field of AI, covering machine learning, neural networks, and data analysis.",
    },
    {
      label: ["Beginner", "Emerging"],
      title: "Electronics and Communication Engineering",
      students: 165,
      image: img3,
      description:
        "Learn about modern communication systems, circuit design, and signal processing.",
    },
    {
      label: [],
      title: "Cybersecurity",
      students: 98,
      image: img4,
      description:
        "Understand the key concepts of cybersecurity, including encryption, network security, and ethical hacking.",
    },
    {
      label: ["Beginner"],
      title: "Information Technology",
      students: 125,
      image: img5,
      description:
        "Delve into IT concepts, including cloud computing, database management, and systems analysis.",
    },
    {
      label: ["Basic"],
      title: "Electrical and Electronics Engineering",
      students: 94,
      image: img6,
      description:
        "Study electrical circuits, power systems, and the fundamentals of electronics engineering.",
    },
    {
      label: ["Emerging"],
      title: "Computer Science and Business Systems",
      students: 165,
      image: img7,
      description:
        "Combine computer science with business concepts to prepare for the modern tech-driven workplace.",
    },
    {
      label: ["New"],
      title: "Very Large Scale Integration",
      students: 76,
      image: img8,
      description:
        "Learn about designing integrated circuits and modern microelectronics systems.",
    },
  ];

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  return (
    <motion.div
      className="bg-neutral-100 dark:bg-black py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-6">
        <motion.h2
          className="pt-10 text-red-500 text-3xl font-medium animate-pulse"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Featured Courses
        </motion.h2>
        <motion.h1
          className="pt-4 text-2xl font-bold dark:text-white"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Popular Courses
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="relative shadow-md rounded-lg border overflow-hidden bg-white dark:bg-gray-800 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl group"
            onClick={() => handleCourseClick(course)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: index * 0.1 }}
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="p-4">
              <div className="flex flex-wrap gap-2 mb-2">
                {course.label.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-1 text-xs font-semibold rounded-full text-white ${
                      tag === "New" ? "bg-orange-500" : "bg-red-500"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold dark:text-white mb-2 group-hover:underline">
                {course.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="inline-flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  {course.students} Students Enrolled
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-11/12 md:w-2/5 p-6 relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full shadow-md hover:bg-red-400 transition"
              >
                X
              </button>
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="h-60 w-full object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold dark:text-white mb-2">
                {selectedCourse.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {selectedCourse.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                <strong>{selectedCourse.students}</strong> Students Enrolled
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PopularCourses;