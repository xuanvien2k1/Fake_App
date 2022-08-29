import { Link } from "react-router-dom";

function Cart({
  cart,
  deleteCart,
  increase,
  decrease,
  disableDecrease,
  disableIncrease,
  deleteAllProduct,
}) {
  if (cart.length === 0) {
    return (
      <div className="list-product-cart">
        <div className="list">
          <img
            className="cart-empty"
            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/9bdd8040b334d31946f49e36beaf32db.png"
            alt="..."
          />
          <p>Không có gì hết nha!</p>
          <Link to="/Fake_App">
            <button className="btn-buynow">Mua Ngay</button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="cart">
      <div className="list-product-cart">
        <h1>Giỏ Hàng</h1>
        <div className="list">
          <table>
            <tbody>
              <tr>
                <td>Picture</td>
                <td>Name</td>
                <td>Price</td>
                <td>Amount</td>
                <td>Total</td>
                <td></td>
              </tr>
              {cart.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        className="image-cart"
                        src={`${item.image}`}
                        alt=""
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}$</td>
                    <td>
                      <button
                        className="btn-amount"
                        onClick={() => decrease(item)}
                        disabled={disableDecrease}
                      >
                        {" "}
                        -{" "}
                      </button>
                      <input
                        type="text"
                        className="inputAmount"
                        placeholder=""
                        value={item.quantity}
                        disabled
                      />
                      <button
                        className="btn-amount"
                        onClick={() => increase(item)}
                        disabled={disableIncrease}
                      >
                        {" "}
                        +{" "}
                      </button>
                    </td>
                    <td>{Math.round(item.quantity * item.price)}$</td>
                    {/* delete product */}
                    <button
                      className="btn-delete"
                      onClick={() => {
                        if (window.confirm("Do you really want to delete?"))
                          deleteCart(item);
                      }}
                    >
                      Delete
                    </button>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="pay-cart">
            <h5 className="cart-total">
              Cart Total :{" "}
              {cart.reduce(
                (total, item) => Math.round(total + item.price * item.quantity),
                0
              )}
              $
            </h5>
            <div>
              <Link to="/checkout">
                <button className="btn-payment">Checkout</button>
              </Link>
              <button
                className="btn-clear"
                onClick={() => {
                  if (window.confirm("Do you really want to clear cart?"))
                    deleteAllProduct();
                }}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
