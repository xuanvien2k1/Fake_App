import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <h1>
        <Link to="/" className="logo-color">VIN STORE</Link>
      </h1>
    </div>
  );
}
export default Logo;
