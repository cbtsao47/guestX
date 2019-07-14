import React from 'react'

const InputBox = ({vowelCount,lineCount,wordCount,handleChange,handleClick}) => {
    return (
        <div>
        <form>
        <label htmlFor='wordCount'>Count Every 
        <input required type='number' id='wordCount'name='wordCount'value={wordCount} onChange={handleChange}/>
        Word
        </label>
        <label htmlFor='vowelCount'> that has at least 
        <input required type='number' id='vowelCount'name='vowelCount'value={vowelCount} onChange={handleChange}/>
        vowels</label>
        <label htmlFor='lineCount'> in every
        <input required type='number' id='lineCount'name='lineCount'value={lineCount} onChange={handleChange}/>
        lines
        </label>
        <button onClick={handleClick}>Find Match</button>
        </form>
        </div>
    )
}

export default InputBox
