import React, {useState} from 'react';

function AddTodo({onCreate}){
    const [value, setValue] = useState(' ')

    function submitHandler(event) {
        event.preventDefault()
        onCreate(value)
        setValue('')
    }

    return(
        <form onSubmit={submitHandler} className='form'>
            <input
                value={value}
                onChange={(event) => setValue(event.target.value)}
                className='form_input'
            />
            <button type='submit' className='button'> Add item</button>
        </form>
    )
}

export default AddTodo