import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contactform = () => {
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
    <div className="flex items-center justify-center bg-white dark:bg-black p-6">
      <div className="w-full max-w-lg p-6">
        <h1 className="text-3xl font-semibold text-center text-orange-600 dark:text-orange-400 mb-6">
          Contact Us
        </h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="user_name"
              placeholder="Enter Your Name"
              required
              className="block w-full px-4 py-2 text-lg rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:focus:ring-blue-400 dark:focus:border-blue-400"
            />
          </div>
          

          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="user_email"
              placeholder="Enter Your Email"
              required
              className="block w-full px-4 py-2 text-lg rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:focus:ring-blue-400 dark:focus:border-blue-400"
            />
          </div>
          

          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter Your Message Here"
              required
              className="block w-full px-4 py-2 text-lg rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:focus:ring-blue-400 dark:focus:border-blue-400"
              rows={4}
            />
          </div>
          
          
          <button
            type="submit"
            className="w-full  bg-orange-600 hover:bg-orange-400 ease-out transition duration-1000 text-white font-medium py-3 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactform;
