import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

import "../App/App.css";

const Customer = () => {
  //Using for radioBoxcheck

  const items = [
    { value: "Delivery", label: "Delivery" },
    { value: "Pickup", label: "pickup" },
  ];

  const cartUpdate = useSelector((store) => store.updateCart);
  const [customerName, setCustomerName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [value, setValue] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
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
        <div className="delivery">
          {items.map((items) => (
            <div>
              <input
                key={items.value}
                name="delivery"
                type="radio"
                value={items.value}
                id={items.value}
                checked={value === items.value}
                onChange={(event) => setValue(event.target.value)}
              />
              <label htmlFor={items.value}>{items.label}</label>
            </div>
          ))}
        </div>
        <div className="next-btn">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default Customer;
