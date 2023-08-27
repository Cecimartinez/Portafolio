import { useState } from "react";
import { SideBarHeader } from "./SideBarHeader";
import { SideBarMenu } from "./SideBarMenu";

export const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 h-screen">
      <nav
        id="sidebar"
        data-theme="light"
        className={`${
          open ? "w-72" : "w-20"
        } sidebar w-72 h-screen  left-0 relative transition-width duration-200 ease-in-out flex flex-col justify-between`}
      >
        <SideBarHeader open={open} setOpen={setOpen} />
        <SideBarMenu open={open} />
      </nav>
    </div>
  );
};
