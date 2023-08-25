import { useState, useEffect } from "react";
import { gitHubRepos } from "../../api/api";
import { Card } from "../../components/Card/Card";
import calculator from "../../assets/img/calculator.png";
import counter from "../../assets/img/counter.png";
import macarons from "../../assets/img/macarons.png";
import devport from "../../assets/img/aboutme-img.png";
import juego from "../../assets/img/juego.png";
import portafolio from "../../assets/img/portada-homo.png";
import ncr from "../../assets/img/dolar.png";
import weatherapp from "../../assets/img/raining.png";

export const Projects = () => {
  const projectImages = {
    Calculadora: calculator,
    "Counter-App": counter,
    "Delicate-Macarons": macarons,
    "DevPort": devport,
    "juego-cuatro-en-linea": juego,
    "Portafolio": portafolio,
    "TestChallengeDev_NCR": ncr,
    "Weather-app": weatherapp,
  };

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const token = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;
    console.log(token);
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
