import React from "react";
import {
  FaUserGraduate,   // for students
  FaChalkboardTeacher, // for lectures
  FaUserTie,        // for experienced faculty
  FaUniversity,     // for IIM admissions
} from "react-icons/fa";

const Community = () => {
  const platforms = [
    {
      count: "400+",
      name: "Our Happy Students",
      icon: <FaUserGraduate className="text-[#ff5b42] text-2xl ml-2" />,
    },
    {
      count: "600 Hr",
      name: "Dedicated Lectures",
      icon: <FaChalkboardTeacher className="text-[#ff5b42] text-2xl ml-2" />,
    },
    {
      count: "10+ Year",
      name: "Experienced Faculty",
      icon: <FaUserTie className="text-[#ff5b42] text-2xl ml-2" />,
    },
    {
      count: "47",
      name: "IIM Admissions",
      icon: <FaUniversity className="text-[#ff5b42] text-2xl ml-2" />,
    },
  ];

  return (
    <section className="bg-linear-to-b from-[#160022] to-[#000000] text-white py-20">
      <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
        Start your prep the{" "}
        <span className="bg-clip-text text-transparent bg-[linear-gradient(to_left,#7F00FF,#FB2576,#FF0077)] font-semibold">
          THINKPLUS
        </span>{" "}
        fulfill your dreams
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6">
        {platforms.map((p, i) => (
          <div
            key={i}
            className="relative bg-linear-to-br from-gray-100/50 to-gray-500/10 p-[3px] rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.05)] hover:shadow-[0_0_45px_rgba(255,91,66,0.4)] transition-all duration-500"
          >
            <div className="bg-black rounded-2xl py-14 flex flex-col justify-center items-center text-center h-full">
              <h3 className="text-4xl font-extrabold mb-2">{p.count}</h3>
              <p className="flex flex-col items-center justify-center text-gray-200 font-medium">
                <span className="flex items-center gap-2">{p.name} {p.icon}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Community;
