import React, {useEffect} from 'react'
import FullWidthCarousel from '../../components/fullWidthCarousel'
import { PageDefault } from '../../components/PageDefault'
import ProductSlide from '../../components/ProductSlide';
import { useProduct } from '../../context/productContext';
import './styles.scss'

export default function Home(){
  const {products, getProducts} = useProduct();
  const images = [
    "https://via.placeholder.com/1250x250/000052/ffffff?text=Slide+1",
    "https://via.placeholder.com/1250x250/00ff00/ffffff?text=Slide+2",
    "https://via.placeholder.com/1250x250/0000ff/ffffff?text=Slide+3",
    "https://via.placeholder.com/1250x250/000052/ffffff?text=Slide+4",
    "https://via.placeholder.com/1250x250/0000ff/ffffff?text=Slide+5",
  ];
  useEffect(() => {
    getProducts();
  }, [])
  
  return (
      <PageDefault>
        <FullWidthCarousel images={images} autoSlideInterval={5000}/>
        <div className='home_product_container'>
          <ProductSlide itemToShow={6}  slides={products} title="Nouvo Produi"/>
          <ProductSlide  itemToShow={6} slides={products} title="Enfòmatik"/>
          <ProductSlide itemToShow={6}  slides={products} title="Kosmetik"/>
          <ProductSlide itemToShow={6}  slides={products} title="Pou Bouzen"/>
          <ProductSlide itemToShow={6}  slides={products} title="Pou Vagabon"/>
        </div>
      </PageDefault>
  )
}
