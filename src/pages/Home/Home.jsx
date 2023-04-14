import React from "react";
import { Button, ImageComponent, Subtitle, Title } from "../../components";

function descargarPDF() {
  const sourcePath = "src/assets/CV_CeciliaMartinez.pdf";
  return window.open(`${window.location.origin}/${sourcePath}`);
}

export const Home = () => {
  return (
    <div
      id="home"
      className="home w-screen h-screen bg-transparent flex justify-start flex-col content-center  "
    >
      <div className=" flex flex-col md:flex-row space-x-4  md:text-2xl justify-center items-center text-white font-semibold text-center ">
        <div className=" text-white font-semibold text-center    ">
          <Title
            text="Hi! Welcome to my portafolio"
            className="text-3xl font-extrabold text-black dark:text-white sm:text-3xl py-4"
          />

          <div className="flex justify-center">
            <ImageComponent
              src="../img/home.png"
              alt="HomeImage"
              className={`w-60 h-60 my-4  `}
            />
          </div>
          <div className="text-center w-full  py-1 px-4 sm:px-6 lg:py-2 lg:px-8 z-20">
            <Subtitle
              className="block text-white text-2xl font-extrabold"
              text=" I'm Cecilia, FullStack Developer"
            />
            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="mt-12 inline-flex rounded-md shadow">
                <Button
                  type={"submit"}
                  value={"Download CV"}
                  onClick={descargarPDF}
                  className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
