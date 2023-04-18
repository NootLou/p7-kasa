import styled from 'styled-components'
import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { BsChevronUp } from 'react-icons/bs'

const InfoContainer = styled.div`
  // border: 1px solid black;
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
  align-items: center;
`

const Title = styled.p`
  // border: 1px solid black;
  color: white;
  font-size: 24px;
  margin: 0px;
  padding: 5px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 13px;
  }
`

const Arrow = styled.div`
  // border: 1px solid black;
  position: relative;
  right: 15px;
  color: white;
  font-size: 35px;
  display: flex;
  align-items: center;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 24px;
  }
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

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 12px;
    margin: 0px;
  }
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
        {Array.isArray(props.description) ? (
          props.description.map((equipment, index) => {
            return (
              <InfoContent key={`${equipment}-${index}`}>
                {equipment}
              </InfoContent>
            )
          })
        ) : (
          <InfoContent>{props.description}</InfoContent>
        )}
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
