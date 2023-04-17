import styled from 'styled-components'
import { Link } from 'react-router-dom'

import img404 from '../../assets/404.png'

const ErrorContainer = styled.div`
  // border: 1px solid black;
  margin: 0 auto;
  margin: 120px;
  text-align: center;
  color: #ff6060;
`

const Error404 = styled.img`
  // border: 1px solid black;
  height: 263px;
  margin-bottom: 100px;
`

const ErrorTitle = styled.h1`
  // border: 1px solid black;
  font-size: 36px;
  margin-bottom: 220px;
`

const HomePageLink = styled(Link)`
  // border: 1px solid black;
  font-size: 18px;
  text-decoration: underline;
  color: #ff6060;
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
