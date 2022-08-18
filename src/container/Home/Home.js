import "./Home.css";

import Header from "../../component/Header/Header";
import FilterProduct from "../../component/Product/FilterProduct/FilterProduct";
import Product from "../../component/Product/Product";


function Home({ news,category, currentSelected, sortPrice, getProductById, addCart , cart}) {
  return (
    <>
      <Header cart={cart} />
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

export default Home;
