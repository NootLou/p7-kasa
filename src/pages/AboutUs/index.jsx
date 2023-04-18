import styled from 'styled-components'
import { infosList } from '../../datas/aboutUs'
import bannerImage from '../../assets/banner2.png'
import Wrapper from '../../components/Wrapper'

const Container = styled.div`
  // border: 1px solid black;
  width: 90%;
  min-height: 800px;
  margin: 0 auto;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    min-height: 650px;
  }
`

const Banner = styled.div`
  margin: 20px auto;
  height: 400px;
  border-radius: 50px;
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 210px;
  }
`

const Filter = styled.div`
  opacity: 0.3;
  height: 100%;
  width: 100%;
  border-radius: 50px;
  background-color: black;
`

const WrapperContainer = styled.div`
  width: 80%;
  margin: 40px auto;
`

function AboutUs() {
  return (
    <Container>
      <Banner>
        <Filter />
      </Banner>
      <WrapperContainer>
        {infosList.map((info, index) => (
          <Wrapper
            key={`${index}-${info}`}
            title={info.title}
            description={info.description}
          ></Wrapper>
        ))}
      </WrapperContainer>
    </Container>
  )
}

export default AboutUs
