import pic1 from "../assets/courseimg1.jpg";
import pic2 from "../assets/courseimg2.jpg";
import pic3 from "../assets/courseimg3.jpg";
import pic4 from "../assets/courseimg4.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="py-12 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-start"
          >
            <AnimatedText>
              <motion.p
                whileHover={{ scale: 1.1 }}
                className="text-red-500 text-4xl font-semibold mb-2 cursor-pointer"
              >
                About Us
              </motion.p>
            </AnimatedText>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl mt-10 font-semibold leading-snug mb-4"
            >
              Find Courses On Almost Any Topic
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-gray-700 dark:text-gray-300 text-3xl mb-6"
            >
              Build your library for your career and personal growth.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#FF7043" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate("/courses")}
              className="bg-orange-500 mt-20 text-white py-3 px-6 rounded-md text-lg font-medium shadow-md hover:bg-orange-600 transition duration-900 mr-60 sm:mr-96"
            >
              View Courses
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-6"
          >
            {[pic1, pic2, pic3, pic4].map((pic, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/courses")}
                className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-500"
              >
                <motion.img
                  src={pic}
                  alt={`Course ${index + 1}`}
                  className="w-full h-48 object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  className="absolute bottom-4 left-4 bg-white dark:bg-black text-red-500 px-4 py-2 rounded-lg shadow-md"
                >
                  {[
                    "Computer Science",
                    "Artificial Intelligence",
                    "Electronics and Communication",
                    "CyberSecurity",
                  ][index]}
                </motion.div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

const AnimatedText = ({ children, className }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`relative group ${className}`}
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-1000 group-hover:w-40"
      ></motion.span>
    </motion.div>
  );
};

export default About;
