import React from "react";
import "./ProductList.css";
const ProductList = () => {
  return (
    <section className="container product-list-container">
      <h5>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>
      <ul className="product">
        <li className="productName">CHEMICALS & PROCESS</li>
        <li className="productName">POWER</li>
        <li className="productName">POWER WATER & WASTE</li>
        <li className="productName">WATER OILS & GAS</li>
        <li className="productName">PHARMA </li>
        <li className="productName">SUGARS & DISTILLERIES </li>
        <li className="productName">PAPER & PULP</li>
        <li className="productName">MARINE & DEFENCE</li>
        <li className="productName">METAL & MINING</li>
        <li className="productName">FOOD & BEVERAGE</li>
        <li className="productName">PETROCHEMICAL & REFINERIES </li>
        <li className="productName">SOLAR</li>
        <li className="productName">BUILDING</li>
        <li className="productName">HVAC</li>
        <li className="productName">FIRE FIGHTING</li>
        <li className="productName">AGRICULTURE & RESIDENTIAL</li>
      </ul>
    </section>
  );
};

export default ProductList;
