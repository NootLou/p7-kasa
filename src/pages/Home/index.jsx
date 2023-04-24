import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { housingList } from '../../datas/housing'
import banner from '../../assets/banner.png'
import Card from '../../components/Card'

const Banner = styled.div`
  width: 90%;
  margin: 24px auto;
  height: 400px;
  border-radius: 50px;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  position: relative;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 110px;
    border-radius: 10px;
  }
`

const Filter = styled.div`
  opacity: 0.3;
  height: 100%;
  border-radius: 50px;
  background-color: black;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 110px;
    border-radius: 10px;
  }
`

const Title = styled.h1`
  margin: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 400px;
  color: white;
  font-size: 64px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 24px;
    height: 110px;
    width: 55%;
    padding-left: 15px;
    text-align: left;
  }
`

const GalleryContainer = styled.div`
  width: 90%;
  margin: 20px auto;
  padding: 40px 0px;
  background-color: #f7f7f7;
  border-radius: 25px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    padding: 0px;
    background-color: white;
    width: 100%;
    border-radius: 10px;
  }
`

const StyledLink = styled(Link)`
  padding: 0px;
  text-decoration: none;
`

function Home() {
  return (
    <div>
      <Banner>
        <Filter></Filter>
        <Title>Chez vous, partout ailleurs</Title>
      </Banner>
      <GalleryContainer>
        {housingList.map((housing, index) => (
          <StyledLink
            to={`/housing/${housing.id}`}
            key={`housing-${housing.id}`}
          >
            <Card
              key={`${housing.title}-${housing.id}`}
              title={housing.title}
              cover={housing.cover}
            />
          </StyledLink>
        ))}
      </GalleryContainer>
    </div>
  )
}

export default Home
