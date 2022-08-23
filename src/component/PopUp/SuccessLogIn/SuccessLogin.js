import { Link } from "react-router-dom";

function SuccessLogIn({ closeNoticeLogIn, show }) {
  return show ? (
    <div className="success">
      <div className="pop-up">
        <div className="add-cart-success">
          <div className="icon-sucess">
            <img
              src="https://ich.edu.vn/App_Files/Upload/2019/icon-thanh-cong.png"
              alt="..."
            />
          </div>
          <div className="content-add-cart">
            <h3>Thông báo</h3>
            <p>Đăng nhập Thành Công !</p>
            <Link to="/Fake_App">
              <button className="left" onClick={closeNoticeLogIn}>
                OK
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default SuccessLogIn;
