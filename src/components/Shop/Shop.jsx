import React, { useEffect, useState } from 'react';
import './Shop.css'
import Player from '../Player/Player';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/localStorage';

const Shop = () => {

    const [players, setPlayers] = useState([])
    const [cart, setCart] = useState([])

    // console.log(players)
    // console.log(cart)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    useEffect( () => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id of the addedPlayers
        for(const id in storedCart){
            // step 2: get player from players state by using id
            const addedPlayer = players.find(player => player.id === id);
            if(addedPlayer){
                // step 3: add quantity 
                const quantity = storedCart[id]
                addedPlayer.quantity = quantity
                // step 4: add the addedPlayer to the saved cart
                savedCart.push(addedPlayer)
            }
        }
        // step 5: set the cart
        setCart(savedCart)
    }, [players])

    const addToCartHandler = (player) => {
        // console.log('this is button')
        const newCart = [...cart, player];

        setCart(newCart)
        addToDb(player.id)

    }
    return (
        <div className='shop'>
            <div className="players-container">
                {
                    players.map(player => <Player
                        key={player.id}
                        player={player}

                        addToCartHandler={addToCartHandler}
                    ></Player>)
                }
            </div>
            <div className="shop-cart">
                <Cart cartData={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;