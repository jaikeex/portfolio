import { createRef, useEffect, useState } from 'react';

export const useNavigationDots = (sectionRefs: React.RefObject<HTMLDivElement>[]) => {
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('LOL');
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex((ref) => ref.current?.id === entry.target.id);
            setActiveDot(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [sectionRefs]);

  return { activeDot };
};
