import styled from 'styled-components'
import { Link } from 'react-router-dom'

import logo from '../../assets/LOGO.png'

const HeaderContainer = styled.div`
  border: 1px solid black;
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const StyledImage = styled.img`
  height: 68px;
`

const StyledLink = styled(Link)`
  color: #ff6060;
  padding: 10px;
  margin-left: 30px;
  font-family: Montserra, sans-serif;
  font-size: 20px;
`

function Header() {
  return (
    <HeaderContainer>
      <StyledImage src={logo} alt="Logo"></StyledImage>
      <ul>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/aboutus">A Propos</StyledLink>
      </ul>
    </HeaderContainer>
  )
}

export default Header
