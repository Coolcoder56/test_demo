import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from "../fireConfig";
import { fireproducts } from "../firecommerce-product";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../Components/Banner";
import Cards from "../Components/Cards";
import HeroSection from "./HeroSection";
import { alignPropType } from "react-bootstrap/esm/types";
import Movingtext from "../Components/Movingtext";
import { FaVideo, FaYandexInternational } from "react-icons/fa";

function Homepage() {
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
    <div>
      <Layout loading={loading}>
        <Banner />
        <Cards />
        <HeroSection />
        {/* <div >
        <section className="section-margin">
          <div className="container-fluid">
            <h2>Value propositions</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="value-prop-class-center">
                  <img src ='https://i.pinimg.com/originals/0b/5f/c8/0b5fc864c174f4bea7e93892e5eeb00a.jpg' alt=""/>
                  <h3>No. of items</h3>
                  </div>
                </div>
            </div>
          </div>
          </section>
      </div> */}
        {/* <div className="container">
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
      </div> */}
      </Layout>
    </div>
  );
}

export default Homepage;
