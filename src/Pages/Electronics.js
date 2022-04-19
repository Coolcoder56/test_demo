import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from "../fireConfig";
import { fireproducts } from "../firecommerce-product";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {Carousel} from 'react-bootstrap'
const Newbanner = () => {
  return (
    <div>
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/b4/6e/b7/b46eb746f7664083877a42aa05062dfe.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 id = 'firstslider_text'>Welcome to Litonline</h3>
      <p id = 'firstslider_text'>We present to you a world of ecommerce...</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://static.vecteezy.com/system/resources/thumbnails/001/937/856/small/paper-art-shopping-online-on-smartphone-sale-promotion-backgroud-banner-for-market-ecommerce-free-vector.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 id = 'firstslider_text'>Amazing offers </h3>
      <p id = 'firstslider_text'>Keep browsing to find more...</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://thumbs.dreamstime.com/b/saint-petersburg-russia-circa-may-goods-display-sony-store-galeria-shopping-center-electronics-store-134641471.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 id = 'firstslider_text'>Buy what you want</h3>
      <h3  id = 'firstslider_text'>Special sale discounts and much more...</h3>
      <p style ={{color : 'purple'}}>Policies apply...</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      
    </div>
  )
}

function Electronics() {
  const [products, setProducts] = useState([]);
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function adddata() {
    try {
      await addDoc(collection(fireDB, "users"), { name: "Ram", age: 22 });
    } catch (error) {
      console.log(error);
    }
  }

  async function getData() {
    try {
      setloading(true);
      const user = await getDocs(collection(fireDB, "products"));
      const productsArray = [];
      user.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };

        productsArray.push(obj);
        setloading(false);
      });

      setProducts(productsArray);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }
  function addproductsData() {
    try {
      fireproducts.map(async (product) => {
        await addDoc(collection(fireDB, "products"), product);
      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addTocart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <Layout loading={loading}>
      <Newbanner/>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-4  ">
                <div className="m-2 p-1 product position-relative">
                  <div className="product-content">
                    <p>{product.name}</p>
                    <div className="text-center">
                      <img
                        src={product.imageURL}
                        alt={product.name}
                        className="product-img"
                      />
                    </div>
                  </div>
                  <div className="product-actions">
                    <h2>{product.price} RS/-</h2>
                    <div className="d-flex">
                      <button onClick={() => addTocart(product)}>
                        ADD TO CART{" "}
                      </button>
                      <button
                        onClick={() => {
                          navigate(`/productinfo/${product.id}`);
                        }}
                      >
                        VIEW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Electronics;
