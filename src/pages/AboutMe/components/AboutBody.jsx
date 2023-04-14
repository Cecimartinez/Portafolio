import { ImageComponent } from "@/components";
import { Paragrap } from "../../../components/Paragraph/Paragraph";

/* 
todo: en conjunto con medidas responsives, abstraer el body en un componente global. Hacer lo que haga falta para que -
todo: - sea utilizado en cualquier parte y funcione de manera correcta y se vea de manera correcta
*/
export const AboutBody = () => {
  return (
    <div className=" font-medium text-white flex justify-between items-center md:flex-row md:justify-between md:gap-x-28 mx-8">
      <Paragrap
        type="text"
        classname={"mt-6 text-lg leading-9 text-justify"}
        content="Deleniti, pariatur quas sunt, molestias corrupti
        expedita enim reiciendis dolore quae tempore autem id accusamus
        veritatis obcaecati itaque magni. Expedita, numquam temporibus."
      />
      <ImageComponent
        src="../img/aboutme.png"
        className={`w-60, h-60 `}
        alt="AboutMeImage"
      />
    </div>
  );
};
