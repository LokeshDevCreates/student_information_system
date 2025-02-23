import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";
const Contact = () => {
  const form = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_4p9coge",
          "template_dwska5i",
          form.current,
          "MZUmGUqXRnYBE66DZ"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("Message sent");
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <>
      <div className="relative z-10">
        <Navbar textSize="text-xl" textColor="text-white" />
      </div>
      <div className="mt-20 min-h-screen flex items-center justify-center bg-orange-50 dark:bg-black p-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="bg-orange-600 p-8 text-white flex flex-col justify-between">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            >
                <AnimatedText>
                   <h1 className="text-4xl font-bold mb-4">Contact us</h1>
                </AnimatedText>  
              <p className="text-lg mb-8">
                Leave your email and we will get back to you within 24 hours.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Mail className="mr-3" />
                  <span>saec@saec.ac.in</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3" />
                  <span>(044) 2680 1999/1499</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-3" />
                  <span>Poonamallee-Avadi Road, Thiruverkadu, Chennai-600077. TamilNadu. India</span>
                </li>
                <li className="flex items-center">
                  <Clock className="mr-3" />
                  <span>8 a.m. – 11 p.m.</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="flex space-x-4 mb-16"
              whileHover={{ scale: 1.1 }}
            >
              <a
                href="https://x.com/dev_saec"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="hover:text-gray-300" />
              </a>
              <a
                href="https://www.youtube.com/@SAEngineeringCollegeAutonomous"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="hover:text-gray-300" />
              </a>
              <a
                href="https://www.instagram.com/saec_autonomous/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="hover:text-gray-300" />
              </a>
            </motion.div>
          </div>
          <div className="p-8">
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <motion.input
                  id="name"
                  type="text"
                  name="user_name"
                  placeholder="Enter Your Name"
                  required
                  className="block w-full px-4 py-2 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <motion.input
                  id="email"
                  type="email"
                  name="user_email"
                  placeholder="Enter Your Email"
                  required
                  className="block w-full px-4 py-2 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  placeholder="Enter Your Message Here"
                  required
                  className="block w-full px-4 py-2 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  rows={4}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-500 text-white font-medium py-3 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};
const AnimatedText = ({ children, className }) => {
    return (
      <div className={`relative group ${className}`}>
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-44"></span>
      </div>
    );
  };
export default Contact;
