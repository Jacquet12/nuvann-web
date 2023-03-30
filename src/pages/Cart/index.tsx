import { Breadcrumbs, Typography } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import CartCard from '../../components/CartCard'
import CartResume from '../../components/CartResume'
import { PageDefault } from '../../components/PageDefault'
import { useCart } from '../../context/cartContext'
import './styles.scss'

export const Cart = () => {
  const location =useLocation();
  const {cartCount, cart} = useCart();
  console.log(cart)

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

            <CartCard />
          </div>
          
            <div className="">
              <CartResume count={cartCount}/>
            </div>
      </div>
    </PageDefault>
  )
}
