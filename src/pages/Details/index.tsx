import { Grid, ListItem } from '@mui/material'
import React, { useEffect } from 'react'
import  {AiOutlineShoppingCart}  from 'react-icons/ai'
import { useLocation, useParams } from 'react-router-dom'
import CustomButton from '../../components/CustomButton'
import { PageDefault } from '../../components/PageDefault'
import { useProduct } from '../../context/productContext'
import './styles.scss'

export default function Detail() {
  let { id } = useParams();
  const {productInfos, getProductInfos} =useProduct()

  useEffect(() => {
    getProductInfos(Number(id));
  }, [])

  return (
    <PageDefault>
      <section className="detail_container">
        <div className="paggind_infos_section">
          {/* Carousel Pagging ,To Do */}
          <div className="pagging_slide">1</div>

          <div className="product_infos">
            <div>
              <h3>{productInfos?.name}</h3>
              <div className="title_footer">
                <p>{productInfos?.availableAmount} <small>disponib</small></p>
                <p><span>|</span> teste </p>
                <p><span>|</span> teste </p>
              </div>

              <div className='prices_class'>
                <p>
                  <small>{productInfos?.prices?.before.formatted}</small>
                  {productInfos?.prices?.current.formatted}
                  <span>-{productInfos?.prices?.current.discountPercent} %</span>
                </p>
              </div>

            </div>

            <div className='detail_infos_footer'>
            <CustomButton startIcon={<AiOutlineShoppingCart/>} textColor='#000052' className='btn_cart' variant='outlined'>Ajoute nan panye</CustomButton>
            <CustomButton className='btn_purchase' backgroundColor="#00B127" textColor='#fff'>Achte</CustomButton>
            </div>
          </div>

        </div>
      </section>
    </PageDefault>
  )
}
