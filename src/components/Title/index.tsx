import React from "react";

import './styles.scss'

interface TitleProps {
    title: string;
    className?: string;
}


const Title: React.FC<TitleProps> =({title, className}) =>{
    return (
        
        <div className="section-title">
            <h4 className={className}>{title}</h4>
        <div></div>
        </div>
    )
}

export default Title;
