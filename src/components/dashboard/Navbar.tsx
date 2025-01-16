import logo from "../../assets/logo.png";
import navImage from "../../assets/navbarimage.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="" />
      </div>
      <div className="navbar__search">
        <input type="text" placeholder="search for anything" />
        <button className="btn">h</button>
      </div>
      <div className="navbar__details">
        <p>Docs</p>
        <div className="image-container">
          <img src={navImage} alt="" />
          <div>
            <p>Adedeji</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
