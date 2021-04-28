import { useCallback, useEffect, useState } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';

const useCarousel = () => {
  const [ prevBtnEnabled, setPrevBtnEnabled ] = useState(false);
  const [ nextBtnEnabled, setNextBtnEnabled ] = useState(false);

  const [ carouselRef, embla ] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [ embla ]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [ embla ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [ embla ]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on('select', onSelect);
  }, [ embla, onSelect ]);

  return {
    nextBtnProps: {
      disabled: !nextBtnEnabled,
      onClick: scrollNext,
    },
    prevBtnProps: {
      disabled: !prevBtnEnabled,
      onClick: scrollPrev,
    },
    slideProps: {
      onClick: embla?.clickAllowed,
    },
    carouselRef,
  };
};

export default useCarousel;