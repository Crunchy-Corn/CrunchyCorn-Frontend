import {useRef, useCallback, useEffect} from 'react';

export function useScrollFadeIn(direction = 'up', duration = 1, delay = 0, threshold = 0.1) {
    const dom = useRef();

    const handleDirection = (name) => {
      switch (name) {
        case 'up':
          return 'translate3d(0, 50%, 0)';
        case 'down':
          return 'translate3d(0, -50%, 0)';
        case 'left':
          return 'translate3d(50%, 0, 0)';
        case 'right':
          return 'translate3d(-50%, 0, 0)';
        default:
          return;
      };
    };

    const handleScroll = useCallback(
        ([entry]) => {

        if (!dom.current || !entry.isIntersecting) return;
        const { current } = dom;

        if(entry.isIntersecting) {
            current.style.transitionProperty = 'opacity transform';
            current.style.transitionDuration = `${duration}s`;
            current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
            current.style.transitionDelay = `${delay}s`;
            current.style.opacity = 1;
            current.style.transform = 'translate3d(0, 0, 0)';
        }
    }, [delay, duration]);

    useEffect(() => {
        let observer;
        const { current } = dom;

        if (current) {
            observer = new IntersectionObserver(handleScroll, { threshold: `${threshold}`});
            observer.observe(current);

            return () => observer && observer.disconnect();
        }
    }, [handleScroll, threshold]);
    return {
        ref: dom,
        style: {
            opacity: 0,
            transform: handleDirection(direction),
        }
    };
};