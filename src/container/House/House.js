import "./House.css";

import FilterProduct from "../../component/Product/FilterProduct/FilterProduct";
import Product from "../../component/Product/Product";
import HouseHeader from "../../component/HouseHeader/HouseHeader";


function House({ news,category, currentSelected, sortPrice, getProductById, addCart , cart}) {
  return (
    <>
      <HouseHeader cart={cart} />
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

export default House;
