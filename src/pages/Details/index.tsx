import { Grid, ListItem } from '@mui/material'
import { color } from '@mui/system'
import React, { useEffect, useState } from 'react'
import  {AiOutlineShoppingCart}  from 'react-icons/ai'
import {useParams } from 'react-router-dom'
import ColorComponent from '../../components/colorComponent'
import CustomButton from '../../components/CustomButton'
import InputQuantity from '../../components/InputQuantity'
import { PageDefault } from '../../components/PageDefault'
import SizeComponent from '../../components/SizeComponent'
import { useProduct } from '../../context/productContext'
import './styles.scss'

export default function Detail() {
  let { id } = useParams();
  const {productInfos, getProductInfos} =useProduct()

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [qty, setQty] = useState(1);

  const handleSelectSize = (size: string) => {
    setSelectedSize((size).toString());
  };

  const handleSelectColor = (color: string) => {
    setSelectedColor(color);
  };

  const handleChangeQuantity = (qty: number) => {
    setQty(Number(qty))
  }

  const handleIncrement = () =>{
    setQty(qty+1)
  }

  const handleDecrement = ()=> {
    setQty(qty-1)
  }

  console.log(qty)


  useEffect(() => {
    getProductInfos(Number(id));
    window.scrollTo(0,0)
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
              <div className="colores_container">
                <ColorComponent colors={productInfos?.properties.color}  selectedColor={selectedColor} onSelectColor={handleSelectColor} />
              </div>
              <div className="sizes_container">
                  <SizeComponent sizes={productInfos?.properties.size} selectedSize={selectedSize} onSelectSize={handleSelectSize} />
              </div>

              <div className="input_quantity_container">
                <InputQuantity
                total={productInfos?.availableAmount}
                  label='Kantite'
                  onChange={handleChangeQuantity} 
                  value={qty}
                  increment={handleIncrement}
                  decrement={handleDecrement}
                />
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
