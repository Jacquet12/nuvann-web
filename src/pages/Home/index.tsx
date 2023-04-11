import React, {useEffect} from 'react'
import FullWidthCarousel from '../../components/fullWidthCarousel'
import { PageDefault } from '../../components/PageDefault'
import ProductSlide from '../../components/ProductSlide';
import { useProduct } from '../../context/productContext';
import './styles.scss'
import slide1 from '../../assets/fullSlideHome.svg'
import slide2 from '../../assets/slide2.svg'
import CustomSlider from '../../components/customSlider';
import Jumbotron from '../../components/jumbotron';

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
  

  const jumbArray = [
    {
      title: "Espò",
      appearence: "https://loremflickr.com/800/600/Garden_centers?random=650"
    },
    {
      title: "Enfòmatik",
      appearence: "https://loremflickr.com/800/600/Garden_centers?random=650"
    },
    {
      title: "Alimantè",
      appearence: "https://loremflickr.com/800/600/Garden_centers?random=650"
    },
    {
      title: "Maskilen",
      appearence: "https://loremflickr.com/800/600/Garden_centers?random=650"
    },
    {
      title: "Feminen",
      appearence: "https://loremflickr.com/800/600/Garden_centers?random=650"
    },
    {
      title: "Feminen",
      appearence: "https://loremflickr.com/800/600/Garden_centers?random=650"
    },
    {
      title: "Feminen",
      appearence: "https://loremflickr.com/800/600/Garden_centers?random=650"
    }
  ]
  return (
      <PageDefault>
        <FullWidthCarousel images={images} autoSlideInterval={5000}/>
        <Jumbotron data={jumbArray}/>
        <div className='home_product_container'>
          <div className="home_section_card">
            <ProductSlide itemToShow={4}  slides={products} title="Nouvo Produi"/>
          </div>

          <div className="home_section_card">
            <ProductSlide itemToShow={4}  slides={products} title="Likidasyon pou Mwa an"/>
          </div>
        </div>
      </PageDefault>
  )
}
