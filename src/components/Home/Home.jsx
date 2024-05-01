import React, { useState, useEffect } from "react";
import One from "../One/One.jsx";
import { IoCartOutline } from "react-icons/io5";
import Customer from "../CustomerPage/Customer.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import "../App/App.css";
import DisplayPizza from "../DisplayPizza/DisplayPizza";

const Home = () => {
  const history = useHistory();
  const [pizza, setPizza] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPrice, setotalPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await axios.get("/api/pizza");
        setPizza(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching pizza:", error);
        setIsLoading(false);
      }
    };

    fetchPizza();
  }, []);

  const handlePizzaProcess = (id) => {
    const selectedPizza = pizza.find((pizza) => pizza.id === id);

    if (selectedPizza) {
      const newTotalPrice = totalPrice + parseFloat(selectedPizza.price);

      setotalPrice(newTotalPrice);
    } else {
      console.log("Pizza not found!");
    }
    dispatch({ type: "ADD_CART", payload: selectedPizza });
  };
  const customerPage = () => {
    history.push("/Customer");

    dispatch({ type: "UPDATE_CART", payload: totalPrice });
  };

  return (
    <div className="App">
      <div className="hero">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <IoCartOutline className="icon-cart" />
        <p className="total-price">Total:{totalPrice}</p>
      </div>
      <div className="main-content">
        <div className="pizza-page">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            pizza.map((pizza) => (
              <div key={pizza.id} className="pizz-display">
                <img src={pizza.image_path} />
                <p className="pizza-names">{pizza.name}</p>
                <p className="piza-price"> ${pizza.price}</p>
                <div className="btn">
                  <button
                    onClick={() => handlePizzaProcess(pizza.id)}
                    className="btn-cart"
                  >
                    Add to the Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="next-btn">
          <button onClick={customerPage}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
