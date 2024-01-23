'use client';

import { PRODUCT_CATEGORIES } from '@/config';
import { useEffect, useRef, useState } from 'react';
import { Navitem } from './navItem';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

export const Navitems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const isAnyOpen = !!activeIndex;

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null));

  useEffect(() => {
    const handlerKeyEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }
    };
    document.addEventListener('keydown', handlerKeyEsc);
    return () => {
      document.removeEventListener('keydown', handlerKeyEsc);
    };
  }, []);

  return (
    <div
      className="flex gap-4 h-full"
      ref={navRef}
    >
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };
        const isOpen = activeIndex === i;

        return (
          <Navitem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen} //!!null = false
          />
        );
      })}
    </div>
  );
};
