import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../Components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-bold font-palanquin text-4xl text-center'>What Our <span className='text-coral-red'>Customers</span> Say?</h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>Hear genuine stories from our satisfied customers about their exceptional reviews with us.</p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
      {reviews.map((review) => (
        <ReviewCard 
        key={review.customerName} 
        imgURL={review.imgURL}
        customerName={review.customerName} 
        rating={review.rating}
        feedback={review.feedback}
        />
      ))}</div>
    </section>
  )
}

export default CustomerReviews
