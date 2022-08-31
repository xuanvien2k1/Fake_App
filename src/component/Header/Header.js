import { Link } from "react-router-dom";
import Logo from "./Logo/Logo";

function Header({ cart, user, authTokens, setTokens, handleLogout }) {
  const users = JSON.parse(localStorage.getItem("tokens")) || [];

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

          {users.username === null ? null : (
            <p className="user">{users.username}</p>
          )}
          <div class="dropdown">
            <button class="dropbtn">
              <img
                src="https://www.orbs.com/assets/img/navbar/hamburger.svg"
                className="menu-burger-img"
                alt="..."
              />
            </button>

            <div class="dropdown-content">
              <Link to="/Fake_App">
                <p className="login">Home</p>
              </Link>
              <div>
                {authTokens ? (
                  <Link to="/login" onClick={handleLogout}>
                    Logout
                  </Link>
                ) : (
                  <Link to="/login">
                    <p className="logout">Login</p>
                  </Link>
                )}
                {/* <Link to="/login">
                  <p className="logout">Login</p>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
