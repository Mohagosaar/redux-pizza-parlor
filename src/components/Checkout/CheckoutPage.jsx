import "../App/App.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const CheckoutPage = () => {
  const history = useHistory();
  const checkOut = useSelector((store) => store.customerData);
  const cart = useSelector((store) => store.cart);

  const totalPrice = useSelector((store) => store.updateCart);

  /**
   * this handleCustomerInformation function
   */
  const handleCustomerInformation = () => {
    cart.forEach((item) => {
      const total = parseFloat(item.price);
      checkOut.forEach((customer) => {
        const {
          customerName: customer_name,
          street: street_address,
          city: city,
          zip: zip,
          shipping: type,
        } = customer;

        axios
          .post("/api/order", {
            customer_name,
            street_address,
            city,
            zip,
            type,
            total,
          })
          .then((response) => {
            alert(response.data);
          })
          .catch((error) => {
            alert("Error: " + error.message);
          });
      });
    });
    history.push("/");
  };

  return (
    <div className="checkout">
      <div className="hero">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
      </div>
      <div className="checkout-content">
        <h3>Checkout</h3>
        {checkOut.map((cart, index) => {
          const { customerName, street, city, zip, shipping } = cart;
          return (
            <div key={index} className="checkout-items">
              <p>{customerName}</p>
              <p>{street}</p>
              <p>{city}</p>
              <p>{zip}</p>
              <p>{shipping}</p>
            </div>
          );
        })}
      </div>
      <div className="table-data">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {/* I have used  to display this the Pizza name and their price */}
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h4>Total: {totalPrice}</h4>
      <button onClick={handleCustomerInformation}>Checkout</button>
    </div>
  );
};

export default CheckoutPage;
