import styled from 'styled-components'

const ItemContainer = styled.div`
  width: 100%;
`

const CarouselImage = styled.img`
  width: 100%;
`

function CarouselItem({ slide }) {
  return (
    <ItemContainer>
      <CarouselImage src={slide} alt="Vue de l'appartement"></CarouselImage>
    </ItemContainer>
  )
}

export default CarouselItem
