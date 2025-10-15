import React, { useContext, useEffect, useReducer, useState } from "react";
import "../style/Home.css";
import { Link } from "react-router";
import ProductCard from "../components/ProductCard";
import { useFetch } from "../../useFetch";
import { ProductProvider, usecontext } from "../../context/Context";
import { initialState, ProductReducer } from "../../Reducer";
const Home = () => {
  // const [loading, setLoading] = useState(false);
  const {state,dispatch} = usecontext()
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // setLoading(true);
        dispatch({type:"Fetch_Start"  })
        // const response = await fetch(
        //   "http://localhost:3000/products"
        // );
        // const data = await response.json();
        const data = await useFetch({url :"http://localhost:3000/products"})
        console.log(data);
        
        // setProducts(data);
        dispatch({type:"Fetch_Success" , payload: [...data]})
        // setLoading(false);
        // console.log(state.products);
        
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const arr = Array.from({ length: 50 });

if (state.loading) {
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
      {state.products.map((product) => (
        <Link
            to={`/products/${product.id}`}
            key={product.id}
               className="product-card-link"

        ><ProductCard
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

