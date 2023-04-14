import { SideBar } from "./components/SideBar/SideBar";
import "./components/SideBar/SideBarStyle.css";
import { AppRouter } from "./router/AppRouter";

/* 
todo: Cambiar el nombre. No se entiende lo que es
todo: segregar el componente en conjunto con nombres mas descriptivos
! La etiqueta main esta mal utilizada
! No tiene una carpeta o seccion asignada en el contexto de carpetas
*/

export const App = () => {
  return (
    <div className="flex">
      <SideBar />
      <AppRouter />
      <main className="background flex">
      
        < li className="box"></ li>
        < li className="box"></ li>
        < li className="box"></ li>
        < li className="box"></ li>
        < li className="box"></ li>
        < li className="box"></ li>
        < li className="box"></ li>
        < li className="box"></ li>
        < li className="box"></ li>
        < li className="box"></ li>
        < li className="box"></li>
        
      </main>
    </div>
  );
};
