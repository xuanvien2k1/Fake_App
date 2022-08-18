import ItemProduct from "./ItemProduct/ItemProduct";
import PopUp from "../PopUp/PopUp";

function Product({ getProductById, show, closeModal, addCart}) {
  const product = getProductById();
 

  return (
    <>
      <div id="product">
        <h2>Sản Phẩm</h2>
        <div className="product">
          {product.map((item, index) => {
            return <ItemProduct key={index} item={item} addCart={addCart} />;
          })}
          
        </div>
      </div>
      <PopUp triggle={show} closeModal={closeModal}></PopUp>
    </>
  );
}
export default Product;
