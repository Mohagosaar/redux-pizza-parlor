import React, { useState, useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import Customer from "../CustomerPage/Customer";
import { Link, HashRouter, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import axios from "axios";
import "./App.css";

function App() {
  // const history = useHistory();
  const [pizza, setPizza] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPizzaPrize, setselectedPizzaPrize] = useState([]);
  const [totalPrice, setotalPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPizza = async () => {
      /**
      
       * the fetchPizza function is defined
       * as async so that it can use the await
       *  keyword to wait for the asynchronous
       * Axios GET request to resolve before
       * proceeding with setting the state and updating
       * the loading state. This ensures that the 
       * pizza data is fetched and processed in a 
       * controlled and predictable manner.
       */
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

  /**
   * function name 'handlePizzaProcess
   * @param {} id
   */
  const handlePizzaProcess = (id) => {
    const selectedPizza = pizza.find((pizza) => pizza.id === id);

    if (selectedPizza) {
      const newTotalPrice = totalPrice + parseFloat(selectedPizza.price);
      setotalPrice(newTotalPrice);
      console.log(newTotalPrice);
    } else {
      console.log("Pizza not found!");
    }
    dispatch({ type: "ADD_CART", payload: selectedPizza });
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
                <button onClick={() => handlePizzaProcess(pizza.id)}>
                  Add
                </button>
                <button>Remove</button>
              </div>
            </div>
          ))
        )}
        <div className="next-btn">
          <button> Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
