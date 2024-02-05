import React, { useState } from 'react'

export const SearchFilter = () => {
    const [inputValue, setInputValue] = useState("");
    const items = ['Apple', 'Banana', 'Carrot', 'Date', 'Eggplant', 'Fig', 'Grape'];

    const filter = (e) => setInputValue(e.target.value);
    const filteredItems = items.filter(item => item.toLowerCase().includes(inputValue.toLowerCase()));

  return (
    <div className="max-w-sm rounded  shadow-lg border h-auto px-4 py-1 ">
        <input className='border border-black rounded-md' value={inputValue} onChange={filter} />

        <ul>
            {filteredItems.map((item, index) => (
            <li key={index}> {item} </li>
            ) )}
        </ul>

    </div>
  )
}
