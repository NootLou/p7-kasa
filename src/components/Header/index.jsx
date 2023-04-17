import styled from 'styled-components'
import { Link } from 'react-router-dom'

import logo from '../../assets/LOGO.png'

const HeaderContainer = styled.div`
  // border: 1px solid black;
  margin: 40px auto;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HomeLink = styled(Link)`
  padding: 0px;
`

const StyledImage = styled.img`
  max-height: 80px;
`

const StyledLink = styled(Link)`
  color: #ff6060;
  padding: 10px;
  margin-left: 30px;
  font-size: 24px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

function Header() {
  return (
    <HeaderContainer>
      <HomeLink to="/">
        <StyledImage src={logo} alt="Logo"></StyledImage>
      </HomeLink>
      <ul>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/aboutus">A Propos</StyledLink>
      </ul>
    </HeaderContainer>
  )
}

export default Header
