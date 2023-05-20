import React from "react";
import'./pages/ALLProducts.css';
function Singleproduct(){
  const { product } = props;
  const shoot = () => {
   ("Added to Cart");
  }

  return(
<div className="container">
      <div className="image">
        <img src={product.image}/>
      </div>
        <div className="actions">
        <div className="wrapper">
          <div className="new"> New!</div>
          <div className="title">{product.title}</div>
          <spa className class="price">{product.price}$</spa>
          <p className="brand">Brand: H & M</p>
           <p className="detail">{product.description}</p>
           <p className="avail">Stock & Availability: 10</p>
          
           <div className="actions">
          <div className="content size">
            <div className=" size-name">Size</div>
            <div className="size-value ">
              <span className="color">XS</span>
              <span className="color">S</span>
              <span className="color active">M</span>
              <span className="color">L</span>
              <span className="color">XL</span>
            </div>
          </div>
        </div>
    
          <div className="btns">
           
            <button onClick={shoot}>Add to cart</button>
          </div>
        </div>
      </div>
   </div>
  );
}
export default  Singleproduct;