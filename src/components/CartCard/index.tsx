import React from 'react'
import { useCart } from '../../context/cartContext'
import {MdDelete} from 'react-icons/md'
import './styles.scss'

interface CartCardProps {
  items: any,

}
const CartCard: React.FC<CartCardProps> = ({items}) => {
  const {removeFromCart} = useCart();

  return (
    <>
    {
      items.map((item:any, index:number) => (
    <div className="cart_card_container">
        <img src={item?.product.images[0]} alt="" />
        <div>img</div>
        <div>
        {/* onClick={removeFromCart(Number(item.id))} */}
          <MdDelete color='red' size={22} />
        </div>
    </div>

      ))
    }
      </>
  )
}
export default CartCard;