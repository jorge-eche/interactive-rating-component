import React from 'react'
import ThankYouImg from '../images/illustration-thank-you.svg'

const Thankyou = ({rate}) => {
  return (
    <div className='container column'>
        <div className='image-thx'>
            <img src={ThankYouImg} alt="Thank You Image" />
        </div>

        <div className='selected'>
            <p>{`You selected ${rate} out of 5`}</p>
        </div>

        <h1>Thank you!</h1>

        <p className='text-thx'>We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
    </div>
  )
}

export default Thankyou