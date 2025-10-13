import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../style/ProductDetail.css'
import { AuthContext } from '../../context/AuthContext'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const {user} = useContext(AuthContext)


  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      try {
        const response = await fetch("http://localhost:3000/products/" + id
        )
        const data = await response.json()
        setProduct(data)
        setLoading(false)
      }
      catch (error) {
        console.error("Error fetching product:", error);
      }

    }
    fetchProduct()
  }, [])
  console.log(product);

  if (loading) {
    return <div className='loading' > Loading.... </div>
  }

  const editProduct = () => {
    if (user) {
      navigate(`/product/edit/${product.id}`)
    }else{
      alert("Login to edit product")
      navigate('/')
    }


  }

  const deleteProduct = async () => {
    if(user){
      try {
      const res = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE"
      });
      if (res.ok) {
        alert("Product deleted successfully");
        navigate("/products");
      }
    } catch (err) {
      console.log(err);

    }
    }else{
        alert("Login to delete product")
      navigate('/')
    }
  }

  return (
    <div className='product-detail' >
      <button className='close-btn' onClick={() => {
        navigate(-1);
      }} >
        X
      </button>
      <h1 className='d-product-name' >
        Product Name : {product?.product_name}
      </ h1>
      <div className='d-product-category' >
        Category : {product?.category}
      </div>

      <div className='d-product-description' >
        Description : {product?.product_description}
      </div>
      <div className='d-product-price' >
        Price : ${product?.product_price}
      </div>
      <div className='d-product-stock' >
        Stock : {product?.stock}

      </div>

      <div className="actions">
        <button onClick={editProduct} className="action-btnE">Edit</button>
        <button
          onClick={deleteProduct}
          className="action-btnD">Delete</button>
      </div>

    </div>
  )
}

export default ProductDetail