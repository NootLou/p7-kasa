import styled from 'styled-components'
import { useState } from 'react'

const InfoContainer = styled.div`
  // border: 1px solid black;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 30px;
  background-color: #f7f7f7;
`

const InfoHeader = styled.div`
  // border: 1px solid black;
  margin: 0 auto;
  padding: 5px;
  background-color: #ff6060;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`

const Title = styled.p`
  // border: 1px solid black;
  color: white;
  font-size: 24px;
  margin: 0px;
  padding: 5px;
`

const ArrowUp = styled.div`
  border-bottom: 3px solid white;
  border-right: 3px solid white;
  width: 20px;
  height: 20px;
  transform: rotate(225deg);
  position: relative;
  right: 20px;
  top: 14px;
`

const ArrowDown = styled.div`
  border-bottom: 3px solid white;
  border-right: 3px solid white;
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  position: relative;
  right: 20px;
  top: 2px;
`

const InfoContentDiv = styled.div`
  // border: 1px solid black;
  margin: 0 px;
  padding: 20px;
`

const InfoContent = styled.p`
  // border: 1px solid black;
  color: #ff6060;
  font-size: 24px;
  line-height: 142.6%;
  margin: 10px 0px 0px 0px;
`

function InfoWrapper({ info }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <InfoContainer>
      <InfoHeader>
        <Title>{info.title}</Title>
        <ArrowUp onClick={() => setIsOpen(false)}></ArrowUp>
      </InfoHeader>
      <InfoContentDiv>
        <InfoContent>{info.content}</InfoContent>
      </InfoContentDiv>
    </InfoContainer>
  ) : (
    <InfoContainer>
      <InfoHeader>
        <Title>{info.title}</Title>
        <ArrowDown onClick={() => setIsOpen(true)}></ArrowDown>
      </InfoHeader>
    </InfoContainer>
  )
}

export default InfoWrapper
