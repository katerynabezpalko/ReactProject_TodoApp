import React, {useState} from 'react';

function AddTodo({onCreate}){
    const [value, setValue] = useState(' ')

    function submitHandler(event) {
        event.preventDefault()
        onCreate(value)
        setValue('')
    }

    return(
        <form onSubmit={submitHandler}>
            <input value={value} onChange={(event) => setValue(event.target.value)}/>
            <button type='submit' className='button'> Add item</button>
        </form>
    )
}

export default AddTodo