import "./HomeLogIn.css";

import FilterProduct from "../../component/Product/FilterProduct/FilterProduct";
import Product from "../../component/Product/Product";
import HeaderLogIn from "../../component/HeaderLogIn/HeaderLogIn";

function HomeLogIn({ news,category, currentSelected, sortPrice, getProductById, addCart , cart}) {
  return (
    <>
      <HeaderLogIn cart={cart} />
      <FilterProduct
        category={category}
        currentSelected={currentSelected}
        sortPrice={sortPrice}
        getProductById={getProductById}
      />
      <Product news={news} getProductById={getProductById} addCart={addCart} />
    </>
  );
}

export default HomeLogIn;
