import React from "react";
import { Card } from "../../components/Card/Card"; 
import { reposData } from "../../data/reposData";

export const Projects = () => {
  return (
    <div className="container-projects w-full min-h-screen px-1 m-2 items-center justify-center">
      <div className="grid text-black grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-4">
        {reposData.map((repo, index) => (
          <div key={repo.id}>
            <Card
              name={repo.nombre}
              description={repo.descripcion}
              html_url={repo.url}
              language={repo.tecnologias.join(", ")} 
              projectNumber={index + 1}
              imageUrl={repo.imagen}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
