import React from 'react'
import ReviewItemStyles from '../styles/ComponentStyles/ReviewItemStyles'

function ReviewItem({text}) {
  return (
    <ReviewItemStyles>
        <p>{text}</p>
    </ReviewItemStyles>
  )
}

export default ReviewItem