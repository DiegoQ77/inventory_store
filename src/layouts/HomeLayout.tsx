import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div>
      <h2>marco en todas las pantallas</h2>
      <Outlet />
      <h2>footer</h2>
    </div>
  );
}

export default HomeLayout;
