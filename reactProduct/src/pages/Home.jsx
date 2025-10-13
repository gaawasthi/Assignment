import React, { useEffect, useState } from "react";
import "../style/Home.css";
import { Link } from "react-router";
import ProductCard from "../components/ProductCard";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:3000/products"
        );
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  console.log(products);
  const arr = Array.from({ length: 50 });

if (loading) {
  return (
    <div className="products-div-shimmer">
      {arr.map((_, index) => (
        <div className="product-card-shimmer" key={index}>
          <h2 className="product-title-shimmer"></h2>
          <p className="product-description-shimmer"></p>
          <h4 className="product-price-shimmer"></h4>
          <p className="product-stock-shimmer"></p>

      
        </div>
      ))}
    </div>
  );
}

  return (
    <div className="products-div">
      {products.map((product) => (
        <Link
            to={`/products/${product.id}`}
            key={product.id}
               className="product-card-link"

        >
            <ProductCard
              name = {product.product_name}
              description = {product.product_description}
              price = {product.product_price}
               stock = {product.stock}
            />
            
       

        
        </Link>

        
      
      ))}
    </div>
  );
};

export default Home;
