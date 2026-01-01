import { useEffect, useRef, useState } from 'react';

export const useFadeInOnScroll = (options: any) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Set to true once it intersects and never set back to false
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // Optional: Stop observing once visible
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};

export default useFadeInOnScroll;
