import styled from 'styled-components'
import { infosList } from '../../datas/aboutUs'
import bannerImage from '../../assets/banner2.png'
import InfoWrapper from '../../components/InfoWrapper'

const Container = styled.div`
  min-height: 950px;
`

const Banner = styled.div`
  margin: 24px auto;
  height: 400px;
  border-radius: 50px;
  background-image: url(${bannerImage});
  background-size: 100%;
  background-position: center;
`

const Filter = styled.div`
  opacity: 0.3;
  height: 100%;
  width: 100%;
  border-radius: 50px;
  background-color: black;
`

function AboutUs() {
  return (
    <Container>
      <Banner>
        <Filter />
      </Banner>
      {infosList.map((info, index) => (
        <InfoWrapper key={`${index}-${info}`} info={info}></InfoWrapper>
      ))}
    </Container>
  )
}

export default AboutUs
