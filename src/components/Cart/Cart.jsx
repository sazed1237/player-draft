import React from 'react';
import './Cart.css'

const Cart = ({cartData}) => {

    // console.log(cartData)

    
    // calculate cart 
    let total = 0;
    let quantity = 0;
    for(const player of cartData ){

        if(player.quantity ===0){       //way 1
            player.quantity = 1;
        }
        
        // player.quantity = player.quantity || 1;     //way 2

        total = total + player.price * player.quantity;
        quantity = quantity + player.quantity
    }

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Players: {quantity}</p>
            <p>Total Price: ${total}K</p>
            <h5>Grand Total: ${total}K </h5>
        </div>
    );
};

export default Cart;