import React from 'react'

export const ColorSwitch = () => {
  return (
    <div className='max-w-sm rounded  shadow-lg border h-auto px-4 py-1 '>
        <select className='bg-transparent rounded-md border border-black '>
            <option value="">Choose color</option>
            <option valuie="red">Red</option>
            <option valuie="blue">Blue</option>
            <option valuie="green">Green</option>
            <option valuie="yellow">Yellow</option>
        </select>
        <div className=''>

        </div>
    </div>
  )
}
