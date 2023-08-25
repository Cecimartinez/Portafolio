import { Link } from "react-router-dom";
import { ImageComponent } from "../../ImageComponent/ImageComponent";
import logo from "../../../assets/img/logo.png"

export const SideBarHeader = ({ open, setOpen }) => {
  return (
    <header className="relative">
      <div className="image-text my-2 flex items-center">
        <div className="image flex items-center justify-center bg-white rounded-full m-2 ">
          <Link to="/*">
            <ImageComponent
              src={logo}
              alt="logo"
              className={`w-12 cursor-pointer ${
                !open && "rotate-[360deg]  duration-500"
              }`}
            />
          </Link>
        </div>

        <div className="text header-text  flex flex-col">
          <span className={`name ${!open && "scale-0"} m-1 text-base`}>
            Cecilia Martinez{" "}
          </span>
          <span className={`profesion block text-[#725afc] text-sm m-1 ${!open && "scale-0"}`}>
            Web developer
          </span>
        </div>
      </div>

      <span
        onClick={() => setOpen(!open)}
        className={`toggle material-symbols-outlined h-6 w-6 flex items-center justify-center text-[#e3e1ff] absolute cursor-pointer text-xl bg-[#725afc] ${
          !open && "rotate-[180deg]"
        }`}
      >
        chevron_left
      </span>
    </header>
  );
};
