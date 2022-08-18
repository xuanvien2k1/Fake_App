import "./ProductDetail.css";
import Header from "../../component/Header/Header";
import ProductDetail from "../../component/ProductDetail/ProductDetail";

function PageProductDetail({
  news,
  addToCart,
  show,
  closeModal,
  getProductById,
  cart
}) {
  return (
    <>
        <Header cart= {cart} />
        <ProductDetail
          news={news}
          addToCart={addToCart}
          show={show}
          closeModal={closeModal}
          getProductById={getProductById}
        />
    </>
  );
}

export default PageProductDetail;
