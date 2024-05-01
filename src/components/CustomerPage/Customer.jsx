import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

import "../App/App.css";
const Customer = () => {
  const cartUpdate = useSelector((store) => store.updateCart);
  console.log(cartUpdate);
  const [customerName, setCustomerName] = useState("");
  const [street, setStreet] = useState("");

  console.log("See carts Please", cartUpdate);
  return (
    <div className="customer-page">
      <div className="hero">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <IoCartOutline className="icon-cart" />
        <p className="total-price">Total:{cartUpdate}</p>
      </div>
      <form>
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
          placeholder="City"
          onChange={(event) => setStreet(event.target.value)}
        />
        <input
          type="text"
          placeholder="Zip"
          onChange={(event) => setStreet(event.target.value)}
        />
        <input type="radio" name="Pickup" />
        <input type="radio" name="Pickup" />
      </form>
    </div>
  );
};
export default Customer;
