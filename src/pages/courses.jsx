import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import img from "../assets/coursebgimg1.jpg";
import img1 from "../assets/courseimage4.jpg";
import img2 from "../assets/courseimage1.jpg";
import img3 from "../assets/courseimage2.jpg";
import PopularCourses from "../components/popularcourses";
import Footer from "../components/footer";
const Courses = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative z-10">
        <Navbar textSize="text-xl" textColor="text-white" />
      </div>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-cover h-[70vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "top",
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-center">
          <AnimatedText>
            <h1 className="text-5xl font-medium tracking-wider">Courses</h1>
          </AnimatedText>
          <p className="text-lg mt-4">
            Learn Anytime, Anywhere. Accelerate Your Future.
          </p>
          <motion.button
            onClick={() => navigate("/campus")}
            className="mt-8 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Now
          </motion.button>
        </div>
      </motion.header>
      <motion.section
        className="bg-white dark:bg-black px-5 md:px-10 lg:px-20 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div data-aos="fade-right">
          <AnimatedText>
            <h2 className="text-red-600 font-medium text-3xl mb-4">
              Find Courses
            </h2>
          </AnimatedText>
          <h1 className="text-black dark:text-white text-3xl md:text-4xl font-semibold mt-2">
            Discover Topics That Inspire You
          </h1>
          <p className="text-gray-700 text-lg md:text-xl dark:text-gray-300 mt-4 leading-relaxed">
            Build a personalized library for your career and personal growth. From foundational concepts to advanced expertise, ignite your potential.
          </p>
          <motion.button
            onClick={() => navigate("/campus")}
            className="mt-6 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-400 shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Courses
          </motion.button>
        </div>
        <motion.div
          className="grid grid-rows-2 gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg row-span-1 group">
            <img
              src={img1}
              alt="Main Image"
              className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-12 md:left-20 lg:left-24 bg-red-600 text-white px-3 py-1 rounded shadow-md opacity-90 group-hover:opacity-100">
              Innovation and Creativity
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={img2}
                alt="Sub Category 1"
                className="w-full h-40 md:h-48 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded shadow-md opacity-90 group-hover:opacity-100">
                Entrepreneurship
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={img3}
                alt="Sub Category 2"
                className="w-full h-40 md:h-48 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded shadow-md opacity-90 group-hover:opacity-100">
                Leadership
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
      <PopularCourses />
      <Footer />
    </div>
  );
};
const AnimatedText = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`relative group ${className}`}
    >
      {children}
      <span
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"
      ></span>
    </motion.div>
  );
};
export default Courses;
