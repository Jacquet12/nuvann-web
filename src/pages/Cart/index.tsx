import { Breadcrumbs, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import CartCard from '../../components/CartCard'
import CartResume from '../../components/CartResume'
import { PageDefault } from '../../components/PageDefault'
import { useCart } from '../../context/cartContext'
import './styles.scss'

export const Cart = () => {
  const navigate = useNavigate();
  const {cartCount, cart, total, shipmentSubtotal,productSubtotal} = useCart();

  const handleContinue = () => {
    navigate('/')
  }
  return (
    <PageDefault>
      <div className="cart_container">

          <div className="cart_container_card">
            <div className="card_title">
              <h3>Nuvann Panye</h3>
              <div>
              {/* <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="/">
                  MUI
                </Link>
                <Link
                  color="inherit"
                  to="/material-ui/getting-started/installation/"
                >
                  Core
                </Link>
                <Typography color="text.primary">Breadcrumbs</Typography>
              </Breadcrumbs> */}
              </div>
            </div>

            <CartCard items={cart}/>
          </div>
          
            <div className="">
              <CartResume
                OnclickContinue={handleContinue}
               count={cartCount}
               cartTotal={total}
               shipTotal={shipmentSubtotal?.formatted} productSubtotal={productSubtotal?.formatted}/>
            </div>
      </div>
    </PageDefault>
  )
}
