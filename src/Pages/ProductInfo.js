import React, { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import fireDB from "../fireConfig";
import { useParams } from "react-router";
import Layout from "../Components/Layout";


function ProductInfo() {
  const [product, setProduct] = useState();
  const [loading, setloading] =useState(false) 
  const params = useParams();
  
  
  useEffect(() => {
    getData();
  }, );

  async function getData() {
    try {
      
      
      const productTemp = await getDoc(
        doc(fireDB,"products" , params.productid)
        
      );
       setProduct(productTemp.data());
       setloading(false)
    } catch (error) {
      console.log("this is the error due to product fetch from inventory", error);
      setloading(false);
    }
  }

  return (
    <Layout loading = {loading}>
       <div className="container">
                <div className = "row justify-content-center">
                    <div className="col-md-8">
                        {product && (
                            <div>
                                <p>
                                    <b>{product.name}</b>
                                </p>
                                <img src={product.imageURL} className="product-info-img" alt ='product'/>
                                <hr />
                                <p>{product.description}</p>
                                <div className="d-flex justify-content-end my-3"  >
                                    <button >ADD TO CART</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
    </Layout>
  );
}


export default ProductInfo;
