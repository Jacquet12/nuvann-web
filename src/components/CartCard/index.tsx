import React from 'react'
import { useCart } from '../../context/cartContext'
import {MdDelete} from 'react-icons/md'
import './styles.scss'
import InputQuantity from '../InputQuantity'

interface CartCardProps {
  items: any,

}
const CartCard: React.FC<CartCardProps> = ({items}) => {
  const {removeFromCart} = useCart();

  return (
    <>
    {
      items.map((item:any, index:number) => (
    <div key={item.id} className="cart_card_container">
      <div className="cart_card_content">
        <div className="cart_cart_content_img">
          <img src={item?.product.images[0]} alt="" />
        </div>
        <div className="cart_card_content_desc">
          <h3>
          {(item.product.name && item.product.name.length > 12) ? item.product.name.substring(0,12)+'...' : item.product.name}
          </h3>
          <div className="content_desc">
            <p>Vandè:</p>
            <span className="vendor_name">{item.product.seller.name}</span>
          </div>
          <div className="content_desc">
            <p>Mak:</p>
            <span></span>
          </div>
        
          <div className="content_desc">
            <p>Koulè:</p>
            <span>{item.properties?.length >=1 ? item?.properties[1]?.value : ''}</span>
          </div>

          <div className="content_desc">
            <p>Size:</p>
            <span>{item.properties?.length >0 ? item?.properties[0]?.value : ''}</span>
          </div>
        </div>
        <div className='content_icon_delete'>
          <MdDelete color='red' size={22}  onClick={ ()=> removeFromCart(Number(item.id))}/>
        </div>
      </div>
      <hr />
      <div className="cart_card_footer">
        <div className="cart_card_quantity">
          <InputQuantity value={item?.quantity} label="kantite" decrement={function (): void {
                throw new Error('Function not implemented.')
              } } increment={function (): void {
                throw new Error('Function not implemented.')
              } } />
        </div>

        <div className="cart_card_total">
          <p> {item?.product.prices.current.formatted}<span> {item?.product.prices.before.formatted}</span></p>
        </div>
      </div>
    </div>

      ))
    }
      </>
  )
}
export default CartCard;