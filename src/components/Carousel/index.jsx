import { useState } from 'react'
import styled from 'styled-components'
import CarouselItem from '../CarouselItem'
import { BsChevronLeft } from 'react-icons/bs'
import { BsChevronRight } from 'react-icons/bs'

const CarouselContainer = styled.div`
  position: relative;
  height: 630px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin-bottom: 20px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 225px;
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 10px;
  }
`

const RightArrow = styled.div`
  position: absolute;
  right: 40px;
  top: 300px;
  z-index: 10;
  color: white;
  font-size: 65px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    top: 100px;
    right: 10px;
    font-size: 28px;
  }
`

const LeftArrow = styled.div`
  position: absolute;
  left: 40px;
  top: 300px;
  z-index: 10;
  color: white;
  font-size: 65px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    top: 100px;
    left: 10px;
    font-size: 28px;
  }
`

const ItemIndex = styled.span`
  color: white;
  font-size: 24px;
  position: absolute;
  top: 560px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    top: 200px;
    font-size: 12px;
    // bottom: 20px;
  }
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
      {slides.length > 1 && (
        <>
          <RightArrow onClick={() => nextSlide()}>
            <BsChevronRight />
          </RightArrow>
          <LeftArrow onClick={() => previousSlide()}>
            <BsChevronLeft />
          </LeftArrow>
          <ItemIndex>
            {activeSlide + 1} / {length}
          </ItemIndex>
        </>
      )}
    </CarouselContainer>
  )
}

export default Carousel
