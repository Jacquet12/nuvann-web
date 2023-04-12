import React, { useEffect, useState } from 'react'
import "./styles.scss"

import img1 from "../../assets/categories/1.svg"
import img2 from "../../assets/categories/2.svg"
import img3 from "../../assets/categories/3.svg"
import img4 from "../../assets/categories/4.svg"
import img5 from "../../assets/categories/5.svg"
import img6 from "../../assets/categories/6.svg"
import img7 from "../../assets/categories/7.svg"
import img8 from "../../assets/categories/8.svg"
import img9 from "../../assets/categories/9.svg"

interface MyObjectType {
    img: string;
    link: string;
  }

const HomeRandomCategory: React.FC = () => {
    const myArray: MyObjectType[] = [
        { img: `${img1}`, link: 'teste' },
        { img: `${img2}`, link: 'teste' },
        { img: `${img3}`, link: 'teste' },
        { img: `${img4}`, link: 'teste' },
        { img: `${img5}`, link: 'teste' },
        { img: `${img6}`, link: 'teste' },
        { img: `${img7}`, link: 'teste' },
        { img: `${img8}`, link: 'teste' },
        { img: `${img9}`, link: 'teste' },
      ];
      const [randomObjects, setRandomObjects] = useState<MyObjectType | any>(null);

      useEffect(() => {
        getRandomObject();
      }, [])

      const getRandomObject = () => {
        const randomIndices: number[] = [];
        while (randomIndices.length < 2) {
          const randomIndex = Math.floor(Math.random() * myArray.length);
          if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
          }
        }
        const deferredRandomObjects: any = randomIndices.map((index) => myArray[index]);
        setRandomObjects(deferredRandomObjects);
      };
  return (
    <> 
        <div  className="home_category_random">
          {randomObjects?.map((rand:MyObjectType, index:number) => (
            <img src={rand.img} alt="" key={rand.img + index}/>
          ))}
        </div>
    </>
  )
}

export default HomeRandomCategory