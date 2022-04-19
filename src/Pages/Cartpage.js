import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Components/Layout";
import { FaTrash } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import fireDB from "../fireConfig";
import { toast } from "react-toastify";

function Cartpage() {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();
  const [name, setname] = useState(" ");
  const [address, setaddress] = useState(" ");
  const [phone, setphone] = useState(" ");
  const [pincode, setpincode] = useState(" ");
  const [loading, setloading] = useState(false);

  const placeOrder = async () => {
    const order = {
      name,
      address,
      phone,
      pincode,
    };
    console.log(order);
    const orderInfo = {
      cartItems,
      order,
      email: JSON.parse(localStorage.getItem("CurrentUser")).user.email,
      userid: JSON.parse(localStorage.getItem("CurrentUser")).user.uid,
    };
    try {
      setloading(true);
      await addDoc(collection(fireDB, "orders"), orderInfo);
      toast.success("Order Placed Successfully");
      setloading(false);
      
    } catch (error) {
      setloading(false);
      toast.error("Order Placed Failed");
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp += cartItem.price;
    });
    setTotalAmount(temp);
  }, [cartItems]);

  const deleteFromCart = (product) => {
    dispatch({ type: "DELETE_FROM_CART", payload: product });
  };
  return (
    <Layout loading={loading}>
      <table className="table mt-2">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <tr>
                <td>
                  <img
                    src={item.imageURL}
                    height="80"
                    width="80"
                    alt="product"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <FaTrash onClick={() => deleteFromCart(item)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <h2 className="total-amount">Total Amount = {totalAmount}$</h2>
      </div>
      <div className="d-flex justify-content-end">
        <button onClick={handleShow}>PLACE ORDER</button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Register</h2>
          <hr />

          <input
            type="text"
            className="form-control "
            placeholder="Name"
            value={name.name}
            onChange={(e) => setname(e.target.value)}
          />
          <textarea
            className="form-control "
            rows={3}
            placeholder="Address"
            value={address.address}
            onChange={(e) => setaddress(e.target.value)}
          ></textarea>
          <input
            type="number"
            className="form-control "
            placeholder="Phone-Number"
            value={phone.phone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
          />
          <input
            type="number"
            className="form-control "
            placeholder="Pincode"
            value={pincode.pincode}
            onChange={(e) => {
              setpincode(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={placeOrder}>
            Order
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
}

export default Cartpage;
