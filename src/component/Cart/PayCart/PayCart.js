// import React , {useContext} from "react";
// import {CartContext} from "./Cart";
function PayCart() {
  
  return (
    <>
      <h5>
        Cart Total : <td>2000</td>
      </h5> 
      <button className="btn-clear">Clear Cart</button>
      <button className="btn-payment">Checkout</button>
    </>
  );
}

export default PayCart;
