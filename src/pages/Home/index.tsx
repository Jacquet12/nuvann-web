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
import HomeRandomCategory from '../../components/HomeRandomCategory';
import SeeMoreHomeComponent from '../../components/SeeMoreHomeComponent';

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
      appearence: "https://loremflickr.com/800/600/Computer_stores?random=155"
    },
    {
      title: "Alimantè",
      appearence: "https://loremflickr.com/800/600/Liquor_stores?random=125"
    },
    {
      title: "Maskilen",
      appearence: "https://loremflickr.com/800/600/Liquor_stores?random=125"
    },
    {
      title: "Feminen",
      appearence: "https://loremflickr.com/800/600/Men's_clothing_stores?random=780"
    },
    {
      title: "Feminen",
      appearence: "https://loremflickr.com/800/600/Farmers_markets?random=475"
    },
    {
      title: "Feminen",
      appearence: "https://loremflickr.com/800/600/Farmers_markets?random=486"
    }
  ]
  return (
      <PageDefault>
        <FullWidthCarousel images={images} autoSlideInterval={5000}/>
        <Jumbotron data={jumbArray}/>
        <div className='home_product_container'>
          <div className="home_section_card">
            <ProductSlide itemToShow={4}  slides={products} title="Nouvo Produi" isnew={true}/>
          </div>


          <div className="home_section_card">
            <ProductSlide itemToShow={4}  slides={products} title="Likidasyon pou Mwa an" havePromo={true}/>
          </div>
            <HomeRandomCategory/>
            <SeeMoreHomeComponent data={products} />
        </div>

      </PageDefault>
  )
}
