
import React from "react";
import { useEffect, useState } from "react";
import Product from "./Product";
import'./Productlist.css';
import { Link } from 'react-router-dom';

function ProductsList() {
  const  BASE_URL = "https://dummyjson.com/products";
  const [products, setProducts] = useState({products: [] });

  const fetchData = () => {
    fetch(`${ BASE_URL}?limit=8`)
    .then((res) => res.json())
    .then((data) => {
       setProducts(data);
    });
 };

 useEffect(() => {
 fetchData();
 });

  // const getProducts = () => {
  //   fetch(BASE_URL)
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // };

 

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <>
       <h2>Products</h2>
        <div className="box-container ">
          {products.map((product) => {
            return (
              <div className="box" key={product.id}>
                <Product product={product} />
              </div>
            );
          })}
        </div>
     
    </>
  );
}


export default ProductsList;
