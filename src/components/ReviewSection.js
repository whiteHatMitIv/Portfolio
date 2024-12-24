import React from 'react'
import ReviewStyles from '../styles/ComponentStyles/ReviewStyles'
import { InnerLayout } from '../styles/Layout'
import Title  from '../components/Title'
import ReviewItem from './ReviewItem'

function ReviewSection() {
  return (
    <InnerLayout>
        <ReviewStyles>
            <Title title={'Reviews'} span={'Reviews'}/>
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem text={'lorem ipsum'}/>
                    <ReviewItem text={'lorem ipsum'}/>
                </div>
            </InnerLayout>
        </ReviewStyles>
    </InnerLayout>
  )
}

export default ReviewSection