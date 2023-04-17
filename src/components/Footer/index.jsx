import styled from 'styled-components'

import footerLogo from '../../assets/footer-LOGO.png'

const FooterContainer = styled.div`
  width: 120%;
  margin: 0 auto;
  height: 200px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // padding-top: 20px;
  position: relative;
  bottom: -1px;
  left: -10%;
`

const StyledImage = styled.img`
  // border: 1px solid white;
  height: 40px;
`
const StyledText = styled.p`
  // border: 1px solid white;
  margin: 0px;
  margin-top: 20px;
  color: white;
  font-size: 24px;
  line-height: 34px;
`

function Footer() {
  return (
    <FooterContainer>
      <StyledImage src={footerLogo} alt="logo"></StyledImage>
      <StyledText>© 2020 Kasa. All rights reserved</StyledText>
    </FooterContainer>
  )
}

export default Footer
