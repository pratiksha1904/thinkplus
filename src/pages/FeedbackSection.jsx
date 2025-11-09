import React, { useState, useMemo, useEffect } from "react";

const testimonialsData = [
  {
    name: "Maria Menounos",
    title: "Actress & TV Host",
    quote:
      "I feel on top of the world. I feel incredibly motivated. I feel empowered. I am the driver of my own destiny.",
  },
  {
    name: "Serena Williams",
    title: "American Professional Tennis Player",
    quote:
      "Tony Robbins helped me discover what I am really made of. With Tony's help, I've set new standards for myself, and I've taken my tennis game—and my life—to a whole new level!",
  },
  {
    name: "Marc Benioff",
    title: "Founder, Chairman and CEO of Salesforce",
    quote:
      "Tony Robbins and his strategies and his tools are the core of our culture from the beginning. He has been one of the critical keys to salesforce.com's leadership in cloud computing growth into an over $6 billion dollar company.",
  },
  {
    name: "Oprah Winfrey",
    title: "Media Executive & Philanthropist",
    quote:
      "The clarity and guidance I received was transformative. It changed the way I approach every major decision in my life.",
  },
];

const TestimonialCard = ({ testimonial, isCentered }) => {
  const baseCardClasses =
    "transition-all duration-700 ease-in-out flex flex-col items-center text-center rounded-2xl transform";
  const cardClasses = isCentered
    ? "bg-neutral-900 text-white shadow-2xl p-10 lg:p-12 scale-105 z-20 border-t-4 border-blue-500 ring-1 ring-blue-900"
    : "bg-neutral-800/70 backdrop-blur-sm text-gray-300 shadow-md p-8 lg:p-10 scale-90 z-0 opacity-70 hover:scale-95 transition-transform";

  const quoteStyle = isCentered
    ? "text-lg leading-relaxed text-gray-200 italic"
    : "text-sm italic text-gray-400 line-clamp-3";

  const imageStyle = isCentered
    ? "w-24 h-24 -mt-16 shadow-lg border-4 border-neutral-900"
    : "w-16 h-16 -mt-10 border-2 border-neutral-900 shadow-md";

  return (
    <div
      className={`${baseCardClasses} ${cardClasses} min-h-[380px] md:min-h-[420px] relative overflow-hidden`}
    >
      {/* Subtle blue light glow for center card */}
      {isCentered && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-900/20 opacity-90 pointer-events-none"></div>
      )}

      {/* Profile Image */}
      <div
        className={`rounded-full overflow-hidden mb-4 z-10 relative bg-gradient-to-br from-violet-700 to-violet-600 ${imageStyle} flex items-center justify-center`}
      >
        <span className="text-2xl text-white font-bold">👤</span>
      </div>

      <h3 className="font-bold text-2xl mb-1 text-white">{testimonial.name}</h3>
      <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
        {testimonial.title}
      </p>
      <p className={`${quoteStyle} z-10 relative`}>{testimonial.quote}</p>
    </div>
  );
};

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const total = testimonialsData.length;

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3500);
    return () => clearInterval(interval);
  }, [total]);

  const SPACING = 32;
  const getTransformValue = useMemo(() => {
    const CENTER_MD_WIDTH = 600;
    const SIDE_MD_WIDTH = 450;
    const precedingWidth = activeIndex * (SIDE_MD_WIDTH + SPACING);
    const centerOffset = CENTER_MD_WIDTH / 2;
    return `calc(-${precedingWidth}px + 50vw - ${centerOffset}px)`;
  }, [activeIndex]);

  return (
    <div className="relative overflow-hidden py-24 bg-black">
      {/* Soft radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.15),transparent_70%)]"></div>

      <div className="mx-auto overflow-hidden relative">
        <div
          className="flex justify-start space-x-8 w-max transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(${getTransformValue})`,
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              isCentered={index === activeIndex}
            />
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-12 space-x-3">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 shadow-inner ${
              index === activeIndex
                ? "bg-violet-700 shadow-lg scale-125"
                : "bg-gray-600 hover:bg-violet-500"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Floating animation for central card */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }
          .scale-105 {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default TestimonialCarousel;
