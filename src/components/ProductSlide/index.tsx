import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.scss'
import Title from "../Title";
import { Link, useNavigate } from "react-router-dom";

interface SliderProps {
  slides: any;
  title: string;
  itemToShow: number;
  isnew?: boolean,
  havePromo?:boolean
}

const ProductSlide: React.FC<SliderProps> = ({ slides, title, itemToShow, isnew = false, havePromo = false }) => {
  const navigate = useNavigate();
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: itemToShow,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <section className="custom_slide_section">
      <Title title={title} />
      <Slider {...settings}>
        {slides?.slice(0,15).map((product: any, index: any) => (
        <div className="card_home" key={product.id} onClick={()=>{navigate(`/products/${product.id}`)}}>
          <div className="product_img">
            <img src={product.images[0]} alt="" />
            <img src={product.images[1]} className="show-hover" alt="" />
          </div>
          {isnew && (
            <div className="product-new-label">Nouvote</div>
          )}
          <div className="bottom">
          <h2>
            {(product.name && product.name.length > 15) ? product.name.substring(0, 15)+'...' : product.name}
          </h2>
          {havePromo && (
            <p className='daily_deal'>promosyon</p>
          )}
            <p>
              <i>de <span className="lastprice"> {product.prices.before.formatted}</span></i>
            </p>
            <p className="currentPrice">{product.prices.current.formatted}
            {
              product.prices.current.discountPercent &&
              <span>{product.prices.current.discountPercent} %</span>
            }
            </p>
            {/* <p className='description'>
              {(product.name && product.name.length > 80) ? product.name.substring(0, 80)+'...' : product.name}
            </p>   */}
          </div>
        </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductSlide;
