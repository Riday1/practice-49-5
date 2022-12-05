import React from 'react';
import './SinglePlayer.css'
const SinglePlayer = ({ player, cart, setCart }) => {
    const { idPlayer, strCutout, strPlayer } = player;

    const handleAddToCart = () => {
        const info = {
            idPlayer,
            strCutout,
            strPlayer,
            price: 115
        }


        if (cart?.length) {
            setCart([...cart, info])
        }
        else {
            setCart([info])
        }


    }

    return (
        <div className='cart'>
            <img className='player-img' src={strCutout} alt="" />
            <h4>{strPlayer}</h4>
            {/* <p>{strDescriptionEN?.slice(0, 60)}</p> */}

            <button className='cart-btn'>Details</button>
            <button onClick={() => handleAddToCart()} className='cart-btn'>Add To Cart</button>
            <button className='cart-btn'>Bookmark</button>

        </div>
    );
};

export default SinglePlayer;