import React from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import './Players.css'
const Players = ({ players, setCart, cart }) => {
    console.log(players)
    return (
        <div className='cart-container'>
            {
                players?.map(player => <SinglePlayer
                    player={player}
                    key={player?.idPlayer}
                    cart={cart}
                    setCart={setCart}
                ></SinglePlayer>)
            }
        </div>
    );
};

export default Players;