import styled from 'styled-components'
import { housingList } from '../../datas/housing'
import banner from '../../assets/banner.png'
import Card from '../../components/Card'

const Title = styled.h1`
  position: relative;
  top: -260px;
  font-family: Montserra, sans-serif;
  color: white;
  font-size: 52px;
  text-align: center;
  font-weight: 300;
`

const Banner = styled.div`
  // border: 1px solid black;
  width: 95%;
  margin: 24px auto;
  height: 400px;
  border-radius: 50px;
  background-image: url(${banner});
  background-size: 100%;
`

const Filter = styled.div`
  opacity: 0.3;
  height: 100%;
  width: 100%;
  border-radius: 50px;
  background-color: black;
`

const GalleryContainer = styled.div`
  // border: 1px solid black;
  width: 95%;
  margin: 20px auto;
  padding: 40px;
  background-color: #f7f7f7;
  border-radius: 25px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
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
          <Card key={housing.id} title={housing.title} cover={housing.cover} />
        ))}
        <Card />
      </GalleryContainer>
    </div>
  )
}

export default Home
