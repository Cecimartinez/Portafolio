import { Title } from "../../components";
import { AboutBody } from "./components";

export const AboutMe = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-5 flex flex-col justify-center items-center   overflow-y-auto">
      <Title
        className="text-xl font-bold text-center m-2 text-white"
        text="Hi there, I'm Cecilia Martinez 👋🏼"
      />

      <div className="flex flex-col md:flex-row md:gap-x-8">
        <AboutBody />
      </div>
    </div>
  );
};
