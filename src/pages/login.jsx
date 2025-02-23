import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/attendance"); 
    }
  }, [navigate]);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, dob }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/attendance"); 
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again later.");
    }
  };
  return (
    <>
      <Navbar textSize="text-xl" textColor="text-black" />
      <div className="min-h-screen bg-gray-100 dark:bg-black py-8 flex justify-center items-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-sm">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Login
          </h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-2">
                Register Number
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                placeholder="Enter Register Number"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="dob" className="block text-sm font-medium text-gray-600 mb-2">
                Password
              </label>
              <input
                type="password"
                id="dob"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                placeholder="Enter Password"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-orange-500 text-white font-semibold rounded-xl"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
