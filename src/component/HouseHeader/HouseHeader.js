import { Link } from "react-router-dom";
import LogoHouse from "./LogoHouse/logoHouse";

function HouseHeader({ cart }) {
  return (
    <div className="header">
      <div className="header-bar">
        <LogoHouse />
        <div className="cart">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping">
              <span>{cart.length}</span>
            </i>
          </Link>
          <Link to="/Fake_App">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </Link>
          <p className="user">User</p>
        </div>
      </div>
    </div>
  );
}
export default HouseHeader;
