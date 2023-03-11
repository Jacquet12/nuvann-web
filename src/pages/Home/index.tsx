import React from 'react'
import FullWidthCarousel from '../../components/fullWidthCarousel'
import { PageDefault } from '../../components/PageDefault'
import ProductSlide from '../../components/ProductSlide';
import './styles.scss'

export default function Home(){
  const images = [
    "https://via.placeholder.com/1250x400/000052/ffffff?text=Slide+1",
    "https://via.placeholder.com/1250x400/00ff00/ffffff?text=Slide+2",
    "https://via.placeholder.com/1250x400/0000ff/ffffff?text=Slide+3",
    "https://via.placeholder.com/1250x400/000052/ffffff?text=Slide+4",
    "https://via.placeholder.com/1250x400/0000ff/ffffff?text=Slide+5",
  ];

  const HomeProduct: any = [
    {
      title: "Mango",
      price: 15.00,
      img:"https://via.placeholder.com/400x400/000052/ffffff?text=Slide+1",
      img1: "https://via.placeholder.com/1250x400/00ff00/ffffff?text=Slide+2"
    },
    {
      title: "Prestige",
      price: 16.00,
      img: "https://via.placeholder.com/400x400/000052/ffffff?text=Slide+1",
      img1: "https://via.placeholder.com/400x400/00ff00/ffffff?text=Slide+2"
    }, {
      title: "Dress",
      price: 17.00,
      img: "https://via.placeholder.com/400x400/000052/ffffff?text=Slide+1",
      img1: "https://via.placeholder.com/400x400/00ff00/ffffff?text=Slide+2"
    }, {
      title: "Short",
      price: 18.00,
      img: "https://via.placeholder.com/400x400/000052/ffffff?text=Slide+1",
      img1: "https://via.placeholder.com/400x400/00ff00/ffffff?text=Slide+2"
    }, {
      title: "Teste",
      price: 19.00,
      img: "https://via.placeholder.com/400x400/000052/ffffff?text=Slide+1",
      img1: "https://via.placeholder.com/400x400/00ff00/ffffff?text=Slide+2"
    }, {
      title: "TESTE 2",
      price: 20.00,
      img: "https://via.placeholder.com/400x400/000052/ffffff?text=Slide+1",
      img1: "https://via.placeholder.com/400x400/00ff00/ffffff?text=Slide+2"
    }, {
      title: "Mango2",
      price: 21.00,
      img: "https://via.placeholder.com/400x400/000052/ffffff?text=Slide+1",
      img1: "https://via.placeholder.com/400x400/00ff00/ffffff?text=Slide+2"
    },
  ]
  return (
      <PageDefault>
        <FullWidthCarousel images={images} autoSlideInterval={5000}/>
        <div className='home_product_container'>
          <ProductSlide  slides={HomeProduct} title="Nouvo Produi"/>
          <ProductSlide  slides={HomeProduct} title="Enòmatik"/>
          <ProductSlide  slides={HomeProduct} title="Kosmetik"/>
        </div>
      </PageDefault>
  )
}
