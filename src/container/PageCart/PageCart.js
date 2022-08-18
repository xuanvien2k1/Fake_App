import Cart from "../../component/Cart/Cart";
import Header from "../../component/Header/Header";

import "./PageCart.css";

function PageCart({
  cart,
  deleteCart,
  increase,
  decrease,
  disableIncrease,
  disableDecrease,
  deleteAllProduct
}) {
  return (
    <>
      <Header cart={cart} />
      <Cart
        cart={cart}
        deleteCart={deleteCart}
        increase={increase}
        decrease={decrease}
        disableIncrease={disableIncrease}
        disableDecrease={disableDecrease}
        deleteAllProduct={deleteAllProduct}
      />
      
    </>
  );
}

export default PageCart;
