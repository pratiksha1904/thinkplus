import React, { useRef } from "react";
import {
  FaGraduationCap,
  FaChartLine,
  FaBalanceScale,
  FaBrain,
  FaChalkboardTeacher,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;
    const scrollAmount = current.offsetWidth * 0.9;
    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const cards = [
    {
      title: "CAT Preparation",
      icon: <FaGraduationCap className="text-4xl mb-3" />,
      text: "Crack CAT with structured courses, mock tests, and expert guidance from IIM alumni.",
    },
    {
      title: "IPMAT Coaching",
      icon: <FaChartLine className="text-4xl mb-3" />,
      text: "Ace IPMAT with concept-based learning and logical aptitude drills for top IIMs.",
    },
    {
      title: "CLAT Mentorship",
      icon: <FaBalanceScale className="text-4xl mb-3" />,
      text: "Master legal reasoning, GK, and logical skills with curated CLAT study programs.",
    },
    {
      title: "IQ+ Program",
      icon: <FaBrain className="text-4xl mb-3" />,
      text: "Sharpen your IQ, problem-solving, and decision-making abilities with ThinkPlus IQ+ modules.",
    },
    {
      title: "Career Counselling",
      icon: <FaChalkboardTeacher className="text-4xl mb-3" />,
      text: "Get personalized mentorship and roadmap planning to achieve your academic and career goals.",
    },
  ];

  return (
    <section className="relative bg-linear-to-b from-[#160022] to-[#000000] py-20 overflow-hidden">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
          Our{" "}
          <span className="bg-clip-text text-transparent bg-[linear-gradient(to_left,#7F00FF,#FB2576,#FF0077)]">
            Services
          </span>
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Start your IPMAT, CAT, and CLAT preparation with{" "}
          <span className="font-semibold text-gray-50">ThinkPlus Education</span>
          . Our curated courses are designed by IIM grads and expert faculty to
          help you achieve your dream results.
        </p>
      </div>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-10 top-105 -translate-y-1/2 bg-[#FB2576] hover:bg-[#e2417f] text-white p-4 rounded-full shadow-lg transition-all duration-300 z-20"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-10 top-105 -translate-y-1/2 bg-[#FB2576] hover:bg-[#e2417f] text-white p-4 rounded-full shadow-lg transition-all duration-300 z-20"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Cards Row */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden px-12 max-w-7xl mx-auto"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group relative shrink-0 w-[280px] md:w-[320px] border border-gray-50 rounded-xl text-center p-8 h-[300px] flex flex-col items-center justify-center overflow-hidden bg-[#0f011a] transition-all duration-500 hover:border-[#ff5b42]"
          >
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-[#ff5b42]/70 to-[#ff0077]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>

            {/* Card Content */}
            <div className="relative z-10 text-white flex flex-col items-center justify-center">
              <div className="transition-transform duration-500 group-hover:scale-110">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 mt-2">
                {card.title}
              </h3>
              <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-2">
                {card.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
