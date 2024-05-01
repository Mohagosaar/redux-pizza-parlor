import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "../Home/Home";

const App = () => {
  return (
    <Router>
      {/* Define Route for Home Page */}
      <Route exact path="/">
        <Home />
      </Route>
    </Router>
  );
};
export default App;
