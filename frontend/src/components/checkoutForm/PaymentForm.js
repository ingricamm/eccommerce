import React from 'react'
import Review from './Review'

const PaymentForm = ({backStep,nextStep}) => {
  return (
    <>
      <Review/>
       <div className='stylebutton'>
          <button className='Prev' >Back </button>
          <button className='Next' type='submit'>Next</button>
        </div>
    </>
  )
}

export default PaymentForm

