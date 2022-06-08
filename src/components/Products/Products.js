import React from "react";
import productsImg from "../../asserts/3.png";
import "./Products.css";
const Products = () => {
  return (
    <section className="container product-container">
      <p>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <div className="productImg-container">
        <img src={productsImg} alt="" />
      </div>
      <p>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
      <hr className="horizontal-line" />
    </section>
  );
};

export default Products;
