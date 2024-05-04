import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "../App/App.css";

const Customer = () => {
  const history = useHistory();
  //Using for radioBoxcheck
  const dispatch = useDispatch();

  const items = [
    { value: "Delivery", label: "Delivery" },
    { value: "Pickup", label: "pickup" },
  ];

  const cartUpdate = useSelector((store) => store.updateCart);
  const [customerName, setCustomerName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [shipping, setShipping] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      customerName === "" ||
      street === "" ||
      city === "" ||
      !zip ||
      shipping === ""
    ) {
      alert("Empty field is not allowed");
      return;
    }
    dispatch({
      type: "ADD_CART",
      payload: { customerName, street, city, zip, shipping },
    });
    setCustomerName("");
    setStreet("");
    setCity("");
    setZip("");
    setShipping("");
    history.push("/CheckoutPage");
  };

  const handleshipping = (event) => {
    setShipping(event.target.value);
  };

  return (
    <div className="customer-page">
      <div className="hero">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <IoCartOutline className="icon-cart" />
        <p className="total-price">Total: {cartUpdate}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Customer information</h2>
        <input
          type="text"
          value={customerName}
          onChange={(event) => setCustomerName(event.target.value)}
          placeholder="Customer name"
        />
        <input
          type="text"
          value={street}
          placeholder="Street"
          onChange={(event) => setStreet(event.target.value)}
        />
        <input
          type="text"
          value={city}
          placeholder="City"
          onChange={(event) => setCity(event.target.value)}
        />
        <input
          type="text"
          value={zip}
          placeholder="Zip"
          onChange={(event) => setZip(event.target.value)}
        />
        <div className="shipping">
          <label>Delivery:</label>
          <input
            type="radio"
            value="delivery"
            checked={shipping === "delivery"}
            onChange={handleshipping}
          />

          <label>Pickup:</label>
          <input
            type="radio"
            value="Pickup"
            checked={shipping === "Pickup"}
            onChange={handleshipping}
          />
        </div>

        <div className="next-btn">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default Customer;
