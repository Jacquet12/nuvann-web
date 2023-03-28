import React from "react";

import './fullDescription.scss'

interface TitleProps {
    description?: any;
    pro_country?: any
    pro_seller?:string;
    pro_category?: any
    pro_subCategory?:any;
    pro_tags?: any;
}


const FullDescription: React.FC<TitleProps> =({
    description,
     pro_seller,
    pro_category,
     pro_subCategory,
     pro_tags
    }) =>{
        console.log(pro_tags)
    return (
        <div className="full_desc_section">
            <div className="__title">
                <h3 className="full_desc_title">Detay spesifik</h3>
            </div>
            <div className="specific_infos">
                <div className="__subtitle">
                    <p> Origin :</p>
                </div>
                <div className="__desc">
                    <p>{pro_seller}</p>
                </div>
            </div>
            <div className="specific_infos">
                <div className="__subtitle">
                    <p> kategori:</p>
                </div>
                <div className="__desc">
                    <p className="tag">{pro_category} | {pro_subCategory}</p>
                </div>
            </div>

            <div className="specific_infos">
                <div className="__subtitle">
               
                    <p> Tag :</p>
                </div>
                <div className="__desc">
                    {
                        pro_tags?.map((tag: string, index:number) =>(
                            <p className="tag"> #{tag} teste </p>
                        ))
                    }
                </div>
            </div>




            <br /><br />
            <div className="__title">
                <h3 className="full_desc_title">Deskripsyon Pwodui an</h3>
            </div>

            <div className="specific_infos">
                <div className="__subtitle">
                    <p> Dekripsyon :</p>
                </div>
                <div className="__desc">
                    <p>{description}</p>
                </div>
            </div>
            
        </div>
    )
}

export default FullDescription;
