import React, { useState, useEffect } from 'react';
import SmallCard from './components/small_cards';
import LetterTypingEffect from './components/words_typing';
import heart from './assets/heart.jpg';
import cap from './assets/cap.jpg';
import cup from './assets/cup.jpg';
import deer from './assets/deer.jpg';
import drum from './assets/drum.jpg';
import gift1 from './assets/gift_1.jpg';
import giftBox from './assets/gift_box.jpg';
import home from './assets/home.jpg';
import moon from './assets/moon.jpg';
import santa from './assets/santa.jpg';
import sweets from './assets/sweets.jpg';
import wheel from './assets/wheel.jpg';
import xMas from './assets/x_mas.jpg';
import BackGroundImage from './assets/bg_christmas.jpg';
//  'heart' from'assets/heart.jpg';

const App = () => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // const initialOrder = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11];
    const initialOrder = [
      { id: 0, image: heart},
      { id: 0, image: heart},
      { id: 1, image: cap},
      { id: 1, image: cap},
      { id: 2, image: home},
      { id: 2, image: home},
      { id: 3, image: santa},
      { id: 3, image: santa},
      { id: 4, image: sweets},
      { id: 4, image: sweets},
      { id: 5, image: wheel},
      { id: 5, image: wheel},
      { id: 6, image: xMas},
      { id: 6, image: xMas},
      { id: 7, image: cup},
      { id: 7, image: cup},
      { id: 8, image: deer},
      { id: 8, image: deer},
      { id: 9, image: drum},
      { id: 9, image: drum},
      { id: 10, image: moon},
      { id: 10, image: moon},
      { id: 11, image: giftBox},
      { id: 11, image: giftBox},
      // ... other cards
    ];

    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };
  
    const loadAllImages = async () => {
      const imagesToLoad = initialOrder.map((card) => card.image);
      await Promise.all(imagesToLoad.map(loadImage));
      setIsLoading(false);
    };

    const shuffledOrder = shuffleArray(initialOrder);
    setShuffledCards(shuffledOrder);

    loadAllImages();

  }, []);


  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <>
          {isLoading ? (
        <div className="loader flex justify-center items-center text-white text-sm md:text-lg w-full h-12 bg-white-500 rounded tracking-wide bg-black h-screen w-screen">
          {/* <p> Hold on Santa Gifts are coming !! </p> */}
          <p className='bg-clip-text text-transparent bg-cyan-300 bg-gradient-to-br from-red-300 from-20% via-red-400 via-70% to-red-300 to-90% tracking-wide'>Merry Christmas ! <LetterTypingEffect word = "Hold on Santa Gifts are coming !! "/>....</p>
        </div>
      ) : (
      <div className="app">
        <div className="board p-2 bg-local h-screen w-screen bg-cover"  style={{ backgroundImage: `url(${BackGroundImage})` }}> 
          {/* Make sure to spread the array into individual values */}
          <div class="text-base pt-2 text-4xl font-medium duration-200 text-center pt-2">
          {/* <LetterTypingEffect word= "Crafting Seamless Experience with Code & Design"/> */}
          <p className='bg-clip-text text-transparent bg-cyan-300 bg-gradient-to-br from-cyan-300 from-20% via-cyan-400 via-70% to-cyan-300 to-90% tracking-wide'><LetterTypingEffect word = "Merry Christmas"/>....</p>
        </div>
          <SmallCard shuffledCards={[...shuffledCards]} />
          <br />
          <br />
          <div className='flex justify-center items-center text-white text-sm md:text-lg w-full h-12 bg-white-500 rounded tracking-wide'>
          <p>Infused with creative passion by<a href="http://codewhyofficial.blogspot.com" target="_blank" rel="noopener noreferrer"> <LetterTypingEffect word="@Codewhyofficial"/></a></p>
        </div>
        </div>
      </div>
       )}
    </>
  );
  
};

export default App;






// export default App;
















// const shuffleArray = (array) => {
//   const shuffledArray = array.slice();
//   for (let i = shuffledArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//   }
//   return shuffledArray;
// };

// const generateCards = () => {
//   const cards = [];
//   for (let i = 0; i < 8; i++) {
//     cards.push({ id: i, value: i });
//     cards.push({ id: i + 8, value: i });
//   }
//   return shuffleArray(cards);
// };

// const Card = ({ card, onClick }) => {
//   return (
//     <div
//       className={`card ${card.isMatched ? 'matched' : ''}`}
//       onClick={() => onClick(card.id)}
//     >
//       {card.isMatched ? '✔' : <div>Hello</div>}
//     </div>
//   );
// };

// const App = () => {
//   const [cards, setCards] = useState(generateCards());
//   const [selectedCards, setSelectedCards] = useState([]);

//   useEffect(() => {
//     if (selectedCards.length === 2) {
//       const [firstCard, secondCard] = selectedCards;
//       if (firstCard.value === secondCard.value) {
//         setCards((prevCards) =>
//           prevCards.map((card) =>
//             card.id === firstCard.id || card.id === secondCard.id
//               ? { ...card, isMatched: true }
//               : card
//           )
//         );
//       }
//       setTimeout(() => setSelectedCards([]), 1000);
//     }
//   }, [selectedCards]);

//   const handleCardClick = (cardId) => {
//     if (selectedCards.length < 2) {
//       setSelectedCards((prevSelected) => [...prevSelected, cards.find((card) => card.id === cardId)]);
//     }
//   };

// return (
//   <div className="app">
//     <div className="board">
//       {cards.map((card) => (
//         <Card key={card.id} card={card} onClick={handleCardClick} />
//       ))}
//     </div>
//   </div>
// );
// };