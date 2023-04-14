import { Navigate, Route, Routes } from "react-router-dom";
import { AboutMe, Contact, Home, Languages, Projects } from "../pages";
import { ROUTE_PATHS } from "./utils/routePaths";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path={ROUTE_PATHS.ABOUT} element={<AboutMe />} />
        <Route path={ROUTE_PATHS.LANGUAGES} element={<Languages />} />
        <Route path={ROUTE_PATHS.PROJECTS} element={<Projects />} />
        <Route path={ROUTE_PATHS.CONTACT} element={<Contact />} />

        <Route path="/*" element={<Navigate to={""} />} />
      </Routes>
    </>
  );
};
