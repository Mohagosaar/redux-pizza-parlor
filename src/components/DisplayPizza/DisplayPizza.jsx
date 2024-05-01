import { useHistory } from "react-router-dom";
import Customer from "../CustomerPage/Customer";

const DisplayPizza = ({ pizza }) => {
  const history = useHistory();
  const customerPage = () => {
    // history.push("/Customer");
  };
  return (
    <div>
      {/* <button className="next-btn" onClick={customerPage}>
        Next
      </button> */}
    </div>
  );
};

export default DisplayPizza;
