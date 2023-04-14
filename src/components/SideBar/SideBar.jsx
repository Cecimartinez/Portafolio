import { useEffect, useState } from "react";
import { useTheme } from "../../hook/useTheme";
import {ListItem} from "../../components"


/* 
todo: Se puede separar mas este componente
*/
export const SideBar = () => {
  const [mode, handleChange] = useTheme("dark");
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen">
      <nav
        id="sidebar"
        data-theme="ligth"
        className={` ${
          open ? "w-72" : "w-20"
        } sidebar w-72 h-screen  top-0 left-0  relative   `}
      >
        <header className="relative">
          <div className="image-text flex items-center">
            <span className="image flex  items-center justify-center">
              <img
                src="../img/logo-bitmoji.png"
                alt="logo"
                className={`w-12  ${
                  !open && "rotate-[360deg] cursor-pointer duration-500"
                }`}
              />
            </span>

            <div className="text header-text text-base flex flex-col">
              <span className={`name ${!open && "scale-0"}`}>
                Cecilia Martinez{" "}
              </span>
              <span className={`profesion block ${!open && "scale-0"}`}>
                Web developer
              </span>
            </div>
          </div>

          <span
            onClick={() => setOpen(!open)}
            className={` toggle material-symbols-outlined h-6 w-6 flex items-center justify-center text-[#e3e1ff] absolute cursor-pointer text-xl bg-[#695cfe] ${
              !open && "rotate-[180deg]"
            }`}
          >
            chevron_left
          </span>
        </header>

        {/* -----MENU----- */}

        <div className="menu-bar flex">
          {/* componente interno */}
          <ul className="menu">
            <li className="search-box flex ">
              <span className="material-symbols-outlined icon flex">search</span>
              <input
                type="search"
                id="search-box"
                placeholder="Search..."
                className="outline-none border-none  text-[#707070] text-lg"
              />
            </li>
            <ListItem className=" hover:text-white " stateOpen={open}  />
          </ul>

          <ul className="bottom-content ">
            <li className="mode flex items-center" id="mode">
              <span className="material-symbols-outlined icon moon flex ">
                dark_mode
              </span>

              <span className={`mode-text text ${!open && "hidden"} `}>
                Dark Mode
              </span>

              {/* componente switch interno */}
              <div className={`toggle-switch relative ${!open && "scale-0"}`}>
                <label className="lbl absolute cursor-pointer h-6 w-12">
                  <input
                    id="switch"
                    className="switch absolute  "
                    type="checkbox"
                    onChange={handleChange}
                    checked={mode === "ligth"}
                  />
                  <span className="slider absolute h-[10%] w-[10%] "></span>
                </label>
              </div>


            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
