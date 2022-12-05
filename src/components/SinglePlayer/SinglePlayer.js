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

    const handleBookMark = () => {
        const info = {
            strPlayer,
            idPlayer,
            strCutout,
            bookmark: "true",
            quantity: 1
        }

        const prevBookMark = localStorage.getItem('bookmark');
        const oldBookMark = JSON.parse(prevBookMark);
        if (oldBookMark) {
            const isExists = oldBookMark.find(player => player.idPlayer === idPlayer);

            if (isExists) {
                const updatedQuantity = parseFloat(isExists.quantity);
                const newUpdatedQuantity = updatedQuantity + 1;
                isExists.quantity = newUpdatedQuantity;
                localStorage.setItem('bookmark', JSON.stringify[oldBookMark])
                // alert("already book Marked")
                return;
            }
            else {
                localStorage.setItem('bookmark', JSON.stringify([...oldBookMark, info]))
            }

        }
        else {
            localStorage.setItem('bookmark', JSON.stringify([info]))
        }

    }
    return (
        <div className='cart' data-aos="fade-up">
            <img className='player-img' src={strCutout} alt="" />
            <h4>{strPlayer}</h4>
            {/* <p>{strDescriptionEN?.slice(0, 60)}</p> */}

            <button className='cart-btn'>Details</button>
            <button onClick={() => handleAddToCart()} className='cart-btn'>Add To Cart</button>
            <button onClick={handleBookMark} className='cart-btn'>Bookmark</button>

        </div>
    );
};

export default SinglePlayer;