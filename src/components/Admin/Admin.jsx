import "../App/App.css";
import axios from "axios";
import { useState, useEffect } from "react";
const Admin = () => {
  const [fetchPizza, setFetchPizza] = useState([]);

  const fetchPizzOrders = () => {
    axios
      .get("/api/order")
      .then((response) => {
        setFetchPizza((prev) => response.data);
      })
      .catch((error) => {
        console.log("Error fetching Data", error);
      });
  };
  useEffect(() => {
    fetchPizzOrders();
  }, []);
  console.log(fetchPizza);

  return (
    <div>
      <div className="hero">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza orders</h1>
        </header>
      </div>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Customer name</th>
              <th>Time order placed</th>
              <th>Type</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {fetchPizza.map((orders) => (
              <tr key={orders.id}>
                <td>{orders.customer_name}</td>
                <td>{orders.time}</td>
                <td>{orders.type}</td>
                <td>{orders.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
