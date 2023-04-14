import { ImageComponent } from "@/components";

export const CarrouselSkills = () => {
  return (
    <>
      <div
        id="content-carrousel"
        className=" content-carrousel flex items-center justify-center"
      >
        <span id="span-skill" className="px-8 py-6 border-2 border-[#525252] ">
          <ImageComponent
            id="skill-img"
            src="../img/js.png"
            alt="logo"
            className={`w-28 h-28 my-4 object-contain `}
          />
        </span>

        <span id="span-skill" className="px-8 py-6 border-2 border-[#525252] ">
          <ImageComponent
            id="skill-img"
            src="../img/html.png"
            alt="logo"
            className={`w-28 h-28 my-4 object-contain `}
          />
        </span>

        <span id="span-skill" className="px-8 py-6 border-2 border-[#525252] ">
          <ImageComponent
            id="skill-img"
            src="../img/css.png"
            alt="logo"
            className={`w-28 h-28 my-4 object-contain `}
          />
        </span>

        <span id="span-skill" className="px-8 py-6 border-2 border-[#525252] ">
          <ImageComponent
            id="skill-img"
            src="../img/python.png"
            alt="logo"
            className={`w-28 h-28 my-4 object-contain `}
          />
        </span>

        <span id="span-skill" className="px-8 py-6 border-2 border-[#525252] ">
          <ImageComponent
            id="skill-img"
            src="../img/react.png"
            alt="logo"
            className={`w-28 h-28 my-4 object-contain `}
          />
        </span>

        <span id="span-skill" className="px-8 py-6 border-2 border-[#525252] ">
          <ImageComponent
            id="skill-img"
            src="../img/nodejs.png"
            alt="logo"
            className={`w-28 h-28 my-4 object-contain `}
          />
        </span>

        <span id="span-skill" className="px-8 py-6 border-2 border-[#525252] ">
          <ImageComponent
            id="skill-img"
            src="../img/tailwind.png"
            alt="logo"
            className={`w-28 h-28 my-4 object-contain `}
          />
        </span>

        <span id="span-skill" className="px-8 py-6 border-2 border-[#525252] ">
          <ImageComponent
            id="skill-img"
            src="../img/figma.png"
            alt="logo"
            className={`w-28 h-28 my-4 object-contain `}
          />
        </span>

        <span id="span-skill" className="px-8 py-6 border-2 border-[#525252] ">
          <ImageComponent
            id="skill-img"
            src="../img/bootstrap.png"
            alt="logo"
            className={`w-28 h-28 my-4 object-contain `}
          />
        </span>
      </div>
    </>
  );
};
