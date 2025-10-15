import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import "../style/EditProduct.css"
import { useFetch } from "../../useFetch";
import { usecontext } from "../../context/Context";
const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    product_name: "",
    product_description: "",
    product_price: "",
    stock: "",
    category: "",

  });
  const {state,dispatch} = usecontext()

  useEffect(() => {
    const fetchProduct = async () => {
      dispatch({ type: 'Fetch_Start' });
      try {
        const res = await fetch(
         "http://localhost:3000/products/"+id
        );
        const data = await res.json();
        // setProduct(data);
         setProduct(data)
      dispatch({type:'LoadingFalse'})   
      } catch (err) {
        console.log("Error fetching product:", err);
      } 
    };

    fetchProduct();
  }, [id]);

  const handleChange =(e)=>{
    const {name,value} = e.target
    setProduct({...product,[name]:value})
    console.log(product);
    
  }
  const handleSubmit = useCallback(
  async (e) => {
    e.preventDefault();
    try {
      const data = await useFetch({
        url: `http://localhost:3000/products/${id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      console.log(data);

      if (data) {
        console.log("Product updated");
        console.log(id);
        console.log(product);
        navigate(`/products`);
      }
    } catch (err) {
      console.log("error updating product", err);
    }
  },
  [id, product, navigate] 
);
  if (state.loading) return <p className="loading" >Loading...</p>;

  return (
    <div className="edit-product">
      
        <ProductForm
        
        product={product}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText="Save"
      />
   
    </div>
  );
};

export default EditProduct;
