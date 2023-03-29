import React, { useEffect, useState } from 'react'
import  {AiOutlineShoppingCart}  from 'react-icons/ai'
import {useLocation, useNavigate, useParams } from 'react-router-dom'
import AvailableCountries from '../../components/AvailableCountries'
import ColorComponent from '../../components/colorComponent'
import CustomButton from '../../components/CustomButton'
import CustomSlider from '../../components/customSlider'
import InputQuantity from '../../components/InputQuantity'
import ModalSimple from '../../components/ModalSimple'
import { PageDefault } from '../../components/PageDefault'
import PaggingSlides from '../../components/PaggingSlides'
import ShipmentInfos from '../../components/ShipmentInfos'
import SizeComponent from '../../components/SizeComponent'
import { useAuthContext } from '../../context/authContext'
import { useCart , addProductProps} from '../../context/cartContext'
import { useProduct } from '../../context/productContext'
import FullDescription from './FullDescription'
import './styles.scss'

export default function Detail() {
  const navigate = useNavigate()
  const location = useLocation();
  let { id } = useParams();
  const {productInfos, getProductInfos} =useProduct();
  const {addToCart, loading} =useCart();
  const {user, token} = useAuthContext();

  const [selectedSize, setSelectedSize] = useState({
    key:"",
    value : ""
  });
  const [selectedColor, setSelectedColor] = useState({
    key: "",
    value: ""
  });
  const [selectedShippingInfo, setSelectedShippingInfo] = useState({id:0});
  const [openSimpleModal, setOpenSimpleModal] = useState<boolean>(false);

  const [qty, setQty] = useState(1);
  
  const handleSelectShippingInfo = (selectedShippingInfo: any) => {
    setSelectedShippingInfo(selectedShippingInfo);
  };

 
  const handleSelectSize = (size: any) => {
    setSelectedSize({
      key: "size",
      value: (size).toString()
    });
  };

  const handleSelectColor = (color:any) => {
    setSelectedColor({
      key: "color",
      value:color
    });
  };
  
  const handleChangeQuantity = (qty: number) => {
    
    setQty(Number(qty));
    // console.log(productInfos?.properties.color.length)
    // console.log(productInfos?.properties.size.length)
  }

  const handleIncrement = () =>{
    setQty(qty+1);
  }

  const handleDecrement = ()=> {
    if(qty>1) {
      setQty(qty-1);
    }
  }

  useEffect( () => {
    getProductInfos(Number(id));
    window.scrollTo(0,0)
  }, [id])

  const handleAddProductToCart = async() => {
    if(!!user && !!token) {
      const data: addProductProps = {
        id:  Number(id),
        quantity: qty,
        selectedSize: selectedSize,
        selectedColor: selectedColor,
        selectedShippingInfo:Number(selectedShippingInfo?.id)
      }
      const response: any = await addToCart(data);
      if(response !== "error") {
        setOpenSimpleModal(true)
      }
    } else {
      navigate({pathname: "/login"}, {state: location.pathname});
    }
  }



  return (
    <PageDefault>
      <ModalSimple
      size={400}
        textBtnCancel='Non'
        widthBtnCancel='60px'
        textBtnConfirm='Wi'
        widthBtnConfirm='60px'
        description='Ou vle ale nan panye an ?'
        open ={openSimpleModal}
        setOpen= {setOpenSimpleModal}
        onCLickBtnCancel= {() => {
          setOpenSimpleModal(false)
        }}
        onClickBtnConfirm= {() =>{
          navigate("/cart")
        }}
      />
      <section className="__container">
      <div className="detail_container">
        <div className="paggind_infos_section">
          {/* Carousel Pagging ,To Do */}
          <div className="pagging_slide">
            <PaggingSlides images={productInfos?.images}/>
          </div>

          <div className="product_infos">
            <div>
              <h3>{productInfos?.name}</h3>
              <div className="title_footer">
                <p><span>Vandè:</span> <small>{productInfos?.seller.name}</small>  </p>
                <p><span>Pays:</span> <small>{productInfos?.seller.country.name}</small></p>
                <p>Vant: <small>{productInfos?.soldAmount} unite</small></p>
              </div>

              <div className='prices_class'>
                <p>
                  <small>{productInfos?.prices?.before.formatted}</small>
                  {productInfos?.prices?.current.formatted}
                  {
                    productInfos?.prices?.current.discountPercent && 
                    <span>-{productInfos?.prices?.current.discountPercent} %</span>
                  }
                </p>
              </div>

            </div>
            <section style={{
                // backgroundColor: selectedColor.value ? '#fff5f5' : '',
                // box: 'shake',
                marginTop:'8px'
              }}>
              {/* <div className="colores_container shake"> */}
              <div className="colores_container">
                <ColorComponent colors={productInfos?.properties.color}  selectedColor={selectedColor.value} onSelectColor={handleSelectColor} />
              </div>
              <div className="sizes_container">
                  <SizeComponent sizes={productInfos?.properties.size} selectedSize={selectedSize.value} onSelectSize={handleSelectSize} />
              </div>

              <div className="shipment_infos">
              <ShipmentInfos shippingInfos={productInfos?.shipments} onInfoSelect={handleSelectShippingInfo} />
              </div>

            </section>
              <div className='avalaible_countries'>
                <AvailableCountries countries={productInfos?.availableCountries} />
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
            <CustomButton
              isLoading={loading}
              startIcon={<AiOutlineShoppingCart/>}
              textColor='#000052' className='btn_cart'
              variant='outlined'
              onClick={handleAddProductToCart}
              >
                Ajoute nan panye
              </CustomButton>
            <CustomButton className='btn_purchase' backgroundColor="#00B127" textColor='#fff'>Achte</CustomButton>
            </div>
          </div>

        </div>
      </div>

      <div className="detail_sameCategory_card">
        <CustomSlider title='Wap Renmen' slides={productInfos?.relatedProducts} itemToShow={5}/>
      </div >

      <div className="detail_full_description_card">
        <FullDescription
          description={productInfos?.description}
          pro_country={productInfos?.availableCountries}
          pro_seller={productInfos?.seller.country.name}
          pro_category={productInfos?.category.name}
          pro_subCategory={productInfos?.subcategory.name}
          pro_tags={productInfos?.subcategory.tags}
        />
      </div >
      </section>

    </PageDefault>
  )
}
