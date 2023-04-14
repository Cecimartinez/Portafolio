import { ImageComponent, Form } from "@/components";

export const Contact = () => {
  return (
    <div className="flex justify-center w-screen h-screen">
      <div className="form-container justify-center flex content-center items-center">
        <Form />
        <ImageComponent
          src="../img/contact.png"
          className={`w-60, h-60 `}
          alt="ContactMeImage"
        />
      </div>
    </div>
  );
};
