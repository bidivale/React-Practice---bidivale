import "./Checkout.css";

import React from 'react';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad"
                src="OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
                    <h2 className="checkout_title">
                    Your shopping Basket </h2>
                    {/*BasketItem*/}
                    {/*BasketItem*/}
                    {/*BasketItem*/}
                    {/*BasketItem*/}
                    {/*BasketItem*/}
                    
                </div>
            </div>
        <div className="checkout_right">
            <Subtotal/>
            </div>            
        </div>
    )
}

export default Checkout
