import styled from 'styled-components'
import Ratings from '../Ratings'

const CardContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: end;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
  }
`

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Name = styled.p`
  width: 65px;
  margin-right: 10px;
  padding: 0px 5px;
  font-size: 18px;
  text-align: right;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 12px;
    width: 60px;
  }
`

const ProfilePhoto = styled.img`
    height: 70px;
  border-radius: 50px;
  margin: 0px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 40px;
`

function ProfileCard({ name, picture, rate }) {
  return (
    <CardContainer>
      <Profile>
        <Name>{name}</Name>
        <ProfilePhoto src={picture} alt={`Photo de profil de ${name}`} />
      </Profile>
      <Ratings rating={rate}></Ratings>
    </CardContainer>
  )
}

export default ProfileCard
