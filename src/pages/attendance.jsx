import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import Footer from "../components/footer";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
const Attendance = () => {
  const navigate = useNavigate();
  const [leaveDate, setLeaveDate] = useState("");
  const [attendance, setAttendance] = useState([
    { date: "2025-02-15", status: "Present" },
    { date: "2025-02-16", status: "Absent" },
    { date: "2025-02-17", status: "Present" },
  ]);
  const [leaveRecords, setLeaveRecords] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);
  const [filterStatus, setFilterStatus] = useState("");
  console.log(setAttendance)
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      navigate("/login");
    }
  }, [navigate]);
  const user = JSON.parse(localStorage.getItem("user"));
  const handleApplyLeave = () => {
    if (!leaveDate) {
      setAlertMessage("Please select a date for leave.");
      setTimeout(() => setAlertMessage(null), 2000);
      return;
    }
    setLeaveRecords((prev) => [
      ...prev,
      { date: leaveDate, status: "Leave Applied" },
    ]);
    setLeaveDate("");
    setAlertMessage("Leave applied successfully!");
    setTimeout(() => setAlertMessage(null), 2000);
  };
  const filteredAttendance = filterStatus
    ? attendance.filter((record) => record.status === filterStatus)
    : attendance;
  const downloadAttendanceReport = () => {
    const csvContent = [
      ["Date", "Status"],
      ...attendance.map((record) => [record.date, record.status]),
    ]
      .map((e) => e.join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "attendance_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const attendanceSummary = {
    Present: attendance.filter((record) => record.status === "Present").length,
    Absent: attendance.filter((record) => record.status === "Absent").length,
    Leave: leaveRecords.length,
  };
  const data = [
    { name: "Present", value: attendanceSummary.Present },
    { name: "Absent", value: attendanceSummary.Absent },
    { name: "Leave", value: attendanceSummary.Leave },
  ];
  const COLORS = ["#4CAF50", "#FF5722", "#FFC107"];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-orange-50 dark:bg-gray-900 text-black dark:text-zinc-50"
    >
      <div className="relative z-10">
        <Navbar textSize="text-xl" textColor="text-black dark:text-white" />
      </div>
      {alertMessage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white text-lg font-medium py-3 px-6 rounded-lg shadow-lg"
        >
          {alertMessage}
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-24 p-6 max-w-6xl mx-auto"
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="mt-2 text-3xl sm:text-4xl font-semibold text-orange-500">
            Welcome, <span className="font-medium">{user?.name}</span>
          </p>
          <p className="text-lg sm:text-xl font-normal text-gray-600 dark:text-gray-300">
            Roll Number: <span className="font-medium">{user?.rollNumber}</span>
          </p>
        </div> 
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-orange-500">Attendance Summary</h2>
          <div className="mt-4 flex justify-center">
            <PieChart width={300} height={300}>
              <Pie
                data={data}
                cx={150}
                cy={150}
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-orange-500">Attendance Records</h2>
          <div className="mt-4 flex items-center gap-4">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2 text-black dark:text-white focus:outline-none focus:ring focus:ring-orange-500"
            >
              <option value="">All</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
            <button
              onClick={downloadAttendanceReport}
              className="px-4 py-2 bg-orange-600 text-white font-medium rounded-lg shadow-sm hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-500"
            >
              Download Report
            </button>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="py-3 px-4 text-gray-700 dark:text-gray-400">Date</th>
                  <th className="py-3 px-4 text-gray-700 dark:text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredAttendance.map((record, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className="py-3 px-4">{record.date}</td>
                    <td className="py-3 px-4">{record.status}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-orange-500">Leave Records</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="py-3 px-4 text-gray-700 dark:text-gray-400">Date</th>
                  <th className="py-3 px-4 text-gray-700 dark:text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {leaveRecords.map((record, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className="py-3 px-4">{record.date}</td>
                    <td className="py-3 px-4">{record.status}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg p-6"
        >
          <h2 className="text-xl font-semibold text-orange-500">Apply for Leave</h2>
          <div className="mt-4 flex items-center gap-4">
          <input
              type="date"
              value={leaveDate}
              onChange={(e) => setLeaveDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]} 
              className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2 text-black dark:text-white focus:outline-none focus:ring focus:ring-orange-500"
            />
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#FF7043" }}
              whileTap={{ scale: 0.9 }}
              onClick={handleApplyLeave}
              className="px-4 py-2 bg-orange-600 text-white font-medium rounded-lg shadow-sm hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-500"
            >
              Apply Leave
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </motion.div>
  );
};
export default Attendance;
