import React, { useEffect, useState } from 'react';
import './Home.css'
const Home = () => {
    const [players, setPlayers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [search])
    const handleInput = (e) => {
        setSearch(e.target.value)

    }

    return (
        <div className='home-container'>
            <div className="left-side">
                <div className='search-section'>
                    <input onChange={(e) => handleInput(e)} type="text" placeholder='search' className='search-input' />
                    <button className='search-btn'>Search</button>
                </div>
                <h4>Player container</h4>
            </div>
            <div className="right-side">
                <h4>Add To Cart Container</h4>
            </div>
        </div>
    );
};

export default Home;