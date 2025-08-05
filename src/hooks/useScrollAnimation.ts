import { useEffect, useRef, useState } from 'react';

export type AnimationType = 'fade' | 'slideLeft' | 'slideRight' | 'slideUp' | 'slideDown' | 'scale' | 'flip' | 'rotate';

export const useScrollAnimation = (
  animationType: AnimationType = 'fade',
  threshold = 0.1,
  triggerOnce = true
) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, triggerOnce]);

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (animationType) {
        case 'slideLeft':
          return `${baseClass} opacity-0 transform -translate-x-16`;
        case 'slideRight':
          return `${baseClass} opacity-0 transform translate-x-16`;
        case 'slideUp':
          return `${baseClass} opacity-0 transform translate-y-16`;
        case 'slideDown':
          return `${baseClass} opacity-0 transform -translate-y-16`;
        case 'scale':
          return `${baseClass} opacity-0 transform scale-75`;
        case 'flip':
          return `${baseClass} opacity-0 transform rotateY-90`;
        case 'rotate':
          return `${baseClass} opacity-0 transform rotate-12 scale-75`;
        default:
          return `${baseClass} opacity-0 transform translate-y-8`;
      }
    }
    
    return `${baseClass} opacity-100 transform translate-x-0 translate-y-0 scale-100 rotate-0`;
  };

  return { ref, isVisible, animationClass: getAnimationClass() };
};

export const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};