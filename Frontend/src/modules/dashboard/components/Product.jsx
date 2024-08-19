// single pizza display
// import React from 'react'

import { useContext } from "react";
import { CartContext } from "../context/card-context";

const Product = ({product}) => {
  const ctx=useContext(CartContext);
    const myStyle={width: '18rem'};
    const addToCart=()=>{
      ctx.addCart({...product})
      console.log("Add to Cart Call...",product);
    }
  return (
    <div className="card me-4 my-2 " style={myStyle}>
  <img src={product.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text"><b>Price: </b>{product.price} &#8377;</p>
    <button onClick={addToCart} className="btn btn-primary">Add to Cart</button>
  </div>
</div>
  )
}

export default Product