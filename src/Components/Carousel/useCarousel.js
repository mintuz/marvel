import { useEffect, useState } from "react";
import scroll from "./scroll-animate";

const ITEM_SELECTOR = ".ab-c-carousel__item";
const ITEMS_CONTAINER_SELECTOR = ".ab-c-carousel__items";

export default function useCarousel({ carousel, numberOfChildren, onScroll }) {
  const [currentXPosition, setPositionState] = useState(0);

  function getItemElementAtIndex(index) {
    return carousel.current.querySelectorAll(ITEM_SELECTOR)[index];
  }

  function setXPosition(xPosition) {
    const carouselEle = carousel.current.querySelector(
      ITEMS_CONTAINER_SELECTOR
    );
    scroll(carouselEle, xPosition, 250);
  }

  function scrollToIndex(index) {
    const item = getItemElementAtIndex(index);
    const itemPosition = item.offsetLeft;

    setXPosition(itemPosition);
  }

  function getItemAtCurrentPosition() {
    let currentItem;
    let currentItemSelected;

    for (let i = 0; i < numberOfChildren; i++) {
      currentItem = getItemElementAtIndex(i);
      currentItemSelected =
        currentXPosition < currentItem.offsetLeft + currentItem.offsetWidth;

      if (currentItemSelected) {
        currentItem.index = i;
        return currentItem;
      }
    }

    return -1;
  }

  function getCurrentIndex() {
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
    const carouselElement = carousel.current.querySelector(
      ITEMS_CONTAINER_SELECTOR
    );

    return (
      parseInt(carouselElement.scrollWidth) -
      parseInt(carouselElement.clientWidth)
    );
  }

  useEffect(() => {
    carousel.current
      .querySelector(ITEMS_CONTAINER_SELECTOR)
      .addEventListener("scroll", e => {
        setPositionState(e.target.scrollLeft);
      });
  }, [numberOfChildren, carousel]);

  return [
    getCurrentIndex,
    scrollToIndex,
    getXPosition,
    setXPosition,
    getMaxScroll
  ];
}
