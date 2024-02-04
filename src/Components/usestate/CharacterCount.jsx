import React, {useState} from 'react'

export const CharacterCount = () => {
    const [text, setText] = useState("");

    const counter = (e) => setText(e.target.value); 

  return (
    <div className='max-w-sm rounded  shadow-lg border h-auto'>
        <textarea className='border border-black rounded-md' value={text} onChange={counter}/>
        <p>Character Count : <span className='text-violet-700'>{text.length}</span> </p>
    </div>
  )
}
