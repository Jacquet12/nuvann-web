import React, { useState } from 'react'
import './styles.scss'


interface InputQuantityProps {
    label: string;
    type?: string;
    name?: string;
    value?: number;
    decrement?: () => void;
    increment?: () => void;
    onChange?: (value: number) => void;

}

const InputQuantity: React.FC<InputQuantityProps> =({
    label,
    type,
    name,
    decrement,
    value,
    onChange,
    increment
}) =>{

    const [query, setQuery] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
      };
  return (
    <>
        <span>{label}</span>
        <form className="count-inlineflex">
            <div className="qty-min" onClick={decrement}>-</div>
                <input type={type} name={name} value={query} onChange={handleInputChange} className="qty" min="1"/>
            <div className="qty-max" onClick={increment}>+</div>
        </form>
    </>
  )
}

export default InputQuantity;
