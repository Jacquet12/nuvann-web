import React, { useEffect } from 'react'
import { PageDefault } from '../../components/PageDefault'
import ProductSkeleton from '../../components/CustomSkeleton';
import { usePromotions } from '../../context/promotionsContext'
import './styles.scss'
import CustomSkeleton from '../../components/CustomSkeleton';

export default function Promotion() {
  const { promotions, getPromotions, loading } = usePromotions();

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
                  {loading ?
                  <>
                 <CustomSkeleton variant="rectangular" width="100%" height={40} animation="wave" />
                 <CustomSkeleton variant="rectangular" width="100%" height={40} animation="wave" />
                 <CustomSkeleton variant="rectangular" width="100%" height={40} animation="wave" />
                  </>
                  :
                  <>
                  {promotions.map((promo: any) => (
                    <div className="card_1" key={promo.id} onClick={()=>{}}>
                      <div className="product_img">
                        <img src={promo.images[0]} alt="" />
                        <img src={promo.images[1]} className="show-hover" alt="" />
                      </div>
                      {/* <h2>
                        {(promo.name && promo.name.length > 35) ? promo.name.substring(0, 35)+'...' : promo.name}
                      </h2> */}
                      <div className="bottom">
                        <p className='daily_deal'>Likidasyon</p>
                        <p>
                          <i>de <span className="lastprice"> {promo.prices.before.formatted}</span></i>
                        </p>
                        <p className="currentPrice">{promo.prices.current.formatted} <span>{promo.prices.current.discountPercent} %</span></p>
                        <p className='description'>
                        {(promo.name && promo.name.length > 80) ? promo.name.substring(0, 80)+'...' : promo.name}
                        </p>  
                      </div>
                    </div>
                  ))}
                  </>
                  }
                </div>
              </div>


         </div>
    </PageDefault>
  )
}
