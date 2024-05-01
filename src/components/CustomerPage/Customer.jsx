import { useState } from "react";
const Customer = () => {
  const [customerName, setCustomerName] = useState("");
  const [street, setStreet] = useState("");
  return (
    <div>
      <form>
        <h2>Customer Page</h2>
        <input
          type="text"
          value={customerName}
          onChange={(event) => setCustomerName(event.target.value)}
        />
        <input
          type="text"
          value={street}
          onChange={(event) => setStreet(event.target.value)}
        />
      </form>
    </div>
  );
};
export default Customer;
