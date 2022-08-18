import { Link } from "react-router-dom";

function ItemProduct({ item, addCart }) {
  const rate = item["rating"];
  return (
    <>
   
      <div className="item-product" key={item.id}>
        <div className="product-image">
          <Link to={`/product/${item.id}`}>
            <img src={item.image} alt="" />{" "}
          </Link>
        </div>
        <div className="information-product">
          <div className="product-name">
            <Link to={`/products/${item.id}`}>
              <p>{item.title}</p>
            </Link>
          </div>
          <div className="price">
            <Link to ={`/products/${item.id}`}>
            <span className="text-price">{item.price}$</span>
            </Link>
            <span className="count-buy">Đã bán {rate.count}</span>
          </div>
        </div>
        {/* <div className="preview-product">
        <Link to={`/product/${item.id}`}>Xem chi tiết</Link>
        </div> */}
        <div className="btn-add-cart">
          <button type="submit" onClick={() => {if (window.confirm("Do you want to add to the cart?")) addCart(item)}}>
            Thêm vào giỏ hàng <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
      
    </>
  );
}

export default ItemProduct;
