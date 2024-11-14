import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div>
      <h1>Welcome to the Vending Machine!</h1>
      <h2>Choose your snack:</h2>
      <ul>
        <li>
          <Link to="/snack1">Snack 1</Link>
        </li>
        <li>
          <Link to="/snack2">Snack 2</Link>
        </li>
        <li>
          <Link to="/snack3">Snack 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default VendingMachine;
