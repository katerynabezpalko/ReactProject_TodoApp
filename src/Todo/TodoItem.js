import React from 'react';

function TodoItem(props) {
    const styles = {
      input:{
          marginRight:'1rem'
      }
    }

    const classes = []
    if (props.item.completed === true) {
        classes.push('done')
    }

    return(
        <li className='list'>
            <span className={classes.join(' ')}>
                <input type= 'checkbox'
                       style={styles.input}
                       onChange={() => props.onChange(props.item.id)}
                       checked={props.item.completed}
                />
                <strong>{props.index +1}</strong>
                &nbsp;
                {props.item.title}
            </span>
            <button className='rm'>&times;</button>
        </li>
    )
}

export default TodoItem