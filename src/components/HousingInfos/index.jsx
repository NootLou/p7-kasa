import styled from 'styled-components'

const HousingInfosContainer = styled.div`
  // border: 1px solid black;
  width: 50%;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100%;
  }
`

const Title = styled.h1`
  // border: 1px solid black;
  font-size: 36px;
  line-height: 51px;
  margin: 0px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 18px;
    line-height: 26px;
  }
`

const Location = styled.p`
  // border: 1px solid black;
  font-size: 18px;
  margin: 10px 0px 20px 0px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-bottom: 10px;
  }
`

const TagsContainer = styled.div`
  // border: 1px solid black;
  display: flex;
  align-items: space-between;
`

const Tags = styled.p`
  // border: 1px solid black;
  width: 145px;
  margin-right: 10px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #ff6060;
  border-radius: 15px;
  font-size: 14px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 10px;
    border-radius: 5px;
  }
`

function HousingInfos({ title, location, tags, id }) {
  return (
    <HousingInfosContainer>
      <Title>{title}</Title>
      <Location>{location}</Location>
      <TagsContainer>
        {tags.map((tag, index) => (
          <Tags key={`${tag}-${id}`}>{tag}</Tags>
        ))}
      </TagsContainer>
    </HousingInfosContainer>
  )
}

export default HousingInfos
