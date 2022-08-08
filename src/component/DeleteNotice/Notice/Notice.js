import { Link } from "react-router-dom";

function Notice({ closeModal }) {
  return (
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
            <p>Xóa sản phẩm thành công !</p>
            {/* <Link to="/">
              <button className="left" onClick={closeModal}>
                Hủy
              </button>
              </Link> */}
            <button>
              <Link to="/" className="right">
                Agree and return home!
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notice;
