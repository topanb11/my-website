import React from "react";
import Navbar from "../components/Navbar";
import ExperienceCard from "../components/ExperienceCard";

const ExperiencePage = () => {
  return (
    <>
      <Navbar />
      <div className="text-center">
        <h1 className="font-Raleway text-3xl md:text-5xl font-bold mt-10 ">
          Experience
        </h1>
        <ExperienceCard />
      </div>
    </>
  );
};
export default ExperiencePage;
