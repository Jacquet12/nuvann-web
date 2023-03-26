import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.scss'
import Title from "../Title";
import { Link } from "react-router-dom";

interface SliderProps {
  slides: any;
  title: string;
  itemToShow: number;
}

const ProductSlide: React.FC<SliderProps> = ({ slides, title, itemToShow }) => {
  const settings = {
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
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 0
        }
      },
      {
        breakpoint: 570,
        settings: {
          infinite:true,
          speed: 250,
          slidesToShow: 2,
          initialSlide: 0,
          dots: true,
          arrows: false
        }
      }
    ]
  };


  return (
    <section className="new_product_section">
      <Title title={title} />
      <Slider {...settings}>
        {slides.map((product: any, index: any) => (
          <div className="product-grid3" key={product.id}>
            <div className="product-image3">
                <Link to={`/products/${product.id}`}>
                  {
                    product?.images?.slice(0, 2).map((img: string, index:number) =>(
                      <img key={index} className={`pic-${index + 1}`} src={img} alt={product.name}/>
                    ))
                  }
                </Link>
                {/* <span className="product-new-label">New</span> */}
            </div>
            <div className="product-content">
              <h3 className="title"> {(product.name && product.name.length > 25) ? product.name.substring(0,25)+'...' : product.name}</h3>
              <span className="lastprice">de {product.prices.before.formatted}</span>
              <h3 className="price">{product.prices.current.formatted} <span>{product.prices.current.discountPercent} %</span></h3>
              <h3 className="description"> {(product.description && product.description.length > 50) ? product.description.substring(0,50)+'...' : product.description}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductSlide;
