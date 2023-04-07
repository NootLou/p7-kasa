import styled from 'styled-components'
import { Link } from 'react-router-dom'

import img404 from '../../assets/404.png'

const ErrorContainer = styled.div`
  // border: 1px solid black;
  font-family: Montserra, sans-serif;
  margin: 0 auto;
  text-align: center;
  color: #ff6060;
`

const Error404 = styled.img`
  // border: 1px solid black;
  margin: 150px 0px 50px 0px;
`

const ErrorTitle = styled.h1`
  // border: 1px solid black;
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 200px;
  margin-top: 50px;
`

const HomePageLink = styled(Link)`
  // border: 1px solid black;
  text-decoration: underline;
  color: #ff6060;
  margin-top: 200px;
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
