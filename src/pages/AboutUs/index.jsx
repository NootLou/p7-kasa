import styled from 'styled-components'
import { useState } from 'react'
import { infosList } from '../../datas/aboutUs'
import bannerImage from '../../assets/banner2.png'

const Banner = styled.div`
  width: 95%;
  margin: 24px auto;
  height: 400px;
  border-radius: 50px;
  background-image: url(${bannerImage});
  background-size: 100%;
  background-position: center;
`

const Filter = styled.div`
  opacity: 0.3;
  height: 100%;
  width: 100%;
  border-radius: 50px;
  background-color: black;
`

const InfoWrapper = styled.div`
  // border: 1px solid black;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 30px;
  background-color: #f7f7f7;
`

const InfoSection = styled.section`
  // border: 1px solid black;
  margin: 0 auto;
  padding: 5px;
  background-color: #ff6060;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`

const InfoTitle = styled.p`
  // border: 1px solid black;
  color: white;
  font-family: Montserra, sans-serif;
  font-size: 24px;
  margin: 0px;
  padding: 5px;
`

const Arrow = styled.div`
  border-bottom: 3px solid white;
  border-right: 3px solid white;
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  position: relative;
  right: 20px;
`

const InfoContent = styled.p`
  // border: 1px solid black;
  color: #ff6060;
  font-family: Montserra, sans-serif;
  font-size: 24px;
  line-height: 142.6%;
  text-align: center;
  padding: 20px;
  margin: 10px 0px 0px 0px;
`

function AboutUs() {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div>
      <Banner>
        <Filter />
      </Banner>
      {infosList.map((info, index) => (
        <InfoWrapper>
          <InfoSection>
            <InfoTitle>{info.title}</InfoTitle>
            <Arrow onClick={() => setIsOpen(false)}></Arrow>
          </InfoSection>
          <InfoContent>{info.content}</InfoContent>
        </InfoWrapper>
      ))}
    </div>
  ) : (
    <div>
      <Banner>
        <Filter />
      </Banner>
      {infosList.map((info, index) => (
        <InfoWrapper>
          <InfoSection>
            <InfoTitle>{info.title}</InfoTitle>
            <Arrow onClick={() => setIsOpen(true)}></Arrow>
          </InfoSection>
        </InfoWrapper>
      ))}
    </div>
  )
}

export default AboutUs
