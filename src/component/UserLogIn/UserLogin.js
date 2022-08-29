import { Link } from "react-router-dom";

const UserLogIn = () => {
  return (
    <div>
      <div className="navbar">
        <p className="name-logo">Vin Store</p>
        <div className="">
          <Link to="/login" className="btn-log">
            Login
          </Link>
          &nbsp;{" "}
          <a className="fb" href="https://www.facebook.com/" target="_blank">
            <i class="fa-brands fa-facebook"></i>
          </a>
          &nbsp;&nbsp;
          <a className="yt" href="https://www.youtube.com/" target="_blank">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
      <div>
        <div className="banner">
          <img src="https://img.freepik.com/free-psd/horizontal-banner-template-big-sale-with-woman-shopping-bags_23-2148786755.jpg?w=2000" />
        </div>
      </div>
    </div>
  );
};
export default UserLogIn;
