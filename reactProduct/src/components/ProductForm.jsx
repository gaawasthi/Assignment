import React from 'react'
import Input from './Input'
import "../style/Form.css"
import { useNavigate } from 'react-router'

const ProductForm = (props) => {
    const navigate = useNavigate()
   const {product , handleChange , handleSubmit , buttonText} = props
  return (
       <form  onSubmit={handleSubmit}   className="edit-form">
        <div className="form-header">
          <h2>Edit Product</h2>
          <span onClick={() => navigate(-1)} className="close-btn1">
            Close
          </span>
        </div>

        <Input
          name="product_name"
          placeholder="Product Name"
          value={product.product_name}
          type="text"
          onChange={handleChange}
          
          
        /> 
        <Input
          name="category"
          placeholder="Category"
          value={product.category}
          type="text"
          onChange={handleChange}
        /> 
        <Input
          name="product_description"
          placeholder="Description"
          value={product.product_description}
          type="text"
          onChange={handleChange}
        /> 
        <Input
          name="product_price"
          placeholder="Price"
          value={product.product_price}
          type="number"
          onChange={handleChange}
        /> 
        <Input
          name="stock"
          placeholder="Stock"
          value={product.stock}
          type="number"
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">
       {buttonText}
        </button>
      </form>
  )
}

export default ProductForm