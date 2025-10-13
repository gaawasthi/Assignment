import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import "../style/EditProduct.css"
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
         "http://localhost:3000/products/"+id
        );
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.log("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange =(e)=>{
    const {name,value} = e.target
    setProduct({...product,[name]:value})
    console.log(product);
    
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      console.log(id);
      console.log(product)
      const res = await fetch(  "http://localhost:3000/products/"+id,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(product)
      })
      if(res.ok){
        console.log("product updated ");
        console.log(id);
        console.log(product)
        navigate(`/products`)
      }
    }catch(err){
      console.log("Error updating product:", err);
    }
    
  }

  if (loading) return <p className="loading" >Loading...</p>;

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
