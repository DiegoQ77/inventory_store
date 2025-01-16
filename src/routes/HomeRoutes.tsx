import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";

const HomeRoutes = {
    path: "/",
    element: <HomeLayout />,
    children: [
        {
            path: "",
            element: <Home />
        },
        {
            path: "demo",
            element: <Home />
        },
    ]
}

export default HomeRoutes