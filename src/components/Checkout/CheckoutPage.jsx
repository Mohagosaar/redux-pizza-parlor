import "../App/App.css";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const checkOut = useSelector((store) => store.cart);
  const totalPrice = useSelector((store) => store.updateCart);

  return (
    <div className="checkout">
      <div className="hero">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <IoCartOutline className="icon-cart" />
      </div>
      <div className="checkout-content">
        <h3>Checkout</h3>
        {checkOut.map((cart, index) => (
          <div key={index} className="checkout-items">
            <p>{cart.customerName}</p>
            <p>{cart.street}</p>
            <p>{cart.city}</p>
            <p>{cart.zip}</p>
            <p>{cart.shipping}</p>

            {/* Assuming this is the name of the ordered item */}
          </div>
        ))}
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
            {checkOut.map((cart, index) => (
              <tr key={index}>
                <td>{cart.name}</td>
                <td>{cart.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4>{totalPrice}</h4>
      </div>
    </div>
  );
};

export default CheckoutPage;
