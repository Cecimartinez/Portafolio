import React from "react";
import { CarrouselSkills } from "./components/CarrouselSkills";

export const Languages = () => {
  return (
    <div className="skills w-screen h-screen  p-7 flex flex-col ">
      <h1 className="skills-tittle text-center font-bold text-lg text-white">
        Skills
      </h1>

      <div className=" content-all  rounded-2xl w-full h-full bg-transparent mx-4 items-center flex  ">
        <CarrouselSkills />
      </div>
    </div>
  );
};
