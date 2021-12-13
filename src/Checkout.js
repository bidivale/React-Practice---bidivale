import "./Checkout.css";

import CheckoutProduct from "./CheckoutProduct";
import React from 'react';
import Subtotal from './Subtotal';
import { useStateValue } from "./Stateprovider";

function Checkout() {
    const[{basket}, dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad"
                src="OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
                    <h2 className="checkout_title">
                    Your shopping Basket </h2>
                    {basket.map(item=>(
                       <CheckoutProduct
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       price={item.price}
                       rating={item.rating} 
                       />
                    ))}
                    
                </div>
            </div>
        <div className="checkout_right">
            <Subtotal/>
            </div>            
        </div>
    )
}

export default Checkout
