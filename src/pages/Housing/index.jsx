import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { housingList } from '../../datas/housing'
import Carousel from '../../components/Carousel'
import HousingInfos from '../../components/HousingInfos'
import ProfileCard from '../../components/ProfileCard'
import Wrapper from '../../components/Wrapper'

const HousingContainer = styled.div`
  // border: 1px solid black;
  width: 90%;
  margin: 20px auto;
  color: #ff6060;
  display: flex;
  flex-direction: column;
`

// ------------------------------------ INFOS DU LOGEMENT ------------------------------------
const HousingInfosContainer = styled.div`
  // border: 1px solid black;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
  }
`

// ------------------------------------ DESCRIPTION ------------------------------------
const DescriptionContainer = styled.div`
  // border: 1px solid black;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
  }
`
const DescriptionDiv = styled.div`
  // border: 1px solid black;
  width: 45%;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100%;
  }
`
const EquipmentDiv = styled.div`
  // border: 1px solid black;
  width: 45%;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100%;
  }
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
