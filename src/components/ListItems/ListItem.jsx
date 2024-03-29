import { SIDEBARITEMS } from "../../constants/sidebarConst/sidebar.const";
import { Items } from "./Items";

export const ListItem = ({ stateOpen }) => {
  return (
    <ul className="menu-links flex flex-col ">
      {SIDEBARITEMS.map((item) => (
        <Items
          key={item.propName}
          label={item.label}
          icon={item.icon}
          to={item.propName}
          stateOpen={stateOpen}
        />
      ))}
    </ul>
  );
};
