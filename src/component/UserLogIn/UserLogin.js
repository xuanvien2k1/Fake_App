import { Link } from "react-router-dom";
// import Loading from "../Loading/Loading";
// import { useState } from "react";

const UserLogIn = () => {
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   setLoading(false)
  // }
  // )
  return (
    <>
    <div className="navbar">
        <div className="logo-nav">
          <img
            src="https://www.orbs.com/assets/img/common/logo.svg"
            alt="..."
          />
          <p className="name-logo">Vin Store</p>
        </div>
        <div className="logo-banner">
          <Link to="/login" className="btn-log">
            Login
          </Link>
          <ul className="navbar-top-flags">
            <li>
              <a href=".">
                <img
                  src="https://www.orbs.com/assets/img/navbar/usa.svg"
                  alt="..."
                />
              </a>
            </li>
            <li>
              <a href=".">
                <img
                  src="https://www.orbs.com/assets/img/navbar/korea.svg"
                  alt="..."
                />
              </a>
            </li>
            <li>
              <a href=".">
                <img
                  src="https://www.orbs.com/assets/img/navbar/japan.svg"
                  alt="..."
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="banner">
          <img src="https://img.freepik.com/free-psd/clothing-designer-cup-coffee-mock-up_23-2148654793.jpg?w=2000" alt="" />
        </div>
      </div>
      </>
  );
};
export default UserLogIn;
