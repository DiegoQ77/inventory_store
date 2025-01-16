import { useRoutes } from "react-router-dom";
import HomeRoutes from "./HomeRoutes";

function RoutesApp() {
    return useRoutes([HomeRoutes])
}


export default RoutesApp