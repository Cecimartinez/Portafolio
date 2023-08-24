import { ImageComponent } from "@/components";
import { Paragrap } from "../../../components/Paragraph/Paragraph";

export const AboutBody = () => {
  return (
    <div className="font-normal text-white mx-8 items-center flex justify-center">
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <ImageComponent
            src="../img/aboutme.png"
            className="w-40 h-40 mx-auto md:mx-0 md:w-60 md:h-60"
            alt="AboutMeImage"
          />
        </div>
        <div className="my-7">
          <Paragrap
            type="text"
            className="text-sm leading-5 md:leading-6 text-justify"
            content="Soy una programadora fullstack apasionada por el mundo de la tecnología y la programación. Me encanta explorar nuevas herramientas y tecnologías, buscando mejorar mi habilidad para crear soluciones innovadoras y de alta calidad. Mi experiencia en desarrollo web y en múltiples lenguajes de programación me ha permitido abordar proyectos desafiantes y encontrar soluciones creativas para cumplir con los requerimientos de los clientes."
          />
        </div>
        <div className="flex justify-center">
          <a
            href="https://github.com/Cecimartinez"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
          >
            <ImageComponent src="../img/github.png" className="w-14 h-14" />
          </a>
          <a
            href="https://www.linkedin.com/in/cecilia-mart%C3%ADnez-%E2%9A%9B%EF%B8%8F-%F0%9F%9A%80-7420a524a"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
          >
            <ImageComponent src="../img/in.png" className="w-14 h-14" />
          </a>
        </div>
      </div>
    </div>
  );
};
