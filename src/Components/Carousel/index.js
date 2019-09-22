import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useCarousel from "./useCarousel";

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const CarouselItems = styled.div`
  position: relative;
  padding-bottom: 999px;
  margin-bottom: -999px;
  overflow-x: scroll;
  display: flex;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`;

const CarouselItem = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: start;
`;

export default function Carousel(props) {
  const carousel = useRef(null);
  const [inactiveButton, setInactiveButton] = useState("");
  const numberOfChildren = props.children.length;

  const [
    getCurrentIndex,
    scrollToIndex,
    getXPosition,
    setXPosition,
    getMaxScroll
  ] = useCarousel({
    carousel,
    numberOfChildren
  });

  function handleOnClick(direction) {
    let index = getCurrentIndex();
    if (direction === "previous") {
      index = index - 1;

      if (index < 0) {
        index = 0;
      }

      scrollToIndex(index);
    }

    if (direction === "next") {
      index = index + 1;
      if (index > numberOfChildren - 1) {
        index = numberOfChildren - 1;
      }

      scrollToIndex(index);
    }
  }

  function renderButton(direction) {
    return React.Children.map(props.button(direction), button => {
      return React.cloneElement(button, {
        onClick() {
          handleOnClick(direction);
        }
      });
    });
  }

  useEffect(() => {
    if (props.activeItem) {
      scrollToIndex(props.activeItem - 1);
    }
  }, [props.activeItem]);

  return (
    <CarouselContainer ref={carousel}>
      {props.button && renderButton("previous")}
      {props.button && renderButton("next")}
      <CarouselItems
        className="ab-c-carousel__items"
        data-testid="carousel-items"
      >
        {React.Children.map(props.children, (child, index) => {
          const isActiveElement = index === getCurrentIndex();
          return (
            <CarouselItem
              className={`ab-c-carousel__item ${
                isActiveElement ? "ab-c-carousel__item--active" : ""
              }`}
              data-testid={`carousel-item carousel-item--${index} ${
                isActiveElement ? `carousel-item--${index}--active` : ""
              }`}
            >
              {child}
            </CarouselItem>
          );
        })}
      </CarouselItems>
    </CarouselContainer>
  );
}

Carousel.propTypes = {
  activeItem: PropTypes.number
};
