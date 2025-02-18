import React, {useState} from 'react';
import Navbar from '../components/navbar';
import video from "../assets/saecintrobg.mp4";
import { motion } from 'framer-motion';
import CampusMap from '../components/map';
import img1 from "../assets/lib.jpg";
import img2 from "../assets/sport.jpg";
import img3 from "../assets/hostel.jpg";
import img4 from "../assets/canteen.jpg";
import img5 from "../assets/lab.jpg";
import img6 from "../assets/audi.jpg";
import img7 from "../assets/pongal.jpg";
import img8 from "../assets/technical1.jpg";
import img9 from "../assets/fest1.jpg";
import img10 from "../assets/gallery1.jpg";
import img11 from "../assets/gallery2.jpg";
import img12 from "../assets/gallery3.jpg";
import img13 from "../assets/gallery4.jpg";
import img14 from "../assets/gallery5.jpg";
import img15 from "../assets/gallery6.jpg";
import img16 from "../assets/gallery7.jpg";
import img17 from "../assets/gallery8.jpg";
import Footer from '../components/footer';
const Campus = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className="relative min-h-screen w-full overflow-x-hidden">
        <video
          className="absolute top-0 left-0 w-full h-[100vh] object-cover"
          src={video}
          autoPlay
          loop
          muted
        />
        <div className="relative z-10 min-h-screen w-full flex flex-col">
          <Navbar onDarkModeToggle={setDarkMode} textSize="text-xl" textColor="text-white" />
        </div>
        <div className="absolute top-0 left-0 w-full bg-black opacity-40 z-0"></div>
        <div className="relative z-10 bg-white dark:bg-black text-black dark:text-white">
          <motion.section
            className="p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-6xl mx-auto my-8">
              <h2 className="text-4xl font-extrabold mb-6 text-center text-red-500">
                Campus Overview
              </h2>
              <p className="text-2xl text-gray-700 dark:text-gray-300 leading-7 text-center">
                S.A. Engineering College (SAEC) in Chennai offers a vibrant campus with modern infrastructure and lush greenery. 
                It features well-equipped labs, spacious classrooms, a resourceful library, and advanced computing facilities. 
                The campus promotes holistic development with sports facilities, cultural spaces, and student-friendly amenities. 
                With a strong placement cell, modern hostels, and a cafeteria, SAEC provides a conducive environment for learning and growth.
              </p>
            </section>
          </motion.section>

          <CampusMap isDarkMode={darkMode} />

          <motion.section
            className="p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-14 text-center text-red-600">Facilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Library", img: img1 },
                { name: "Sports Complex", img: img2 },
                { name: "Hostels", img: img3 },
                { name: "Cafeteria", img: img4 },
                { name: "Labs", img: img5 },
                { name: "Auditorium", img: img6 },
              ].map((facility) => (
                <motion.div
                  key={facility.name}
                  className="bg-gray-100 dark:bg-black rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 border"
                >
                  <img
                    src={facility.img}
                    alt={facility.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-center text-gray-800 dark:text-gray-100">
                      {facility.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center">
                      Details about the {facility.name}.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-14 text-center text-red-600">Events & Activities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Pongal Fest", date: "January 13", img: img7 },
                { name: "Project Expo", date: "March 10", img: img8 },
                { name: "Food Fest", date: "February 12", img: img9 },
              ].map((event) => (
                <motion.div
                  key={event.name}
                  className="bg-gray-100 dark:bg-black border rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={event.img}
                    alt={event.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-center text-gray-800 dark:text-gray-100">
                      {event.name}
                    </h3>
                    <p className="text-center text-gray-600 dark:text-gray-300">
                      {event.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-red-600">Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                img10,
                img11,
                img12,
                img13,
                img14,
                img15,
                img16,
                img17,
              ].map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.section>
            <Footer />
        </div>
      </div>
    </>
  );
};
export default Campus;














