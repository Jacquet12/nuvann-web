import React from 'react'
import CustomButton from '../CustomButton';
import Title from '../Title';
import './styles.scss'

interface CartResumeProps {
count: number;
cartTotal?: number
}

const CartResume: React.FC<CartResumeProps> =({count, cartTotal = 0}) =>{

  return (
    <div className="card_resume">
      <Title title='Rezime' className='resume_title'/>

      <div className="content">
        <div className="resume_separated_info">
          <p>Total Pwodui ({count})</p>
          <h5>1400</h5>
        </div>
        <hr />

        <div className="resume_separated_info">
          <p>Livrezon</p>
          <h5>1400</h5>
        </div>
        <hr />

        <div className="resume_separated_info">
          <p>Total </p>
          <h5>{cartTotal}</h5>
        </div>
        <hr />

      </div>


      <div className="resume_buttons">
        <CustomButton backgroundColor ='#00C02A' textColor="#fff">
          Kontinye
        </CustomButton>
        <CustomButton backgroundColor ='#001A5C' textColor="#fff">
          Kontinye Achte
        </CustomButton>
      </div>
    </div>
  )
}

export default CartResume;
