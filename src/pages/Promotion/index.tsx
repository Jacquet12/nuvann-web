import React, { useEffect } from 'react'
import { PageDefault } from '../../components/PageDefault'
import { usePromotions } from '../../context/promotionsContext'
import './styles.scss'

export default function Promotion() {
  const { promotions, getPromotions } = usePromotions();

  useEffect(() => {
    getPromotions();
  }, [])
  return (
    <PageDefault>
        <div className="promotions">
            <div className="left_side">
              <div className = "first_child">
                  <h2>Pwomosyon</h2>  

                  <h1>Filtre</h1>
                  <hr />

                  <div className="tout">
                    <p>Tout</p>
                  </div>
                  <div className="mwens_che"> 
                    <p>Mwens chè</p>
                  </div>
                  <div className="plis_vann">
                    <p>Plis vann</p>
                  </div>

                  <h3>Kategori</h3>
                  <hr />

                  <ul>
                    <li>Tout</li>
                    <li>Alimantè</li>
                    <li>Enfòmatik</li>
                    <li>Vètman</li>
                    <li>Kosmetik</li>
                    <li>Netwayaj</li>
                    <li>Espo</li> 
                    <li>Edikasyon</li>
                    <li>Elektwomenaje</li> 
                    <li>Mèb</li> 
                    <li>Lòt</li>
                  </ul>
              </div>

            </div>
              <div className="right_side__promotion">
                <div className="sub_right">
                  {promotions.map((promo: any) => (
                    <div className="card_1" key={promo.id} onClick={()=>{}}>
                      <div className="product_img">
                        <img src={promo.images[0]} alt="" />
                        <img src={promo.images[1]} className="show-hover" alt="" />
                      </div>
                      <h2>{promo.name}</h2>
                      <div className="bottom">
                        <i>de <span className="lastprice"> {promo.prices.before.formatted}</span></i>
                        <p className="currentPrice">{promo.prices.current.formatted} <span>{promo.prices.current.discountPercent} %</span></p>
                        <p className='description'>
                        {(promo.description && promo.description.length > 105) ? promo.description.substring(0, 105)+'...' : promo.description}
                        </p>  
                      </div>
                    </div>
                  ))}
                </div>
              </div>


         </div>
    </PageDefault>
  )
}
