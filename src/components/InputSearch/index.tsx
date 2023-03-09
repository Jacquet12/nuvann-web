import React from 'react'


interface InputSearchProps {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    placeHolder?: string;
    className?: string;
    name?: string;
    disabled?:boolean;
}
 
export const InputSearch: React.FC<InputSearchProps> =({
    placeHolder, onChange, className, name, disabled
}) => {
  return (
    <div className="search_input_container">
        <span>Icon</span>
        <input
            type="text"
            name={name}
            placeholder = {placeHolder}
            onChange = {onChange}
            className = {className}
            disabled = {disabled}

        />
    </div>
  )
}
