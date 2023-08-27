import react from "@/assets/img/react.png";
import js from "@/assets/img/js.png";
import tailwind from "@/assets/img/tailwind.png";
import html from "@/assets/img/html.png";
import node from "@/assets/img/nodejs.png";
import py from "@/assets/img/python.png";
import sqlserver from "@/assets/img/sqlserver.png";
import mongodb from "@/assets/img/mongodb.png";
import mysql from "@/assets/img/mysql.png";

export const Languages = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: react },
        { name: "js", icon: js },
        { name: "html", icon: html },
        { name: "tailwind", icon: tailwind },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: node },
        { name: "Python", icon: py },
      ],
    },
    {
      category: "Database",
      technologies: [
        { name: "SqlServer", icon: sqlserver },
        { name: "Mysql", icon: mysql },
        { name: "MongoDB", icon: mongodb },
      ],
    },
  ];

  return (
    <div className="skills min-h-screen py-2 px-1 flex justify-center w-full items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.category}
            className="bg-white shadow-lg py-5 px-2 rounded-lg"
          >
            <h2 className="text-xl text-center mb-4 text-black ">
              {skill.category}
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {skill.technologies.map((tech) => (
                <div key={tech.name} className="bg-white p-2 rounded-full">
                  <img src={tech.icon} alt={tech.name} className="h-10 w-10" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
