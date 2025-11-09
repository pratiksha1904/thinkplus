import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import heroimg from "../../assets/home/heroimg.png"

const HeroSection = () => {
  const targetDate = new Date("2025-12-31T00:00:00");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      className="bg-black text-white py-20 px-6 md:px-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Headline */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
         Discover <span className="text-red-500">.</span> Prepare{" "}
          <span className="text-red-500">.</span> Succeed
        </h1>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-6xl mx-auto p-22 bg-red-900/10 border border-red-300/30">
        {/* Left Content */}
        <motion.div
          className="flex-1 space-y-4"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-white">
                Welcome to  
 <span className="text-[#FB2576]"> Think Plus Education </span>
CAT, IPMAT, CLAT, and More
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-gray-300">
            {[
              "IIM Graduate-Led Expertise",
"one-on-one mentoring sessions",
"Concept-Driven Learning Approach",
"Weekly mock exams, quizzes"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-1" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Countdown Timer */}
          <div className="flex gap-4 mt-8 ">
            {["DAYS", "HOURS", "MINUTES", "SECONDS"].map((label, i) => {
              const values = [
                timeLeft.days,
                timeLeft.hours,
                timeLeft.minutes,
                timeLeft.seconds,
              ];
              return (
                <div
                  key={i}
                  className="bg-red-900/10 border border-red-300/30 text-center px-4 py-2 rounded-md"
                >
                  <h3 className="text-2xl font-bold text-white">
                    {String(values[i]).padStart(2, "0")}
                  </h3>
                  <p className="text-sm text-gray-400">{label}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="flex-1 max-w-sm bg-linear-to-b from-green-950 to-black rounded-2xl shadow-lg p-4 relative"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <span className="absolute -top-3 left-4 bg-red-600 text-xs px-2 py-1 rounded-md font-semibold">
            New
          </span>

          <img
            src={heroimg}
            alt="Supreme 4.0"
            className="rounded-lg mb-4"
          />

          <h3 className="text-xl font-semibold mb-2">
            CAT, IPMAT, CLAT Supreme Batch
          </h3>
          <button className="bg-red-600 hover:bg-red-700 transition px-6 py-2 rounded-md font-semibold w-full">
            Go to SUPREME Batch
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
