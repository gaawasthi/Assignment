import React from 'react'

const ProductCard = (props) => {
 const {name , description , price , stock} = props
  return (
    
          <div  className="product-card">
          <h3 className="product-title">{name}</h3>
          <p className="product-description">{description}</p>
          <h4 className="product-price">$ {price} </h4>
          {
          stock > 0 ?   <p className="product-Instock">In stock</p>

          :<p className="product-Outstock">out of stock</p>

          }
        

        </div>
  )
}

export default ProductCard