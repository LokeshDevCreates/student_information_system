import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import man from "../assets/man.png";
import woman from "../assets/woman.png";
import { motion } from "framer-motion";
import Footer from "../components/footer";
const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);
  if (!user) {
    return null;
  }
  const profilePicture = user.profilePicture
    ? user.profilePicture
    : user.gender === "Male"
    ? man
    : woman;
  return (
    <div className="min-h-screen bg-orange-50 dark:bg-gray-900">
      <div className="relative z-10">
        <Navbar textSize="text-xl" textColor="text-orange-600 dark:text-white" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto mt-24 mb-6 p-5 bg-white dark:bg-gray-800 shadow-md rounded-xl"
      >
        <div className="flex flex-col md:flex-row items-center md:space-x-6">
          <motion.img
            src={profilePicture}
            alt="Profile"
            className="w-28 h-32 rounded-full border border-orange-300 dark:border-gray-600"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <div className="mt-4 md:mt-0">
            <h1 className="text-2xl font-bold text-orange-600 dark:text-white">
              {user.name}
            </h1>
            <p className="text-gray-700 font-semibold dark:text-gray-300">
              Roll Number: {user.rollNumber}
            </p>
            <p className="text-gray-700 font-semibold dark:text-gray-300">Gender: {user.gender}</p>
            <p className="text-gray-700 font-semibold dark:text-gray-300">
              Date of Birth: {new Date(user.dob).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-orange-600 dark:text-white">
            Contact Details
          </h2>
          <motion.div
            className="mt-4 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Email:</span> {user.contact.email}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Phone:</span> {user.contact.phone}
            </p>
          </motion.div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-orange-600 dark:text-white">
            Address
          </h2>
          <motion.div
            className="mt-4 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">City:</span> {user.address.city}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">State:</span> {user.address.state}
            </p>
          </motion.div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-orange-600 dark:text-white">
            Academic Details
          </h2>
          <motion.div
            className="mt-4 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Class:</span> {user.class}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Section:</span> {user.section}
            </p>
          </motion.div>
        </div>
        <motion.button
           className="bg-orange-500 mt-5 text-white py-3 px-6 rounded-md text-lg font-medium shadow-md hover:bg-orange-600 transition duration-900 mr-60 sm:mr-96"
          whileHover={{ scale: 1.1, backgroundColor: "#FF7043" }}
          whileTap={{ scale: 0.9 }}
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/login");
            }}
          >
            Logout
        </motion.button>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Profile;
