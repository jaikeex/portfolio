import { useEffect, useRef, useState } from 'react';

export const useNavigationDots = (sectionRefs: React.RefObject<HTMLDivElement>[]) => {
  const [activeDot, setActiveDot] = useState(0);
  const allRefsPopulated = useRef(false);

  useEffect(() => {
    const checkAllRefsPopulated = () => sectionRefs.every((ref) => ref.current !== null);

    if (!allRefsPopulated.current && checkAllRefsPopulated()) {
      allRefsPopulated.current = true;
    }
  }, [sectionRefs]);

  useEffect(() => {
    if (!allRefsPopulated) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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
  }, [sectionRefs, allRefsPopulated]);

  return { activeDot };
};
