import React from 'react'
import { Link } from 'react-router-dom';
import Title from '../Title'
import './styles.scss'

interface CartToalProps {
    productCount: number;
    priceTotal: number;
    finalPrice?: number;
    ErrorMessage?: string;
    handlePurchase?: () => void;
}

const CartTotal: React.FC<CartToalProps> =({
    productCount,
    priceTotal,
    finalPrice,
    ErrorMessage,
    handlePurchase
}) =>{
  return (
    <div className="left-card sticky-top pt-2"> 
        <Title title="Rezime"/>
        <div className="content">
            <div className="card__price-total-title">
                <p>Total (<span> {productCount} Pwodui</span>)</p>
                <p>{priceTotal} $</p>
            </div>
            <hr/>
            <div className="card__price-total-title">
                <p>Livrezon</p>
                <p>00 $</p>
            </div>
            <hr/>
            <div className="card__price-total-title">
                <p>Total</p>
                <p>$ {finalPrice}</p>
            </div>
            <Link to="/#" className="btn btn-block btn-primary"> Kontinye Achte</Link>
            
            {!ErrorMessage ?
            <>
                <button onClick={handlePurchase} className="btn btn-block btn-success"> Kontinye</button>
            </>
            :
            <>
                <button disabled onClick={handlePurchase} className="btn btn-block btn-success"> Kontinye</button>
            </>
            
            }

        </div>
    </div>
  )
}

export default CartTotal;
