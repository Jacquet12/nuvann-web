import { Breadcrumbs, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import CartCard from '../../components/CartCard'
import CartResume from '../../components/CartResume'
import { PageDefault } from '../../components/PageDefault'
import { useCart } from '../../context/cartContext'
import './styles.scss'
import CustomSkeleton from '../../components/CustomSkeleton'
import CustomSlider from '../../components/customSlider'
import { useProduct } from '../../context/productContext'

export const Cart = () => {
  const navigate = useNavigate();
  const {cartCount, cart, total, shipmentSubtotal,productSubtotal, loading} = useCart();
  const {productInfos, getProductInfos} =useProduct();

  const handleContinue = () => {
    navigate('/')
  }
  return (
    <PageDefault>
      <div className="cart_container">

          <div className="cart_container_card">
            <div className="card_title">
              <h3>Nuvann Panye</h3>
            </div>

            {
              loading ? (
                <CustomSkeleton />
              ) : (
                <>
                <CartCard items={cart}/>
                {/* <div className="detail_sameCategory_card">
                  <CustomSlider title='Wap Renmen' slides={productInfos?.relatedProducts} itemToShow={4}/>
                </div > */}
                </>
              )
            }

          </div>
          
            <div className="card_resume_fixed">
              <CartResume
                OnclickContinue={handleContinue}
               count={cartCount}
               cartTotal={total}
               shipTotal={shipmentSubtotal?.formatted} productSubtotal={productSubtotal?.formatted}
               />
            </div>
      </div>
    </PageDefault>
  )
}
