import { useState } from 'react'
import styled from 'styled-components'
import CarouselItem from '../CarouselItem'

const CarouselContainer = styled.div`
  position: relative;
  height: 630px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin-bottom: 20px;
`

const RightArrow = styled.div`
  border-bottom: 6px solid white;
  border-right: 6px solid white;
  width: 40px;
  height: 40px;
  transform: rotate(315deg);
  position: absolute;
  right: 40px;
  top: 300px;
  z-index: 10;
`

const LeftArrow = styled.div`
  border-bottom: 6px solid white;
  border-right: 6px solid white;
  width: 40px;
  height: 40px;
  transform: rotate(135deg);
  position: absolute;
  left: 40px;
  top: 300px;
  z-index: 10;
`

const ItemIndex = styled.span`
  color: white;
  font-size: 24px;
  position: absolute;
  top: 560px;
`

function Carousel({ slides }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const length = slides.length - 1

  const nextSlide = () => {
    setActiveSlide(activeSlide === length - 1 ? 0 : activeSlide + 1)
  }

  const previousSlide = () => {
    setActiveSlide(activeSlide === 0 ? length - 1 : activeSlide - 1)
  }

  return (
    <CarouselContainer>
      <CarouselItem slide={`${slides[activeSlide]}`}></CarouselItem>
      <RightArrow onClick={() => nextSlide()}></RightArrow>
      <LeftArrow onClick={() => previousSlide()}></LeftArrow>
      <ItemIndex>
        {activeSlide + 1} / {length}
      </ItemIndex>
    </CarouselContainer>
  )
}

export default Carousel
