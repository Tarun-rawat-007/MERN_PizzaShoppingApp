// import React from 'react'

import { useContext } from "react"
import { CartContext } from "../../dashboard/context/card-context";
import Pay from "../../payments/components/Pay";

const Cart = () => {
    const ctx=useContext(CartContext);
    const total = ()=>{
        return ctx.carts.reduce((sum,product)=>sum+product.price,0);

    }
    console.log("Context is ",ctx);
  return (
    <div>
        <p className="alert alert-light">Total Items in Cart: {ctx.carts.length}</p>
        {ctx.carts.map(product=>
            <>
            <ul>
              <li>{product.name}   <br></br> Price: {product.price} &#8377;</li>
            </ul>
           
            </>
            
        )}
        <p className="alert alert-danger">Total Bill is: {total()} &#8377;</p>
        {ctx.carts.length>0 && <Pay></Pay>}
    </div>
  )
}

export default Cart