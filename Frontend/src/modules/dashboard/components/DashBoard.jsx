// import React from 'react'
import { useEffect, useState } from 'react'
import Header from '../../../shared/components/Header'
import { getApiCall } from '../../../shared/services/api-client';
import { Products } from './Products';
import CartView from '../../cart/pages/CartView';
import { CartContext } from '../context/card-context';
// import Product from './Product'

const DashBoard = () => {
    const [loading,setLoading]=useState(true);
    const [pizzas,setPizzas]=useState([]);
    // let carts=[];
    const [carts,setCarts]=useState([]);
    useEffect(()=>{
        getPizzas();

    },[]);
const addCart= (product) =>{
    const c=[...carts];
    c.push(product);
    setCarts(c);

}
const getPizzas =async ()=>{
   
        
        const data=await getApiCall();
        console.log("pizzas are :",data);
        setLoading(false);
        setPizzas(data['products']);

    }
   
    

  return (
    <div className='container'>
        <Header></Header>
        <CartContext.Provider value={{carts:carts,addCart:addCart}}>
        <div className="row">
            <div className="col-8">
                <div className="row">
                {loading?<p>Loading....</p>:<Products products={pizzas}></Products>}

                </div>
            </div>
            <div className="col-4">
                <h3 className='alert alert-success'>Carts:</h3>
                <CartView></CartView>

            </div>
        </div>
        </CartContext.Provider>
        
    </div>
  )
}

export default DashBoard