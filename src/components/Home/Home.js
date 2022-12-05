import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import Swal from 'sweetalert2'
import './Home.css'
const Home = () => {
    const [players, setPlayers] = useState([]);
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
            .then(res => res.json())
            .then(data => setPlayers(data.player))
    }, [search])

    const deleteFromCart = (id) => {

        const rest = cart.filter(player => player.idPlayer !== id)

        setCart(rest)
        Swal.fire(
            'Successful!',
            'You Delete an Item!',
            'success'
        )
    }
    console.log(search)
    return (
        <div className='home-container'>
            <div className="left-side">
                <div className='search-section'>
                    <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='search' className='search-input' />
                    <button className='search-btn'>Search</button>
                </div>
                <div>
                    <Players
                        cart={cart}
                        setCart={setCart}
                        players={players}

                    ></Players>
                </div>
            </div>
            <div className="right-side">
                <h4>Add To Cart Container</h4>

                {
                    cart.map(player =>
                        <div className="cart-info-container">
                            <p>{player.strPlayer}</p>
                            <button
                                onClick={() => deleteFromCart(player.idPlayer)}
                                className='delete-btn'>X</button>
                        </div>
                    )
                }

            </div>
        </div >
    );
};

export default Home;