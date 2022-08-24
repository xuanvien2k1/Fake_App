import { Link } from "react-router-dom";
import Logo from "./LogoLogIn/LogoLogIn";

function Header({cart}) {
  return (
    <div className="header">
      <div className="header-bar">
        <Logo/>
        <div className="cart">
      <Link to="/cart">
        <i className="fa-solid fa-cart-shopping">
        <span>{cart.length}</span>
        </i>
      </Link>
      <Link to="/Fake_App">
          <i className="fa-solid fa-house-chimney-crack"></i>
        </Link>
        <p className="login">
            <i className="fa-solid fa-user-check"></i>
          </p>
      </div>
      </div>
    </div>
  );
}
export default Header;
