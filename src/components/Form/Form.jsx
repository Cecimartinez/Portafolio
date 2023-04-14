import { Button } from "../Buttons/Button";
import { Input } from "../Inputs/Input";
import { Subtitle } from "../Subtitle/Subtitle";

export const Form = () => {
  return (
    <form className="flex w-full max-w-sm space-x-3">
      <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow">
        <Subtitle
          className="mb-6 text-3xl font-light text-center text-gray-800 "
          text="contact us!"
        />

        <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
          <div className="col-span-2 lg:col-span-1">
            <div className=" relative ">
              <Input
                inputType={"email"}
                nameType={"email"}
                className={
                  " rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                }
              />
              <Input
                inputType={"text"}
                nameType={"text"}
                className={
                  " rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                }
              />
            </div>
          </div>
          <Button
            type={"submit"}
            value={"Send"}
            className={
              "py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            }
          />
        </div>
      </div>
    </form>
  );
};
