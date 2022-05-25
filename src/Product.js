import React from 'react'
import "./Product.css"

function Product() {
  return (
    <div className='product'>
        <div className="product__info">
            <p>The lean startup</p>
            <p className="product__price">
                <small>$</small>
                <strong>19.99</strong>
            </p>
            <div className="product__rating">
                <p>⭐</p>
                
            </div>
        </div>
           <img src="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
           <button>Add to Basket</button>
    </div>
  )
}

export default Product