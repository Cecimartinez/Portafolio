import { useState, useEffect } from "react";
import { ImageComponent } from "@/components";
import { Tag } from "../Tag/Tag";
import { Modal } from "../Modal/Modal";
import { Button } from "../Buttons/Button";

export const Card = ({ name, description, html_url, language, projectNumber, imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const body = document.body;
    if (isModalOpen) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }
    return () => {
      body.style.overflowY = "auto";
    };
  }, [isModalOpen]);

  return (
    <div className="projects bg-transparent flex justify-center">
      <div className="m-auto overflow-hidden rounded-lg shadow-lg bg-[#fff] w-full sm:w-60 md:w-96 lg:w-96 xl:w-96">
        <ImageComponent
          src={imageUrl}
          className="object-contain w-full my-4 py-4 h-auto sm:h-52 md:h-60 lg:h-50 xl:h-50"
        />
        <div className="w-full p-4 bg-white white:bg-gray-800 shadow-lg">
          <p className="text-indigo-500 text-xs font-bold">Project #{projectNumber}</p>
          <h3 className="mb-2 text-base font-semibold text-[#9C9C9C]">
            {name}
          </h3>

          <div className="flex flex-wrap items-center mt-4">
            <Tag nameSkill={language} />
          </div>

          <Button
            onClick={openModal}
            className="mt-4 bg-[#7f65ff] transition-all hover:bg-[#6445ff] text-white text-xs font-semibold py-1 px-3 rounded-xl"
            value="Ver detalles"
          />

          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="bg-white p-4 flex flex-col justify-center items-start">
              <h3 className="text-xl px-3 font-semibold text-[#000] my-2">{name}</h3>
              <p className="my-3 px-3 ">{description}</p>
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:bg-[#d6cfff73] text-[#7f65ff]  font-medium py-2 px-3 rounded-full hover:shadow-sm transition-transform transform hover:scale-105 duration-300 ease-in-out  text-base inline-block "
              >
                Ir al repositorio
              </a>
            </div>

            <Button
              onClick={closeModal}
              className="mt-1 bg-[#7f65ff] transition-all hover:bg-[#6e51ff] text-white font-semibold text-sm py-1  m-2 px-3 rounded-xl "
              value="Cerrar"
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};
