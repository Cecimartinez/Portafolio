import { SIDEBARITEMS } from "../../constants/sidebarConst/sidebar.const";
import { Items } from "./Items";


export const ListItem = ({ stateOpen }) => {
  return (
    <ul className="menu-links mt-10  hover:text-white ">
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
