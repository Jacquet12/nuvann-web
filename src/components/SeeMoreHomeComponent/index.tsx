import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./styles.scss"
import CustomButton from '../CustomButton';

interface seeMoreArray  {
    id: number,
    title: string,
    appearence: string
  }
  
  interface SeeMoreProps {
    data: any;
  }

const SeeMoreHomeComponent: React.FC <SeeMoreProps>  = ({data}) => {
    const navigate = useNavigate();

  return (
    <section className="see_more_container">
      <h3 className='see_more_Title'>Ann Gade</h3>
      <div className="see_more_section">
        {data.slice(0,36).map((see: any) => (
            <div className="see_more_card" key={see.id} onClick={()=>{navigate(`/products/${see.id}`)}}>
                <div className="product_img">
                  <img src={see.images[0]} alt="" />
                  <img src={see.images[1]} className="show-hover" alt="" />
                </div>
                {/* <h2>
                {(promo.name && promo.name.length > 35) ? promo.name.substring(0, 35)+'...' : promo.name}
                </h2> */}
                <div className="bottom">
                <p className='daily_deal'>Likidasyon</p>
                <p>
                    <i>de <span className="lastprice"> {see.prices.before.formatted}</span></i>
                </p>
                <p className="currentPrice">{see.prices.current.formatted} <span>{see.prices.current.discountPercent} %</span></p>
                <p className='description'>
                {(see.name && see.name.length > 15) ? see.name.substring(0, 15)+'...' : see.name}
                </p>  
                </div>
            </div>
        ))}
      </div>
    <div className="see_more_button">
      <CustomButton variant="outlined" textColor='#000052' width={250}>See more</CustomButton>
    </div>
    </section>
  )
}

export default SeeMoreHomeComponent