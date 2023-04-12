import styled from 'styled-components'
import Ratings from '../Ratings'

const CardContainer = styled.div`
  //   border: 1px solid black;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: end;
`

const Profile = styled.div`
  //   border: 1px solid blue;
  //   width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Name = styled.p`
  //   border: 1px solid black;
  width: 65px;
  margin-right: 10px;
  padding: 0px 5px;
  font-size: 18px;
  text-align: right;
`

const ProfilePhoto = styled.img`
  //   border: 1px solid black;
  height: 70px;
  border-radius: 50px;
  margin: 0px;
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
