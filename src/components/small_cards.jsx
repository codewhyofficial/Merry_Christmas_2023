import React, { useState, useEffect } from 'react';

const SmallCard = ({ shuffledCards }) => {
    const [clickedCards, setClickedCards] = useState([]);
    const [hiddenCards, setHiddenCards] = useState([]);
    const [flipCount, setFlipCount] = useState(0);

    const checkCount = Math.ceil(flipCount / 2);

    const handleCardClick = (index) => {
        // Increment the flip count each time a card is clicked
        setFlipCount((prevFlipCount) => prevFlipCount + 1);

        if (clickedCards.length < 2 || clickedCards.includes(index)) {
            // Toggle the clicked state of the card
            setClickedCards((prevClickedCards) => {
                if (prevClickedCards.includes(index)) {
                    return prevClickedCards.filter((clickedIndex) => clickedIndex !== index);
                } else {
                    // If not clicked, add to the clicked cards
                    return [...prevClickedCards, index];
                }
            });
        }
    };

    //   const handleTryAgainClick = () => {
    //     // Reset the flip count to zero
    //     setFlipCount(0);
    //     // Flip all the cards back by clearing the clicked cards state
    //     setClickedCards([]);
    //   };

    const handleTryAgainClick = () => {
        // Reset the flip count to zero
        setFlipCount(0);
        // Clear the hidden cards state to make all cards visible again
        setHiddenCards([]);
        // Clear the clicked cards state
        setClickedCards([]);
    };


    useEffect(() => {
        // Check for a match when two cards are clicked
        if (clickedCards.length === 2) {
            const firstCard = shuffledCards[clickedCards[0]];
            const secondCard = shuffledCards[clickedCards[1]];

            // Check if the IDs match using strict equality (===)
            if (firstCard.id === secondCard.id) {
                // If IDs match, update the hidden cards state
                // Set a timeout to clear the clicked cards state after a delay
                setTimeout(() => {
                    setHiddenCards((prevHiddenCards) => [...prevHiddenCards, firstCard.id]);
                }, 1000);


                setTimeout(() => {
                    setClickedCards([]);
                }, 1000);
            } else {
                // If IDs don't match, set a timeout to flip the cards back after a delay
                setTimeout(() => {
                    setClickedCards([]);
                }, 1000);
            }
        }
    }, [clickedCards, shuffledCards]);

    return (
        <>
            <div className="flex justify-center flex-wrap p-1">
                <div className='grid grid-cols-4 place-items-center'>
                    {shuffledCards.map((card, index) => (
                        <div
                            key={index}
                            className={`card-container bg-amber-400 bg-gradient-to-tl from-orange-400 from-10% via-amber-400 via-30% to-yellow-400 to-90% m-1 p-5 rounded w-20 h-20 relative cursor-pointer transition-transform ${clickedCards.includes(index) ? 'transform rotate-180' : ''} ${hiddenCards.includes(card.id) ? 'opacity-0' : ''}`}
                            onClick={() => handleCardClick(index)}
                        >
                            {/* Front side (text) */}
                            <div className={`front-side absolute inset-0 rounded-lg transform rotate-0 ${clickedCards.includes(index) ? 'hidden' : ''}`}>
                                {/* <img src={gift1} alt="Gift" className="cover" /> */}
                                {/* <p>{card.id}</p> */}
                            </div>

                            {/* Back side (image) */}
                            <div className={`back-side absolute inset-0 transform rotate-180 ${clickedCards.includes(index) ? '' : 'hidden'}`}>
                                <img
                                    src={card.image}
                                    alt={`Card ${card}`}
                                    className='w-full h-full object-cover rounded'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='m-auto mt-2 p-2 h-10 bg-green-400 w-36 rounded text-center'>
                    <p className='w-max'>Total Checks: {checkCount}</p>
            </div>

            <div className='m-auto mt-2 p-2 bg-red-400 w-36 rounded text-center'>

                    <button  onClick={handleTryAgainClick}>Try Again</button>
            </div>



        </>
    );
}

export default SmallCard;
