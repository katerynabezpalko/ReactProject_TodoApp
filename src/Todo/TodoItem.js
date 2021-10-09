import React, {useContext} from 'react';
import Context from '../context';

function TodoItem(props) {

    const context = useContext(Context)

    const classes = [ ]
    if (props.item.completed === true) {
        classes.push('done')
    }

    return(
        <li className='list'>
            <span className={classes.join(' ')}>
                <input type= 'checkbox'
                       className='input'
                       onChange={() => props.onChange(props.item.id)}
                       checked={props.item.completed}
                />
                <strong>{props.index +1}</strong>
                &nbsp;
                {props.item.title}
            </span>
            <button className='rm' onClick={() => context.removeItem(props.item.id) }>&times;</button>
        </li>
    )
}

export default TodoItem