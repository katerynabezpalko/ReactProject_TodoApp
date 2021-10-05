import React from 'react';
import TodoItem from "./TodoItem";

function TodoList(props){
   const styles = {
       ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
       }
    }

    return(
        <ul className={styles}>
            {props.todos.map((item,index)=> {
                return(
                    <TodoItem item={item} index={index} onChange={props.onToggle}/>
                )}
            )}
        </ul>
    )
}

export default TodoList