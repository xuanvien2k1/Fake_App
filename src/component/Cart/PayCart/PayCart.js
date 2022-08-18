// import React , {useContext} from "react";
// import {CartContext} from "./Cart";
function PayCart() {
  // const ContextCart = () => {
  //   const {item, clearCart} = useContext(CartContext)
  // }
  return (
    <>
      <h5>
        Cart Total : <td>2000</td>
      </h5> 
      <button className="btn-payment">Checkout</button>
      <button className="btn-clear">Clear Cart</button>
    </>
  );
}

export default PayCart;
