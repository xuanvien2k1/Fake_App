import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import PopUp from "./component/PopUp/PopUp";
import CheckOut from "./container/Checkout/CheckOut";
import Home from "./container/Home/Home";
import Log from "./container/Log/Log";
import Poster from "./container/Poster/Poster";
import PageCart from "./container/PageCart/PageCart";
import PageProductDetail from "./container/PageDetailProduct/PageProductDetail";

function App() {
  const [show, setShow] = useState(false);
  const [showNoticePayment, setShowNoticePayment] = useState(false);
  const [news, setNews] = useState([]);
  const [cart, setCart] = useState([]);
  const [disableIncrease, setDisableIncrease] = useState(false);
  const [disableDecrease, setDisableDecrease] = useState(false);
  const [category, setCategory] = useState([]);
  const [categoriesId, setCategotiesId] = useState("");
  const [sort, setSort] = useState("asc");
  const [fullName, setFullName] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);
  const [village, setVillage] = useState([]);
  const [numberHome, setNumberHome] = useState("");
  const [citySelected, setCitySelected] = useState("");
  const [districtSelected, setDistrictSelected] = useState("");
  const [villageSelected, setVillageSelected] = useState("");
  const [disableDistrict, setDisableDistrict] = useState(true);
  const [disableVillage, setDisableVillage] = useState(true);
  const [payment, setPayment] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);


  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // load category by ID
  const currentSelected = (e) => {
    setCategotiesId(e.target.value);
  };
  const getProductById = () => {
    if (!categoriesId) {
      return news;
    }
    return news.filter((f) => f.category === categoriesId);
  };
  //load category
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategory(json);
      });
  }, []);

  // sort by Price
  const sortPrice = (e) => {
    setSort(e.target.value);
    if (sort === "desc") {
      const products = news.sort((a, b) => a.price - b.price);
      setNews(products);
    } else if (sort === "asc") {
      const products = news.sort((a, b) => b.price - a.price);
      setNews(products);
    }
    // const product =
    //   sort === ""
    //     ? news
    //     : sort === "asc"
    //     ? news.sort((a, b) => a.price - b.price)
    //     : news.sort((a, b) => b.price - a.price);

    // setNews(product);
  };
  // add to cart
  const addToCart = (product, amount) => {
    const ProductExist = cart.find((item) => item.id === product.id);
    if (ProductExist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + amount }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: amount,
        },
      ]);
    }
    setShow(true);
  };

  const addCart = (product) => {
    const ProductExist = cart.find((item) => item.id === product.id);
    if (ProductExist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };
  // load all products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setNews(json);
      });
  }, []);

  // delete cart
  const deleteCart = (el) => {
    let cartClone = [...cart];
    cartClone = cartClone.filter((cartItem) => cartItem.id !== el.id);
    setCart(cartClone);
  };

  const increase = (product) => {
    let itemCart = [...cart];
    let mapped = itemCart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + (item.quantity < 10 ? 1 : 0) }
        : { ...item }
    );
    if (product.quantity >= 10) {
      setDisableIncrease(true);
    } else {
      setDisableDecrease(false);
    }
    setCart(mapped);
  };
  const decrease = (product) => {
    let itemCart = [...cart];
    let mapped = itemCart.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity: item.quantity - (item.quantity > 1 ? 1 : 0),
          }
        : { ...item }
    );

    if (product.quantity <= 1) {
      setDisableDecrease(true);
    } else {
      setDisableIncrease(false);
    }

    setCart(mapped);
  };
  const closeModal = () => {
    setShow(false);
  };
  const closeNoticePayment = () => {
    setShowNoticePayment(false);
  };
  const deleteAllProduct = () => {
    setCart([]);
  };

  const changeFullName = (e) => {
    setFullName(e.target.value);
  };
  const changePhone = (e) => {
    setNumber(e.target.value);
  };
  const changeNumberHome = (e) => {
    setNumberHome(e.target.value);
  };
  const changeCity = (e) => {
    setCitySelected(e.target.value);
    setDisableDistrict(false);
  };

  const changeDistrict = (e) => {
    setDistrictSelected(e.target.value);
    setDisableVillage(false);
  };
  const changeVillage = (e) => {
    setVillageSelected(e.target.value);
  };
  const paymentProduct = () => {
    let cloneCart = [...cart];
    let clonePayment = [...payment];
    setPayment([
      {
        ...clonePayment,
        fullName: fullName,
        phone: number,
        city: citySelected,
        district: districtSelected,
        village: villageSelected,
        numberHome: numberHome,
        ...cloneCart,
      },
    ]);
    setCart([]);
    setShowNoticePayment(true);
  };

  useEffect(() => {
    fetch("https://api.mysupership.vn/v1/partner/areas/province")
      .then((res) => res.json())
      .then((json) => {
        setCity(json.results);
      });
  }, []);

  useEffect(() => {
    if (!citySelected) {
      return;
    } else {
      fetch(
        `https://api.mysupership.vn/v1/partner/areas/district?province=${citySelected}`
      )
        .then((res) => res.json())
        .then((json) => {
          setDistrict(json.results);
        });
    }
  }, [citySelected]);

  useEffect(() => {
    if (!districtSelected) {
      return;
    } else {
      fetch(
        ` https://api.mysupership.vn/v1/partner/areas/commune?district=${districtSelected}`
      )
        .then((res) => res.json())
        .then((json) => {
          setVillage(json.results);
        });
    }
  }, [districtSelected]);

  const handleApi = (e) => {
    e.preventDefault();
    console.log("Success");
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: email,
        password: password,
      })
      .then((results) => {
       setUser(results.config.data);
        alert("Success Login");
        window.location.assign("Fake_App");
      })
      .catch((error) => {
        console.log(error);
        // console.log(error.response);
        alert("invalid characters");
      });
  };
  console.log(user);
  return (
    <>
      <Routes>
        <Route
          path="/Fake_App"
          element={
            <Home
              category={category}
              currentSelected={currentSelected}
              sortPrice={sortPrice}
              news={news}
              getProductById={getProductById}
              addCart={addCart}
              cart={cart}
              user={user}
            />
          }
        />
        <Route
          path="/poster"
          element={
            <Poster/>
          }
        />
        <Route
          path="/product/:id"
          element={
            <PageProductDetail
              news={news}
              addToCart={addToCart}
              show={show}
              closeModal={closeModal}
              cart={cart}
              user={user}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <PageCart
              cart={cart}
              deleteCart={deleteCart}
              increase={increase}
              decrease={decrease}
              disableIncrease={disableIncrease}
              disableDecrease={disableDecrease}
              deleteAllProduct={deleteAllProduct}
              user={user}
            />
          }
        />
        <Route path="/popup" element={<PopUp />} />
        <Route
          path="/checkout"
          element={
            <CheckOut
              cart={cart}
              changeFullName={changeFullName}
              changePhone={changePhone}
              changeNumberHome={changeNumberHome}
              city={city}
              changeCity={changeCity}
              district={district}
              changeDistrict={changeDistrict}
              village={village}
              disableDistrict={disableDistrict}
              disableVillage={disableVillage}
              paymentProduct={paymentProduct}
              changeVillage={changeVillage}
              showNoticePayment={showNoticePayment}
              payment={payment}
              closeNoticePayment={closeNoticePayment}
              user={user}
            />
          }
        />
        <Route path="/login" element={<Log handleEmail={handleEmail} 
                                           handlePassword={handlePassword} 
                                           email={email} 
                                           password={password}
                                           handleApi={handleApi} />} />
      </Routes>

    </>
  );
}

export default App;
