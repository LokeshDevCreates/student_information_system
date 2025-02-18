import React from "react";
import pic7 from "../assets/stu4.jpg";
import Contactform from "../components/contactform";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <section className="bg-white dark:bg-black text-black dark:text-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="h-full w-full p-4">
              <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Fill out the form to connect with us. We're here to assist you with any queries or information you need!
              </p>
              <Contactform />
            </div>
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={pic7}
              alt="Student studying in a library"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
