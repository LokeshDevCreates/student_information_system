import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import Navbar from "../components/navbar";
import background from "../assets/stu1.jpg";
import Footer from "../components/footer";
import Text from "../components/homecomp1";
import About from "../components/about";
import Number from "../components/number";
import Carousel from "../components/carousel";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const form = useRef(null);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    if (form.current) {
      const formData = new FormData(form.current);
      const userName = formData.get("user_name");
      const userEmail = formData.get("user_email");
      if (!userEmail || !userName) {
        setAlertMessage("Please enter both your name and email.");
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
        return;
      }
      emailjs
        .send(
          "service_k0g0wck",
          "template_0jiks7q",
          {
            user_name: userName,
            user_email: userEmail,
          },
          "MZUmGUqXRnYBE66DZ"
        )
        .then(
          (result) => {
            console.log("Email sent to student:", result.text);
            setAlertMessage(`Your Application is being processed, please check out your mail for more details!`);
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
            form.current.reset();
          },
          (error) => {
            console.error("Failed to send email:", error.text);
            setAlertMessage("Error in sending email. Please try again.");
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
          }
        );
    }
  };

  return (
    <>
      <div
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="relative z-10">
          <Navbar textSize="text-xl" textColor="text-white" />
        </div>
        {showAlert && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-orange-500 text-white py-4 px-6 rounded-lg shadow-lg text-center"
            >
              {alertMessage}
            </motion.div>
          )}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col items-start justify-center text-white px-6 md:px-16 z-0"
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            className="text-4xl md:text-6xl font-normal mb-4 leading-tight"
          >
            Discover Best Classes
          </motion.h1>
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
            className="text-4xl md:text-6xl font-normal mb-4 leading-tight"
          >
            For The Best Learning
          </motion.h1>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#FF7043" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/courses")}
            className="text-2xl border bg-transparent hover:bg-orange-600 text-white font-medium py-4 px-8 rounded-lg transition duration-1000 cursor-pointer dark:text-black"
          >
            Read More
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute bottom-0 right-0 m-8 p-10 rounded-2xl shadow-lg w-full max-w-sm bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 transition-colors duration-500"
        >
          <h2 className="text-xl font-bold text-black dark:text-white mb-4 text-center">
            Apply For Admission
          </h2>
          <p className="text-sm font-light text-gray-500 dark:text-gray-300 mb-6 text-center">
            Make it More Simple !!
          </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="transition-transform duration-300"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white dark:bg-gray-800 text-black dark:text-white"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="transition-transform duration-300"
            >
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white dark:bg-gray-800 text-black dark:text-white"
              />
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-1000 cursor-pointer"
            >
              Apply Now
            </motion.button>
          </form>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Text />
        <About />
        <Number />
        <Carousel />
        <Footer />
      </motion.div>
    </>
  );
};

export default Home;
