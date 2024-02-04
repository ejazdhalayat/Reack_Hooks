import React, {useState} from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0);
    const inc =() => {
        setCount(count + 1);
    }
  return (
    <div className='max-w-sm rounded  shadow-lg border h-auto'>
        <h1 className=''>You clicked <span className='text-purple-600'> {count} </span>  times! </h1>
        <button className='bg-blue-500 p-1 rounded-md' onClick={inc}>Click me!</button>

    </div>
  )
}
