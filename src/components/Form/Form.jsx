import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button } from "../Buttons/Button";
import { Input } from "../Inputs/Input";
import { Subtitle } from "../Subtitle/Subtitle";

export const Form = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  emailjs.init("formMessagePortafolio");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('formMessagePortafolio', 'template_8xjg2vf', e.target, 'cTAv1kjXy1YVuBDkk')
      .then((result) => {
        console.log('Correo enviado correctamente:', result.text);
        setIsFormSubmitted(true);
        setFormData(initialFormData);
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error.text);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form
      className="mt-8 mb-2 w-full bg-white sm:w-96 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg p-7 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="mb-4 flex flex-col gap-6">
        <Subtitle
          className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-black antialiased"
          text="Contact me!"
        />

        <div className="flex flex-col max-w-xl">
          <Input
            name="name"
            inputType={"Fullname"}
            nameType={"Fullname"}
            value={formData.name}
            onChange={handleInputChange}
            className="my-2 peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-white px-3 py-3 font-sans text-sm font-normal text-[#3a3b3c] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#5e42ff] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          />

          <Input
            name="email"
            inputType={"Email"}
            nameType={"Email"}
            value={formData.email}
            onChange={handleInputChange}
            className="my-2 peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-white px-3 py-3 font-sans text-sm font-normal text-[#3a3b3c] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#5e42ff] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          />

          <textarea
            name="message"
            cols="30"
            rows="2"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            className="my-2 peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-white px-3 pb-7 font-sans text-sm font-normal text-[#3a3b3c] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#5e42ff] focus:border-t-transparent focus:outline-0 scrollbar disabled:border-0 disabled:bg-blue-gray-50 scrollbar-thin scrollbar-thumb-[#725afc] scroll-m-1"
          ></textarea>

          <Button
            type={"submit"}
            value={"Send"}
            className="mt-6 block w-full select-none rounded-lg bg-[#664bff] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#725afc61] transition-all hover:shadow-lg hover:shadow-[#806bfba7] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          />
        </div>
      </div>
    </form>
  );
};
