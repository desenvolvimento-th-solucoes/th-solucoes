import { useState, useEffect } from 'react';

export const TypingAnimation = () => {
    const sentences = ["Transparência", "Honestidade", "Tecnologia", "Habilidade"];
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= sentences[currentSentenceIndex].length) {
                setDisplayText(sentences[currentSentenceIndex].slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
                }, 1000);
            }
        }, 100);
        return () => clearInterval(typingInterval);
    }, [currentSentenceIndex, sentences]);

    return (
        <div className="inline-block overflow-hidden border-r-2 border-r-white leading-normal">
            <span className="typing-text text-lg font-bold ml-2 h-max sm:text-2xl md:text-4xl lg:text-6xl">{displayText}</span>
            <span className="typing-cursor"></span>
        </div>
    );
};

