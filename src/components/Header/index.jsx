import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../assets/LOGO.png'
// import { useEffect } from 'react'

const HeaderContainer = styled.div`
  // border: 1px solid black;
  width: 90%;
  margin: 20px auto;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HomeLink = styled(Link)`
  padding: 0px;
`

const StyledImage = styled.img`
  max-height: 80px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    max-height: 40px;
  }
`

const NavList = styled.nav`
  // border: 1px solid black;
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  // border: 1px solid black;
  color: #ff6060;
  padding: 10px;
  font-size: 24px;
  text-decoration: none;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 12px;
    text-transform: uppercase;
  }
`

function Header() {
  return (
    <HeaderContainer>
      <HomeLink to="/">
        <StyledImage src={logo} alt="Logo"></StyledImage>
      </HomeLink>
      <NavList>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/aboutus">A Propos</StyledLink>
      </NavList>
    </HeaderContainer>
  )
}

export default Header
