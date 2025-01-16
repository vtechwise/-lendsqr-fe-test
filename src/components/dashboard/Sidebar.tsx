import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../../constant/Sidebarlinks";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {sidebarLinks.map((link) => {
        const { subtitle, items } = link;
        return (
          <ul key={subtitle}>
            <h4>{subtitle}</h4>
            {items.map((item) => {
              return (
                <li key={item.title}>
                  <NavLink to={item.link} className="link">
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        );
      })}
    </aside>
  );
};
export default Sidebar;
