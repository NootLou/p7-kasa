import styled from 'styled-components'

import footerLogo from '../../assets/footer-LOGO.png'

const FooterContainer = styled.div`
  width: 100%;
  height: 210px;
  background-color: black;
  color: white;
  font-family: Montserra, sans-serif;
  font-size: 24px;
  line-height: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  // position: absolute;
  // bottom: 0px;
  // left: 0px;
`

const StyledImage = styled.img`
  // border: 1px solid white;
  height: 40px;
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
