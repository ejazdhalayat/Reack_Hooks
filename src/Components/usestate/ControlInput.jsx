import React, {useState} from 'react'

export const ControlInput = () => {
    const [text, setText] = useState("");

    const texts = (e) => setText(e.target.value);

  return (
    <div className='max-w-sm rounded  shadow-lg border h-auto'>
        <input placeholder='Enter the text' className='border border-black rounded-md' value={text} onChange={texts} />
        <p>Input text : <span className='text-cyan-600'> {text} </span> </p>
    </div>
  )
}
