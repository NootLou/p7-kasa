import styled from 'styled-components'

const CardContainer = styled.div`
  // border: 1px solid black;
  border-radius: 10px;
  min-width: 340px;
  width: 340px;
  height: 340px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  // display: flex;
  // align-items: center;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 250px;
  }
`

const CardImage = styled.img`
  // border: 1px solid black;
  height: 110%;
`

const CardLTitle = styled.p`
  // border: 1px solid black;
  font-size: 18px;
  color: white;
  margin: 0px;
  margin-left: 10px;
  width: 45%;
  position: absolute;
  bottom: 10px;
`

function Card({ title, cover }) {
  return (
    <CardContainer>
      <CardLTitle>{title}</CardLTitle>
      <CardImage src={cover} alt="Photo du logement" />
    </CardContainer>
  )
}

export default Card
