import styled from 'styled-components'

const CardContainer = styled.div`
  // border: 1px solid black;
  border-radius: 10px;
  min-width: 340px;
  width: 340px;
  height: 340px;
  overflow: hidden;
  margin: 0 auto;
`

const CardImage = styled.img`
  // border: 1px solid black;
  height: 340px;
`

const CardLTitle = styled.p`
  // border: 1px solid black;
  font-size: 18px;
  color: white;
  margin-left: 10px;
  width: 40%;
  position: relative;
  bottom: 120px;
`

function Card({ title, cover }) {
  return (
    <CardContainer>
      <CardImage src={cover} alt="Photo du logement" />
      <CardLTitle>{title}</CardLTitle>
    </CardContainer>
  )
}

export default Card
