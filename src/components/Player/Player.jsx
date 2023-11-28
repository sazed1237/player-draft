import React from 'react';
import './Player.css'

const Player = (props) => {
    // console.log(props.player)
    const { name, img, position, price, age, current_club } = props.player
    const addToCartHandler = props.addToCartHandler


    return (
        <div className='player'>
            <img src={img} alt="" />

            <div className="player-info">
                <h3>{name}</h3>
                <p>Price: ${price}K</p>
                <p><small>Age: {age}</small></p>
                <p><small>Position: {position}</small></p>
                <p><small>Club: {current_club}</small></p>
            </div>

            <button className='cart-btn' onClick={()=>addToCartHandler(props.player)} >
                Add to cart
                </button>
        </div>
    );
};

export default Player;