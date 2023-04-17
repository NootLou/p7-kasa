import styled from 'styled-components'
import { infosList } from '../../datas/aboutUs'
import bannerImage from '../../assets/banner2.png'
// import InfoWrapper from '../../components/InfoWrapper'
import Wrapper from '../../components/Wrapper'

const Container = styled.div`
  // border: 1px solid black;
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

const WrapperContainer = styled.div`
  width: 80%;
  margin: 0 auto;
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
