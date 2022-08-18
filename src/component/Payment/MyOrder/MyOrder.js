function MyOrder() {
    return(
        <>
            <div>
                <div className="product-all-order">
                    <div className="product-my-order">
                        <img className="order-product"
                                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                                alt="..."/>
                        <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
                    </div>
                    <div>
                        <span>110.85$</span>
                    </div>
                </div>
                <div>
                    <div className="order-money">
                    <p>Tính Tiền :</p>
                    <p>110.85$</p>
                    </div>
                    <div className="ship">
                    <p>Phí Vận Chuyển :</p>
                    <p>15.000$</p>
                    </div>
                </div>
                <div className="">
                    <p>Tổng Tiền</p>
                    <p>110.85$</p>
                </div>
                <button className="btn-check">Checkout</button>
            </div>
        </>
    );
}
export default MyOrder;