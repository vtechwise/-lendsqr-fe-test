import { Outlet } from "react-router";

const Homelayout = () => {
  return (
    <div>
      <nav className="yellow">navbar</nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Homelayout;
