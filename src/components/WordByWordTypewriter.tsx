import { useState, useEffect } from 'react';

interface WordByWordTypewriterProps {
  text: string;
  className?: string;
  wordSpeed?: number;
  pauseDuration?: number;
  resetPause?: number;
}

const WordByWordTypewriter = ({ 
  text, 
  className = "", 
  wordSpeed = 600,
  pauseDuration = 300,
  resetPause = 2000
}: WordByWordTypewriterProps) => {
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  const words = text.split(' ');

  useEffect(() => {
    if (isComplete) {
      const resetTimeout = setTimeout(() => {
        setDisplayedWords([]);
        setCurrentWordIndex(0);
        setIsComplete(false);
      }, resetPause);
      return () => clearTimeout(resetTimeout);
    }

    if (currentWordIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedWords(prev => [...prev, words[currentWordIndex]]);
        setCurrentWordIndex(prev => prev + 1);
      }, currentWordIndex === 0 ? wordSpeed : pauseDuration);
      
      return () => clearTimeout(timeout);
    } else if (currentWordIndex === words.length) {
      setIsComplete(true);
    }
  }, [currentWordIndex, isComplete, words, wordSpeed, pauseDuration, resetPause]);

  return (
    <span className={`inline-block ${className}`}>
      {displayedWords.join(' ')}
      {!isComplete && <span className="animate-pulse text-primary ml-1">|</span>}
    </span>
  );
};

export default WordByWordTypewriter;