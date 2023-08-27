import { useState } from "react";
import { SideBarHeader } from "./SideBarHeader";
import { SideBarMenu } from "./SideBarMenu";

export const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <nav
        id="sidebar"
        data-theme="light"
        className={`${
          open ? "w-72 fixed h-screen top-0 left-0" : "w-20"
        } sidebar w-72 lg:relative transition-width duration-200 ease-in-out flex flex-col justify-center`}
      >
        <SideBarHeader open={open} setOpen={setOpen} />
        <SideBarMenu open={open} />
      </nav>
    </div>
  );
};
