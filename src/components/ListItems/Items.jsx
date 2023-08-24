import { Link } from "react-router-dom";

export const Items = ({ label, icon, to, stateOpen }) => {
  return (
    <>
      <Link className="item-link " to={`/${to || null}`}>
        <div className="nav-link cursor-pointer flex items-center  ">
          <span className={`material-symbols-outlined icon m-1`}>{icon}</span>
          <span className={`text ml-3 nav-text ${!stateOpen && "hidden"}`}>
            {label}
          </span>
        </div>
      </Link>
    </>
  );
};
