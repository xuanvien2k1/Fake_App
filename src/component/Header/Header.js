import { Link } from "react-router-dom";
import Logo from "./Logo/Logo";

function Header({ cart, user }) {
  console.log(user);
  return (
    <div className="header">
      <div className="header-bar">
        <Logo />
        <div className="cart">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping">
              <span>{cart.length}</span>
            </i>
          </Link>
          {/* {user.length === 0 ? null : <p className="user">{user.username}</p>} */}
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <div class="dropdown-content">
              <Link to="/Fake_App">
                <p className="login">Home</p>
              </Link>
              <Link to="/login">
                <p className="login">Logout</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
