import React from "react";

import './styles.scss'

interface TitleProps {
    countries: any;
}


const AvailableCountries: React.FC<TitleProps> =({countries}) =>{
    return (
        <div className="available_content">
            <p>Peyi Disponib:</p>
                {
                countries?.map((ava: string, index:number)=> (
                    <span key={index}>{ava}</span>
                ))
            }
        </div>
    )
}

export default AvailableCountries;
