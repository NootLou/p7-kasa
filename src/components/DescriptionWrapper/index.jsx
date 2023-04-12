import styled from 'styled-components'
import { useState } from 'react'

const DescriptionContainer = styled.div`
  // border: 1px solid black;
  //   width: 80%;
  margin: 0 auto;
  margin-bottom: 30px;
  background-color: #f7f7f7;
`

const DescriptionHeader = styled.div`
  // border: 1px solid black;
  margin: 0 auto;
  padding: 5px;
  background-color: #ff6060;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`

const Title = styled.p`
  // border: 1px solid black;
  color: white;
  font-size: 24px;
  margin: 0px;
  padding: 10px;
`

const ArrowUp = styled.div`
  border-bottom: 3px solid white;
  border-right: 3px solid white;
  width: 20px;
  height: 20px;
  transform: rotate(225deg);
  position: relative;
  right: 20px;
  top: 19px;
`

const ArrowDown = styled.div`
  border-bottom: 3px solid white;
  border-right: 3px solid white;
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  position: relative;
  right: 20px;
  top: 9px;
`

const DescriptionContentDiv = styled.div`
  // border: 1px solid black;
  margin: 0 px;
  padding: 20px;
  height: 250px;
`

const DescriptionContent = styled.p`
  // border: 1px solid black;
  margin: 0px;
  color: #ff6060;
  font-size: 24px;
  line-height: 142.6%;
`

function DescriptionWrapper({ housing }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <DescriptionContainer>
      <DescriptionHeader>
        <Title>Description</Title>
        <ArrowUp onClick={() => setIsOpen(false)}></ArrowUp>
      </DescriptionHeader>
      <DescriptionContentDiv>
        <DescriptionContent>{housing.description}</DescriptionContent>
      </DescriptionContentDiv>
    </DescriptionContainer>
  ) : (
    <DescriptionContainer>
      <DescriptionHeader>
        <Title>Description</Title>
        <ArrowDown onClick={() => setIsOpen(true)}></ArrowDown>
      </DescriptionHeader>
    </DescriptionContainer>
  )
}

export default DescriptionWrapper
