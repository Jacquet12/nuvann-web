import { Grid, ListItem } from '@mui/material'
import { color } from '@mui/system'
import React, { useEffect, useState } from 'react'
import  {AiOutlineShoppingCart}  from 'react-icons/ai'
import {useParams } from 'react-router-dom'
import ColorComponent from '../../components/colorComponent'
import CustomButton from '../../components/CustomButton'
import CustomSlider from '../../components/customSlider'
import InputQuantity from '../../components/InputQuantity'
import { PageDefault } from '../../components/PageDefault'
import PaggingSlides from '../../components/PaggingSlides'
import ShipmentInfos from '../../components/ShipmentInfos'
import SizeComponent from '../../components/SizeComponent'
import { useProduct } from '../../context/productContext'
import './styles.scss'

export default function Detail() {
  let { id } = useParams();
  const {productInfos, getProductInfos, products, getProducts} =useProduct();

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedShippingInfo, setSelectedShippingInfo] = useState({});

  const [qty, setQty] = useState(1);
  
  const handleSelectShippingInfo = (selectedShippingInfo: any) => {
    setSelectedShippingInfo(selectedShippingInfo);
  };

  const handleSelectSize = (size: string) => {
    setSelectedSize((size).toString());
  };

  const handleSelectColor = (color: string) => {
    setSelectedColor(color);
  };

  const handleChangeQuantity = (qty: number) => {
    setQty(Number(qty));
  }

  const handleIncrement = () =>{
    setQty(qty+1);
  }

  const handleDecrement = ()=> {
    setQty(qty-1);
  }

  useEffect(() => {
    getProducts();
    getProductInfos(Number(id));
    window.scrollTo(0,0)
  }, [id])

  return (
    <PageDefault>
      <>
        {/* <div>
          teste
        </div> */}
      <section className="detail_container">
        <div className="paggind_infos_section">
          {/* Carousel Pagging ,To Do */}
          <div className="pagging_slide">
            <PaggingSlides images={productInfos?.images}/>
          </div>

          <div className="product_infos">
            <div>
              <h3>{productInfos?.name}</h3>
              <div className="title_footer">
                <p>{productInfos?.availableAmount} <small>disponib</small></p>
                <p><span>Vandè:</span> <small>{productInfos?.seller.name}</small>  </p>
                <p><span>Pays:</span> <small>{productInfos?.seller.country.name}</small></p>
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

              <div className="shipment_infos">
              <ShipmentInfos shippingInfos={productInfos?.shipments} onInfoSelect={handleSelectShippingInfo} />
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

      <section className="detail_sameCategory_card">
        <CustomSlider title='Wap Renmen' slides={productInfos?.relatedProducts} itemToShow={5}/>
      </section >
      </>

    </PageDefault>
  )
}
