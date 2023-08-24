import { Footer } from "./components";
import { SideBar } from "./components/SideBar/SideBar";
import "./components/SideBar/SideBarStyle.css";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <div className="flex">
      {/* <Footer/> */}
      <SideBar />
      <AppRouter />
      

      <div className="container-box-background background flex">
      
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

      </div>
    </div>
  );
};
