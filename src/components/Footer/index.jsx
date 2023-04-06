import styled from 'styled-components'

import footerLogo from '../../assets/footer-LOGO.png'

const FooterContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: black;
  color: white;
  font-family: Montserra, sans-serif;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledImage = styled.img`
  height: 40px;
  padding: 20px;
`

function Footer() {
  return (
    <FooterContainer>
      <StyledImage src={footerLogo} alt="logo"></StyledImage>
      <p>© 2020 Kasa. All rights reserved</p>
    </FooterContainer>
  )
}

export default Footer
