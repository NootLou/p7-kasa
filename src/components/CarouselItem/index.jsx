import styled from 'styled-components'

const ItemContainer = styled.div`
  width: 100%;
  overflow: hidden;
`

const CarouselImage = styled.img`
  width: 100%;
  border-radius: 10px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    min-height: 225px;
  }
`

function CarouselItem({ slide }) {
  return (
    <ItemContainer>
      <CarouselImage src={slide} alt="Vue de l'appartement"></CarouselImage>
    </ItemContainer>
  )
}

export default CarouselItem
