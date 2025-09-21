import React, { useState, useEffect } from 'react';

const phrases = ["Standing Seam Roofs", "Seamless Gutters", "Copper Systems"];
const typingSpeed = 150;
const deletingSpeed = 100;
const pauseDuration = 2000; // Pause after a word is fully typed

export default function TypewriterHeadline() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        // Handle deleting
        if (text.length > 0) {
          setText(currentPhrase.substring(0, text.length - 1));
          timer = setTimeout(handleTyping, deletingSpeed);
        } else {
          setIsDeleting(false);
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      } else {
        // Handle typing
        if (text.length < currentPhrase.length) {
          setText(currentPhrase.substring(0, text.length + 1));
          timer = setTimeout(handleTyping, typingSpeed);
        } else {
          // Pause and then start deleting
          timer = setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    };

    // Start the effect
    timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <h1 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-tight px-2">
      LIFETIME <br />
      <span className="text-red-500 break-words">
        {text}
        <span className="animate-pulse ml-1 text-white">|</span>
      </span>
    </h1>
  );
}