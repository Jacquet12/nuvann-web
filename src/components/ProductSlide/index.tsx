import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.scss'
import Title from "../Title";

interface SliderProps {
  slides: any;
  title: string;
}

const ProductSlide: React.FC<SliderProps> = ({ slides, title }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
          <div className="product-grid3" key={index}>
            <div className="product-image3">
                <a href="">
                  <img className="pic-1" src={product.img} alt={product.title}/>
                  <img className="pic-2" src={product.img1} alt={product.title}/>
                </a>
                {/* <span className="product-new-label">New</span> */}
            </div>
            <div className="product-content">
              <h3 className="title"> {product.title}</h3>
              <div className="price">
                  $ {product.price}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductSlide;
