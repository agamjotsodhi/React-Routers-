import React from "react";
import { Link } from "react-router-dom";

function Snack2() {
  return (
    <div>
      <h1>Snack 2</h1>
      <p>This is another tasty snack!</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Snack2;