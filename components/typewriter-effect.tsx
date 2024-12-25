'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterEffectProps {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}

export function TypewriterEffect({
  words,
  className,
  cursorClassName,
}: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 150;
    const deleteSpeed = 100;
    const wordDelay = 2000;

    const type = () => {
      const currentWord = words[currentWordIndex].text;

      if (!isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length + 1));

        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), wordDelay);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length - 1));

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }
      }
    };

    const timeout = setTimeout(
      type,
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words]);

  return (
    <h1
      className={cn(
        'text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl',
        className
      )}
    >
      <span>{currentText}</span>
      <span
        className={cn(
          'animate-pulse',
          cursorClassName
        )}
      >
        |
      </span>
    </h1>
  );
}