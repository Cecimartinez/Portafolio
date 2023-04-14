import { Title } from "../../components";
import { AboutBody } from "./components";

export const AboutMe = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-5 m-8">
      <Title
        className={"text-3xl font-bold text-center m-2 text-white"}
        text={"Hi there, I'm Cecilia Martinez 👋"}
      />

      <AboutBody />
    </div>
  );
};
