import { Button, ImageComponent, Subtitle, Title } from "../../components";
import home from "@/assets/img/home.png"

export const Home = () => {
  const pdfUrl =
    "https://drive.google.com/file/d/1lJbQuuP7bROnhsTdT-TtA7vULUREpFye/view";

  const descargarPDF = () => {
    window.open(pdfUrl, "_blank");
  };
  return (
    <div
      id="home"
      className="home w-screen h-screen bg-transparent flex justify-center flex-col content-center overflow-y-auto"
    >
      <div className="flex flex-col md:flex-row space-x-4 md:text-2xl justify-center items-center text-white font-semibold text-center">
        <div className="text-white font-semibold text-center">
          <Title
            text="Hi!👋🏼 Welcome to my portfolio"
            className="md:text-3xl  text-2xl font-bold  sm:text-3xl py-4"
          />

          <div className="flex justify-center">
            <ImageComponent
              src={home}
              alt="HomeImage"
              className="w-40 h-40 mx-auto md:mx-0 md:w-60 md:h-60"
            />
          </div>
          <div className="text-center w-full py-1 px-4 sm:px-6 lg:py-2 lg:px-8 z-20">
            <Subtitle
              className="block  text-xl font-bold my-5"
              text="I'm Cecilia, Fullstack Developer 🚀 "
            />
            <div className="lg:mt-0 lg:flex-shrink-0 m inline-flex rounded-md shadow">
              <Button
                type="submit"
                value="Download CV"
                onClick={descargarPDF}
                className="py-4 px-6 bg-[#5c3fff]  hover:bg-[#4b2bff] focus:ring-[#725afc] focus:ring-offset-[#c5baff] text-white w-full transition ease-in duration-200 text-center text-xs md:text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
