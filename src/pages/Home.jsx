import React from "react";
import Hero from "../components/home/Hero";
import Services from "./Services";
import Community from "../components/home/Community";
import FeedbackSection from "./FeedbackSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Community />
      <FeedbackSection />
    </>
  );
};

export default Home;
