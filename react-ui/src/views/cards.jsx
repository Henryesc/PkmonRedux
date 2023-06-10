import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCardToStore } from '../features/cardSelection';
import { cards } from '../features/cardsSlice';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
  const [selectCards, setSelectCards] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector(cards);
  const [count, setcount] = useState(25);
  const [count1, setcount1] = useState(0);
  const [showButton, setShowButton] = useState([]);
  const navigate = useNavigate();
  const [isModelOpen, setisModelOpen] =useState([]); 

  const toggleButton = () => {
    setShowButton(!showButton);
  };

  const nextPage = () => {
    setcount(count + 25);
    setcount1(count1 + 25);
    topFunction();
  };

  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  const handleReset = () => {
    window.location.reload();
  };

  // const fetchSoloCard = async (e) => {
  //   let chosenPokemon = e.target.name.toLowerCase()
  //   let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${chosenPokemon}`)
  //   let data = await result.json()
  //   console.log(data)
  // }

  const handleModelOpen = (i) => {
    const updatedArray = [...isModelOpen]
    updatedArray[i] = true
    setisModelOpen(updatedArray)
  }

  const handleModelClosed = (i) => {
    const updatedArray = [...isModelOpen]
    updatedArray[i] = false
    setisModelOpen(updatedArray)
  }

  useEffect(() => {
    const firstArray = data.slice(count1,count).map(() => false)
    setisModelOpen(firstArray)
  }, [count,count1,data])


  return (
    <div className='page'>
      <div className='cardLayout'>
        {count >= 251 && (
          <div className='ending'>
            <div className="image-container">
              <img className='oak' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/43cc8211-4ecb-4505-8cdd-15d4f43fb303/d5f15ce-31b2fc92-e9b6-49fb-a957-1a0d3874f87e.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQzY2M4MjExLTRlY2ItNDUwNS04Y2RkLTE1ZDRmNDNmYjMwM1wvZDVmMTVjZS0zMWIyZmM5Mi1lOWI2LTQ5ZmItYTk1Ny0xYTBkMzg3NGY4N2UuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jD4VWFdnHbhORXimTEiuYmR9MtkiOQE9kJClUOeljQs" alt="GIF" />
            </div>
            <h1 className='end'>
              Oh wow! Looks like you've reached the end of your Pokémon journey!! You've come so far! Click the button below to start your journey again.
            </h1>
          </div>
        )}
       
        {data.slice(count1, count).map((card, index) => {
          if (index < 251) {
            return (
              <div className='product' key={index}>
                <button className='buttonModal' onClick={() => handleModelOpen(index)}>
                  <img name={card.name} src={card.images.small} alt="Card" /></button>
                <div className='cardInfoContainer'>
                  <h4 className='game'>Pokemon</h4>
                  <div className='set'>Base Set: {card.set.name}</div>
                  <div className='cardInfo'>{card.name}</div>
                  {card.tcgplayer && card.tcgplayer.prices && card.tcgplayer.prices.normal && (
                    <div className='cardInfo'>Price: Normal Foil ${card.tcgplayer.prices.normal.high}</div>
                  )}
                  {card.tcgplayer && card.tcgplayer.prices && card.tcgplayer.prices.holofoil && (
                    <div className='cardInfo'>Price: Holofoil ${card.tcgplayer.prices.holofoil.high}</div>
                  )}
                  {card.tcgplayer && card.tcgplayer.prices && card.tcgplayer.prices.reverseHolofoil && (
                    <div className='cardInfo'>Price: Reverse Holofoil ${card.tcgplayer.prices.reverseHolofoil.high}</div>
                  )}
                  {card.tcgplayer && card.tcgplayer.prices && card.tcgplayer.prices['1stEditionHolofoil'] && (
                    <div className='cardInfo'>Price: 1st Edition HoloFoil ${card.tcgplayer.prices['1stEditionHolofoil'].high}</div>
                  )}
                  {card.tcgplayer && card.tcgplayer.prices && card.tcgplayer.prices.unlimitedHolofoil && (
                    <div className='cardInfo'> Price: Unlimited Holofoil ${card.tcgplayer.prices.unlimitedHolofoil.high}</div>
                  )}
                </div>
                {isModelOpen[index] && (
                  <div className='modal'>
                    <div className='modalContent'>
                      <source />{card.tcgplayer.url}
                      <button onClick={() => handleModelClosed(index)}>x</button>
                    </div>
                  </div>
                )} 
              </div>
            );
          }
        })}
      </div>
      <div className='btnContainer'>
        <button className='nextBtn' onClick={nextPage}>Next Page</button>
        <div className='firstPage'>{showButton && <button onClick={handleReset}>Hide Button</button>}</div>
      </div>
    </div>
  );
};

export default Cards;