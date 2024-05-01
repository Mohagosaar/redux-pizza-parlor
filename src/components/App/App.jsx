import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "../Home/Home";
import Customer from "../CustomerPage/Customer";

const App = () => {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Customer">
        <Customer />
      </Route>
    </Router>
  );
};
export default App;
