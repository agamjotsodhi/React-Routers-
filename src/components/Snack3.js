import React from "react";
import { Link } from "react-router-dom";

function Snack3() {
  return (
    <div>
      <h1>Snack 3</h1>
      <p>This is yet another tasty snack!</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Snack3;