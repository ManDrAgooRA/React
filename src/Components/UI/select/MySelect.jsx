import React from 'react';
import cl from './MySelect.module.css'


function MySelect({ options, defaultValue, value, onChange }) {
    return (
        <select className={cl.mySelect}
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option disabled value=''>{defaultValue}</option>
            {options.map((option) => {
                return <option key={option.value} value={option.value}>{option.name}</option>
            })}

        </select>
    )
}

export default MySelect
