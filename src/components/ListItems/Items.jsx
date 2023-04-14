import { Link } from "react-router-dom";


/* 
! Arreglar el area de accion del link. Fijarse en la web que el puntero no se activa hasta que esta el mouse encima del icono.
! Cuando deberia activarse cuando esta encima del ITEM
*/

export const Items = ({ label, icon, to, stateOpen}) => {
  return (
    <>
      <li className="nav-link ">
      {/* <li className={label === "dark" ? "nav-link" : "otro estilo"}> */}
        <Link className="item-link" to={`/${to || null}`}>
          <span className={` material-symbols-outlined icon  hover:text-white `}>{icon}</span>
          <span className={`text nav-text  hover:text-white ${!stateOpen && "hidden"}`}>
            {label}
          </span>
        </Link>
      </li>
    </> 
  );
};
