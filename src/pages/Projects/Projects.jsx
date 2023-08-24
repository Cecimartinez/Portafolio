import { useState, useEffect } from "react";
import { gitHubRepos } from "../../api/api";
import { Card } from "../../components/Card/Card";

export const Projects = () => {
  const projectImages = {
    Calculadora: "img/calculator.png",
    "Counter-App": "img/counter.png",
    "Delicate-Macarons": "img/macarons.png",
    DevPort: "img/aboutme-img.png",
    "juego-cuatro-en-linea": "img/juego.png",
    Portafolio: "img/portada-homo.png",
    TestChallengeDev_NCR: "img/dolar.png",
    "Weather-app": "img/raining.png",
  };

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const token = process.env.REACT_APP_GITHUB_TOKEN;

    const fetchRepos = async () => {
      try {
        const data = await gitHubRepos(token);

        setRepos(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="container-projects w-full min-h-screen  px-1 m-2 items-center justify-center">
      <div className="grid text-black grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-4">
        {repos.map((repo, index) => (
          <div key={repo.id}>
            <Card
              name={repo.name}
              description={repo.description}
              html_url={repo.html_url}
              language={repo.language}
              projectNumber={index + 1}
              imageUrl={projectImages[repo.name]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
