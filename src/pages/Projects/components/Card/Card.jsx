import { BodyCard } from "./BodyCard";
import { ImageComponent} from "@/components";

/* 
 todo: Arreglar la division del CARD. Proyect Card no es un nombre entendible.
*/

export const Card = () => {
  return (
    <div className="projects  bg-transparent flex justify-center flex-row content-center items-center ">
      <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-96 w-60">
        <a href="#" className="block w-full h-full">
          <ImageComponent
            src="/img/project.png"
            className="object-contain w-full max-h-40"
          />
          <BodyCard />
        </a>
      </div>
    </div>
  );
};
