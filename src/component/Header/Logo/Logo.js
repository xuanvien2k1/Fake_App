// import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <img src="https://www.orbs.com/assets/img/common/logo.svg" alt="..." />
      &nbsp;
      <h1
        className="logo-color"
        onClick={() => {
          window.location.reload();
        }}
      >
        VIN STORE
      </h1>
    </div>
  );
}
export default Logo;
