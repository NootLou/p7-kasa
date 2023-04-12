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
  background-size: 100%;
  background-position: center;
`

const Filter = styled.div`
  opacity: 0.3;
  height: 100%;
  border-radius: 50px;
  background-color: black;
`

const Title = styled.h1`
  position: relative;
  top: -260px;
  color: white;
  font-size: 64px;
  text-align: center;
  font-weight: 500;
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
