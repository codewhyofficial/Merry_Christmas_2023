import React, { useState, useEffect } from 'react';

const LetterTypingEffect = ({word}) => {
  const [text, setText] = useState('');
//   const word = 'Hello';
  const typingSpeed = 100; // Adjust the speed (in milliseconds) as needed
  const pauseBetweenWords = 1000; // Adjust the pause between words (in milliseconds) as needed

  useEffect(() => {
    let currentIndex = 0;
    let isTyping = true;

    const typeLetters = () => {
      const currentLetter = word[currentIndex];

      // Check if currentIndex exceeds the word length
      if (currentLetter !== undefined) {
        // Typing one letter at a time
        setText((prevText) => prevText + currentLetter);
        currentIndex++;
      }

      // If all letters are typed, pause before clearing the text
      if (currentIndex === word.length) {
        setTimeout(() => {
          isTyping = false;
          setTimeout(() => {
            setText('');
            currentIndex = 0;
            isTyping = true;
          }, pauseBetweenWords);
        }, typingSpeed);
      }
    };

    // Start typing when the component mounts
    const interval = setInterval(() => {
      if (isTyping) {
        typeLetters();
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [word, typingSpeed, pauseBetweenWords]);

  return (
    <span className='bg-clip-text text-transparent bg-cyan-300 bg-gradient-to-br from-cyan-300 from-20% via-cyan-400 via-70% to-cyan-300 to-90% tracking-wide Capitalize'>{text}</span>
  );
};

export default LetterTypingEffect;
