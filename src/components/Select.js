import React from 'react';

export default function Select({selected, data, onChange}) {
    return (
        <div className="select">
        {
            data.map((item, index) => 
                <div className={index === selected ? "option selected" : "option"} onClick={() => onChange(index)}>{item.city}</div>
            )
        }
        </div>
    )
}