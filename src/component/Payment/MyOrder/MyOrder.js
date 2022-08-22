function MyOrder({ cart, paymentProduct }) {
  const totalMoney = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <>
      <div className="form-order">
        <div className="product-all-order">
          {cart.map((c, index) => {
            return (
              <div className="product-my-order" key={index}>
                <div className="name-product-order">
                  <img className="order-product" src={c.image} alt="..." />
                  <p>{c.title}</p>
                </div>
                <div>
                  <span>{c.price}$</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="form-money">
          <div className="order-money">
            <p>Tính Tiền :</p>
            <p>
              {cart.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
              $
            </p>
          </div>
          <div className="ship">
            <p>Phí Vận Chuyển :</p>
            <p>15$</p>
          </div>
        </div>
        <div className="total">
          <p>Tổng Tiền</p>
          <p>{totalMoney + 15}$</p>
        </div>
        <button className="btn-check" onClick={paymentProduct}>
          Checkout
        </button>
      </div>
    </>
  );
}
export default MyOrder;
