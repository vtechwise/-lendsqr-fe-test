import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";
import Navbar from "../../components/dashboard/Navbar";

const Homelayout = () => {
  return (
    <div>
      <Navbar />
      <section className="dashboard-layout">
        <div className="dashboard-layout__sidebar">
          <Sidebar />
        </div>
        <main className="dashboard-layout__content">
          <Outlet />
        </main>
      </section>
    </div>
  );
};
export default Homelayout;
