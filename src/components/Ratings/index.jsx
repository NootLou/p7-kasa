import fullStar from '../../assets/RedStar.png'
import emptyStar from '../../assets/GreyStar.png'
import styled from 'styled-components'

const StarContainer = styled.div`
  // border: 1px solid black;
  display: flex;
  margin-top: 20px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin: 0px;
  }
`

const Star = styled.img`
  height: 25px;
  width: 25px;
  margin: 5px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 13px;
    width: 13px;
  }
`

function Ratings({ rating }) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <StarContainer>
      {stars.map((star, index) =>
        star <= parseInt(rating) ? (
          <Star src={fullStar} key={`star-${index}`} />
        ) : (
          <Star src={emptyStar} key={`star-${index}`} />
        )
      )}
    </StarContainer>
  )
}

export default Ratings
