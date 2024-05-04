import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "../Home/Home";
import Customer from "../CustomerPage/Customer";
import CheckoutPage from "../Checkout/CheckoutPage";

const App = () => {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Customer">
        <Customer />
      </Route>
      <Route path="/CheckoutPage">
        <CheckoutPage />
      </Route>
    </Router>
  );
};
export default App;
