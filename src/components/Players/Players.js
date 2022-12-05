import React from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import './Players.css'
const Players = ({ players }) => {
    console.log(players)
    return (
        <div className='cart-container'>
            {
                players.map(player => <SinglePlayer
                    player={player}
                    key={player.idPlayer}
                ></SinglePlayer>)
            }
        </div>
    );
};

export default Players;