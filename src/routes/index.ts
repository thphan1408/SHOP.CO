import { useRoutes } from "react-router-dom";
import mainRoutes from "./mainRoutes";

function ThemeRoutes() {
  return useRoutes(mainRoutes);
}

export default ThemeRoutes;
