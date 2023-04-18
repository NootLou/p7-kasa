import styled from 'styled-components'

import footerLogo from '../../assets/footer-LOGO.png'

const FooterContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 200px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // padding-top: 20px;
  // position: absolute;
  // bottom: 0px;
  // left: 0px;
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

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 12px;
  }
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
