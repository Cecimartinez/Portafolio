import { ListItem } from "../../ListItems/ListItem";

export const SideBarMenu = ({ open}) => {
  return (
    <div className="menu-bar "> 
      <ul className="menu">
        <ListItem stateOpen={open} />
      </ul>
    </div>
  );
};
