import React, {useState} from 'react'

export const Toggle = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleMe = () => setIsVisible(!isVisible);

  return (
    <div className='max-w-sm rounded  shadow-lg border h-auto'>
     {isVisible && <h1 className='font-semibold'>Hide me!</h1>}   
        <button className='bg-teal-500 p-1 rounded-md' onClick={toggleMe}>Show/Hide</button>
    </div>
  )
}
