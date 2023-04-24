import styled from 'styled-components'
import { Link } from 'react-router-dom'
import img404 from '../../assets/404.png'

const ErrorContainer = styled.div`
  margin: 0 auto;
  margin: 120px;
  text-align: center;
  color: #ff6060;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 90%;
    margin: 100px auto;
  }
`

const Error404 = styled.img`
  height: 263px;
  margin-bottom: 100px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    max-height: 80px;
    margin-bottom: 20px;
    margin-top: 80px;
  }
`

const ErrorTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 220px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin: 0 auto;
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
    width: 70%;

    margin-bottom: 150px;
  }
`

const HomePageLink = styled(Link)`
  font-size: 18px;
  text-decoration: underline;
  color: #ff6060;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin: 0px;
  }
`

function Error() {
  return (
    <ErrorContainer>
      <Error404 src={img404} alt="erreur 404" />
      <ErrorTitle>Oups! La page que vous demandez n'existe pas.</ErrorTitle>
      <HomePageLink to="/">Retourner sur la page d'accueil</HomePageLink>
    </ErrorContainer>
  )
}

export default Error
