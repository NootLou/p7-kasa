import styled from 'styled-components'
import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { BsChevronUp } from 'react-icons/bs'

const InfoContainer = styled.div`
  // border: 1px solid black;
  //   width: 80%;
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

const Arrow = styled.div`
  // border: 1px solid black;
  position: relative;
  right: 5px;
  color: white;
  font-size: 35px;
  display: flex;
  align-items: center;
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

function Wrapper(props) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <InfoContainer>
      <InfoHeader>
        <Title>{props.title}</Title>
        <Arrow onClick={() => setIsOpen(false)}>
          <BsChevronUp />
        </Arrow>
      </InfoHeader>
      <InfoContentDiv>
        <InfoContent>{props.description}</InfoContent>
      </InfoContentDiv>
    </InfoContainer>
  ) : (
    <InfoContainer>
      <InfoHeader>
        <Title>{props.title}</Title>
        <Arrow onClick={() => setIsOpen(true)}>
          <BsChevronDown />
        </Arrow>
      </InfoHeader>
    </InfoContainer>
  )
}

export default Wrapper
