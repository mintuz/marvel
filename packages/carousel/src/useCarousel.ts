import { useEffect, useState, RefObject } from 'react';
import { scrollTo as scroll } from './scroll-animate';

const ITEM_SELECTOR = '.ab-c-carousel__item';
const ITEMS_CONTAINER_SELECTOR = '.ab-c-carousel__items';

type getCurrentIndexFunc = () => number;
type getXPositionFunc = () => number;
type getMaxScrollFunc = () => number;
type scrollToIndexFunc = (index: number) => void;
type UseCarouselReturnValue = [
  getCurrentIndexFunc,
  scrollToIndexFunc,
  getXPositionFunc,
  getMaxScrollFunc
];

export type UseCarouselProps = {
  numberOfChildren: number;
  carousel: RefObject<HTMLDivElement>;
};

export const useCarousel = ({
  carousel,
  numberOfChildren,
}: UseCarouselProps): UseCarouselReturnValue => {
  const [currentXPosition, setPositionState] = useState(0);

  function getItemElementAtIndex(index: number) {
    if (carousel.current) {
      return carousel.current.querySelectorAll<HTMLElement>(ITEM_SELECTOR)[
        index
      ];
    }

    return null;
  }

  function setXPosition(xPosition: number) {
    if (carousel.current) {
      const carouselEle = carousel.current.querySelector<HTMLElement>(
        ITEMS_CONTAINER_SELECTOR
      );

      if (carouselEle) {
        scroll(carouselEle, xPosition, 250);
      }
    }
  }

  function scrollToIndex(index: number) {
    const item = getItemElementAtIndex(index);

    if (item) {
      const itemPosition = item.offsetLeft;
      setXPosition(itemPosition);
    }
  }

  function getItemAtCurrentPosition() {
    let currentItem;
    let currentItemSelected;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < numberOfChildren; i++) {
      currentItem = getItemElementAtIndex(i);

      if (currentItem) {
        currentItemSelected =
          currentXPosition < currentItem.offsetLeft + currentItem.offsetWidth;

        if (currentItemSelected) {
          return { index: i, currentItem };
        }
      }
    }

    return { index: -1, currentItem: null };
  }

  function getCurrentIndex(): number {
    try {
      return getItemAtCurrentPosition().index;
    } catch (e) {
      return 0;
    }
  }

  function getXPosition() {
    return currentXPosition;
  }

  function getMaxScroll() {
    if (carousel.current) {
      const carouselElement = carousel.current.querySelector<HTMLElement>(
        ITEMS_CONTAINER_SELECTOR
      );

      if (carouselElement) {
        return carouselElement.scrollWidth - carouselElement.clientWidth;
      }
    }

    return 0;
  }

  useEffect(() => {
    if (carousel.current) {
      const carouselElement = carousel.current.querySelector<HTMLElement>(
        ITEMS_CONTAINER_SELECTOR
      );

      carouselElement?.addEventListener('scroll', e => {
        const scrollEvent = e as Event & {
          target: { scrollLeft: number };
        };

        if (scrollEvent.target.scrollLeft) {
          setPositionState(scrollEvent.target.scrollLeft);
        }
      });
    }
  }, [numberOfChildren, carousel]);

  return [getCurrentIndex, scrollToIndex, getXPosition, getMaxScroll];
};
