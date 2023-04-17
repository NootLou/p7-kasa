import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { housingList } from '../../datas/housing'
import Carousel from '../../components/Carousel'
import HousingInfos from '../../components/HousingInfos'
import ProfileCard from '../../components/ProfileCard'
import Wrapper from '../../components/Wrapper'

const HousingContainer = styled.div`
  // border: 1px solid black;
  margin: 20px auto;
  color: #ff6060;
  display: flex;
  flex-direction: column;
`

// ------------------------------------ GALLERIE IMAGES ------------------------------------
// const Gallery = styled.div`
//   width: 100%;
//   margin: 24px auto;
//   height: 515px;
//   border-radius: 25px;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
// `
// const Cover = styled.img`
//   width: 100%;
//   position: relative;
//   bottom: 50px;
// `

// ------------------------------------ INFOS DU LOGEMENT ------------------------------------
const HousingInfosContainer = styled.div`
  // border: 1px solid black;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
`

// ------------------------------------ DESCRIPTION ------------------------------------
const DescriptionContainer = styled.div`
  // border: 1px solid black;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const DescriptionDiv = styled.div`
  // border: 1px solid black;
  width: 45%;
`
const EquipmentDiv = styled.div`
  // border: 1px solid black;
  width: 45%;
`

function Housing() {
  const { id } = useParams()
  console.log(id)

  const housing = housingList.find((element) => element.id === id)
  console.log(housing)

  return (
    <HousingContainer>
      <Carousel slides={housing.pictures}></Carousel>
      <HousingInfosContainer>
        <HousingInfos
          title={housing.title}
          location={housing.location}
          tags={housing.tags}
          id={housing.id}
        ></HousingInfos>
        <ProfileCard
          name={housing.host.name}
          picture={housing.host.picture}
          rate={housing.rating}
        ></ProfileCard>
      </HousingInfosContainer>
      <DescriptionContainer>
        <DescriptionDiv>
          <Wrapper
            title="Description"
            description={housing.description}
          ></Wrapper>
        </DescriptionDiv>
        <EquipmentDiv>
          <Wrapper
            title="Equipements"
            description={housing.equipments}
          ></Wrapper>
        </EquipmentDiv>
      </DescriptionContainer>
    </HousingContainer>
  )
}

export default Housing
