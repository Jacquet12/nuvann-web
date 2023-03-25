import React, {useEffect} from 'react'
import FullWidthCarousel from '../../components/fullWidthCarousel'
import { PageDefault } from '../../components/PageDefault'
import ProductSlide from '../../components/ProductSlide';
import { useProduct } from '../../context/productContext';
import './styles.scss'
import slide1 from '../../assets/fullSlideHome.svg'
import slide2 from '../../assets/slide2.svg'

export default function Home(){
  const {products, getProducts} = useProduct();
  const images = [
    slide1,
    slide2,
    slide1,
    slide2,
    slide1,
    slide2,
  ];
  useEffect(() => {
    getProducts();
  }, [])
  
  return (
      <PageDefault>
        <FullWidthCarousel images={images} autoSlideInterval={5000}/>
        <div className='home_product_container'>
          <ProductSlide itemToShow={5}  slides={products} title="Nouvo Produi"/>
          <ProductSlide  itemToShow={4} slides={products} title="Enfòmatik"/>
          <ProductSlide itemToShow={4}  slides={products} title="Kosmetik"/>
          <ProductSlide itemToShow={4}  slides={products} title="Pou Bouzen"/>
          <ProductSlide itemToShow={3}  slides={products} title="Pou Vagabon"/>
        </div>
      </PageDefault>
  )
}
