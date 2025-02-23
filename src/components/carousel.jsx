import { useState, useEffect } from "react";
import pic6 from "../assets/lib1img.jpg";
import { motion } from "framer-motion";

const Carousel = () => {
  return (
    <>
      <section
        className="min-h-screen relative py-20 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${pic6})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-semibold text-white mb-24"
          >
            Testimonials from Our Students
          </motion.h2>
          <TextCarousel />
        </div>
      </section>
    </>
  );
};

const TextCarousel = () => {
  const testimonials = [
    [
      {
        text: "The college has excellent faculty who go the extra mile to support students. The variety of courses offered helped me explore and excel in my interests.",
        author: "Hari K",
        location: "Chennai",
      },
      {
        text: "The learning environment is truly exceptional. The instructors are not only knowledgeable but also approachable, making the experience worthwhile.",
        author: "Sahana S",
        location: "Cuddalore",
      },
      {
        text: "I am impressed by the quality of classes and the diverse course options. This college has been instrumental in shaping my career path.",
        author: "Ashwin E",
        location: "Coimbatore",
      },
    ],
    [
      {
        text: "The campus provides a perfect blend of academics and extracurriculars. The supportive community made my college experience unforgettable.",
        author: "Rohith K",
        location: "Kancheepuram",
      },
      {
        text: "The dedication of the faculty and staff is unparalleled. They truly care about every student’s success and personal growth.",
        author: "Manoj Kumar M",
        location: "Erode",
      },
      {
        text: "From the infrastructure to the teaching quality, everything is top-notch. I highly recommend this college for anyone looking to excel.",
        author: "Sarala P",
        location: "Salem",
      },
    ],
    [
      {
        text: "The opportunities here are endless. The diverse range of courses and hands-on learning have greatly boosted my confidence and skills.",
        author: "Punith A",
        location: "Hyderabad",
      },
      {
        text: "I’m grateful for the career guidance and mentorship provided. This college has given me the tools to achieve my goals.",
        author: "Rahul K",
        location: "Bangalore",
      },
      {
        text: "The sense of community here is amazing. I’ve not only gained knowledge but also built lifelong friendships and networks.",
        author: "Nadhiya P",
        location: "Thirupattur",
      },
    ],
  ];

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % testimonials.length);
    }, 20000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex h-72 transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentPage * 100}%)` }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {testimonials.map((page, pageIndex) => (
          <div
            key={pageIndex}
            className="min-w-full grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {page.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white bg-opacity-10 rounded-lg text-white shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.3 }}
              >
                <blockquote className="italic text-xl mb-4">
                  <span className="text-7xl font-bold leading-none text-yellow-400">
                    &ldquo;
                  </span>
                  {testimonial.text}
                </blockquote>
                <p className="font-semibold text-xl">{testimonial.author}</p>
                <p className="text-sm text-gray-300">{testimonial.location}</p>
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-4 space-x-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-3 h-3 rounded-full ${
              currentPage === index
                ? "bg-white"
                : "bg-gray-400 hover:bg-white"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
