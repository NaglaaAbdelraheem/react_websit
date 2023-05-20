import React from "react";
import { Link } from "react-router-dom";
import'./Productlist.css';

function Product(props) {
  const { product } = props;

  return (
    <>
    
     
      <div className="icons">
           <a href="/#" className="fas fa-heart"></a> 
         </div>
         <Link className="image" to={`/product/${product.id}`}>
         <img src={product.image} alt={product.title} />
            </Link>
         <h3>{product.title} <span>{product.price}$</span></h3>
         <p>{product.description} </p>
        
    </>
  );
}

export default Product;