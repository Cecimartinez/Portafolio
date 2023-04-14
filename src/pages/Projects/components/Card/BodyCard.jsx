import { ProjectCard } from "./ProjectCard";
import { Tag } from "./Tag";


export const BodyCard = () => {
  const skills = ["JS", "React", "CSS"];

  return (
    <div className="w-full p-4 bg-white white:bg-gray-800">
      <p className=" text-indigo-500 text-md font-bold">Project #1</p>
      <ProjectCard />
      <div className="flex flex-wrap items-center mt-4 justify-starts">
        {skills.map((skill, index) => (
          <Tag key={index} nameSkill={skill} />
        ))}
      </div>
    </div>
  );
};

