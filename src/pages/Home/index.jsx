import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { housingList } from '../../datas/housing'
import banner from '../../assets/banner.png'
import Card from '../../components/Card'

const Banner = styled.div`
  // border: 1px solid black;
  margin: 24px auto;
  height: 400px;
  border-radius: 50px;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 110px;
    border-radius: 10px;
  }
`

const Filter = styled.div`
  // border: 1px solid red;
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
  // border: 1px solid black;
  margin: 0px;
  position: absolute;
  top: 170px;
  left: 10%;
  width: 80%;
  height: 400px;
  color: white;
  font-size: 64px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 22px;
    height: 110px;
    width: 45%;
    top: 150px;
  }
`

const GalleryContainer = styled.div`
  // border: 1px solid black;
  margin: 20px auto;
  padding: 40px;
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
