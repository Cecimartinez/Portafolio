import { ListItem } from "../../ListItems/ListItem";

export const SideBarMenu = ({ open, mode, handleChange }) => {
  return (
    <div className="menu-bar my-5 py-6">
      <ul className="menu ">
        <ListItem stateOpen={open} />
      </ul>

    </div>
  );
};
