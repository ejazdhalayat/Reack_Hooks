import React, { useState } from 'react'

export const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const text = (e) => setInput(e.target.value);

    const submit = () => {
        if (input.trim()) {
            setTodos([...todos, input.trim()]);
            setInput("");
        }
    }

    const del = (index) => setTodos(todos.filter((_, i) => i !== index));

    return (
        <div className='max-w-sm rounded  shadow-lg border h-auto'>
            <div>
                <input className='border border-black rounded-md' value={input} onChange={text} />
                <button className='ml-2 px-4 py-1 bg-fuchsia-400 rounded-md' onClick={submit}>Add</button>
                <ul> 
                    {todos.map((todo, index) => (
                        <li>
                            {todos}
                            <button className='bg-rose-600 px-4 py-1 rounded-md ml-3' onClick={() => del(index)}> Delete </button>
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    )
}
