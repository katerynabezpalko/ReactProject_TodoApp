import React from 'react';
import TodoItem from "./TodoItem";

function TodoList(props){

    return(
        <ul className='items_list'>
            {props.todos.map((item,index)=> {
                return(
                    <TodoItem item={item} index={index} onChange={props.onToggle}/>
                )}
            )}
        </ul>
    )
}

export default TodoList