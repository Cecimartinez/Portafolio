export const Languages = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: "../img/react.png" },
        { name: "js", icon: "../img/js.png" },
        { name: "html", icon: "../img/html.png" },
        { name: "tailwind", icon: "../img/tailwind.png" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: "../img/python.png" },
        { name: "Python", icon: "../img/nodejs.png" },
      ],
    },
    {
      category: "Database",
      technologies: [
        { name: "SqlServer", icon: "../img/sqlserver.png" },
        { name: "Mysql", icon: "../img/mysql.png" },
        { name: "MongoDB", icon: "../img/mongodb.png" },

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
            <h2 className="text-xl text-center mb-4 text-black ">{skill.category}</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {skill.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-white p-2 rounded-full"
                >
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
