import React from 'react'
import './styles.scss'

interface CartCardProps {

}
const CartCard: React.FC<CartCardProps> = ({}) => {
  return (
    <div className="cart_card_container">
        Welcome to the Cart
    </div>
  )
}
export default CartCard;