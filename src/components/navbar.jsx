import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, User, Menu, Sun, Moon } from "lucide-react";
const Navbar = ({ textSize = "text-base", textColor = "text-black", onDarkModeToggle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode !== null
      ? JSON.parse(savedMode)
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const user = localStorage.getItem("user");
    return !!user;
  });
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (onDarkModeToggle) {
      onDarkModeToggle(darkMode); 
    }
  }, [darkMode, onDarkModeToggle]);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-100 dark:bg-slate-700 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-4">
          <div className="flex flex-col text-left cursor-pointer">
            <AnimatedText
              className={` font-bold text-2xl sm:text-3xl md:pl-1 ${
                darkMode ? "text-black" : "text-slate-900"
              }`}
            >
              S.A Engineering College
            </AnimatedText>
            <AnimatedText className="pl-4 text-xs sm:text-lg text-amber-500">
              Student Information System
            </AnimatedText>
          </div>
        </div>
        <div
          className={`hidden md:flex space-x-6 ${textSize} ${textColor}${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <AnimatedLink to="/" textSize={textSize}>
            Home
          </AnimatedLink>
          <AnimatedLink to="/courses" textSize={textSize}>
            Academics
          </AnimatedLink>
          <AnimatedLink to="/campus" textSize={textSize}>
            Campus
          </AnimatedLink>
          <AnimatedLink to="/attendance" textSize={textSize}>
            Attendance
          </AnimatedLink>
          <AnimatedLink to="/profile" textSize={textSize}>
            Profile
          </AnimatedLink>
          <AnimatedLink to="/contact" textSize={textSize}>
            Contact
          </AnimatedLink>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {!isLoggedIn ? (
            <AnimatedLink to="/login">
              <div className="flex items-center">
                <User className="w-6 h-6" />
                <span className="ml-1">Log In</span>
              </div>
            </AnimatedLink>
          ) : (
            <AnimatedLink to="/logout">
              <button
                className="text-red-600 hover:text-red-800 flex items-center space-x-1 focus:outline-none"
                aria-label="Log Out"
              >
                <User className="w-6 h-6" />
                <span>Logout</span>
              </button>
            </AnimatedLink>
          )}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="focus:outline-none cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
              <Moon className="w-6 h-6 text-blue-500" />
            )}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-black dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-black dark:text-white" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="text-xl md:hidden fixed inset-0 bg-orange-400 text-white flex flex-col items-center justify-center space-y-8 dark:bg-white dark:text-white">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-black absolute top-4 right-4 hover:text-gray-400"
          >
            <X className="w-8 h-8 cursor-pointer" />
          </button>
          <AnimatedLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </AnimatedLink>
          <AnimatedLink to="/courses" onClick={() => setMenuOpen(false)}>
            Academics
          </AnimatedLink>
          <AnimatedLink to="/campus" onClick={() => setMenuOpen(false)}>
            Campus
          </AnimatedLink>
          <AnimatedLink to="/attendance" onClick={() => setMenuOpen(false)}>
            Attendance
          </AnimatedLink>
          <AnimatedLink to="/profile" onClick={() => setMenuOpen(false)}>
            Profile
          </AnimatedLink>
          <AnimatedLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </AnimatedLink>
          {!isLoggedIn ? (
            <AnimatedLink to="/login" onClick={() => setMenuOpen(false)}>
              Log In
            </AnimatedLink>
          ) : (
            <button
              onClick={handleLogout}
              className="text-red-600 hover:text-red-800"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};
const AnimatedLink = ({ to, children, onClick, textSize }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-black hover:text-slate-100 relative group ${textSize} dark:hover:text-gray-300`}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-700 group-hover:w-full"></span>
    </Link>
  );
};
const AnimatedText = ({ children, className }) => {
  return (
    <div className={`relative group ${className}`}>
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-1000 group-hover:w-full"></span>
    </div>
  );
};
export default Navbar;
