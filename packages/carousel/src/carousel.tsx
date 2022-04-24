import React, { useRef, useEffect, FC } from 'react'
import styled from 'styled-components'
import { useCarousel } from './useCarousel'

const CarouselContainer = styled.div`
    position: relative;
    overflow: hidden;
`

const CarouselItems = styled.div`
    position: relative;
    padding-bottom: 999px;
    margin-bottom: -999px;
    overflow-x: scroll;
    display: flex;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
`

const CarouselItem = styled.div`
    flex: 0 0 auto;
    scroll-snap-align: start;
`

export type CarouselProps = {
    button?: (direction: string) => React.ReactElement
    activeItem: number
    children: React.ReactElement
}

export const Carousel: FC<CarouselProps> = ({
    children,
    activeItem,
    button,
}) => {
    const carousel = useRef<HTMLDivElement>(null)
    const numberOfChildren = React.Children.count(children)

    const [getCurrentIndex, scrollToIndex] = useCarousel({
        carousel,
        numberOfChildren,
    })

    function handleOnClick(direction: string) {
        let index = getCurrentIndex()
        if (direction === 'previous') {
            index -= 1

            if (index < 0) {
                index = 0
            }

            scrollToIndex(index)
        }

        if (direction === 'next') {
            index += 1
            if (index > numberOfChildren - 1) {
                index = numberOfChildren - 1
            }

            scrollToIndex(index)
        }
    }

    function renderButton(direction: string) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return React.Children.map(button!(direction), (btn) =>
            React.cloneElement(btn, {
                onClick() {
                    handleOnClick(direction)
                },
            })
        )
    }

    useEffect(() => {
        if (activeItem) {
            scrollToIndex(activeItem - 1)
        }
    }, [activeItem, scrollToIndex])

    return (
        <CarouselContainer ref={carousel}>
            {button && renderButton('previous')}
            {button && renderButton('next')}
            <CarouselItems
                className="ab-c-carousel__items"
                data-testid="carousel-items"
            >
                {React.Children.map(children, (child, index) => {
                    const isActiveElement = index === getCurrentIndex()
                    return (
                        <CarouselItem
                            className={`ab-c-carousel__item ${
                                isActiveElement
                                    ? 'ab-c-carousel__item--active'
                                    : ''
                            }`}
                            data-testid={`carousel-item carousel-item--${index} ${
                                isActiveElement
                                    ? `carousel-item--${index}--active`
                                    : ''
                            }`}
                        >
                            {child}
                        </CarouselItem>
                    )
                })}
            </CarouselItems>
        </CarouselContainer>
    )
}
