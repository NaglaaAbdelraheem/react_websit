import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import Singleproduct from "./Singleproduct";
function ProductDetails() {
  const Api_url = "https://dummyjson.com/products/1";
  const [product, setProduct] = useState({});
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch(`${Api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);
  return (
    <Singleproduct />

  );
}

export default ProductDetails;
