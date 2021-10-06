import React, {useEffect} from 'react';
import TodoList from "./Todo/TodoList";

function App() {
    const [todos, setTodos] = React.useState ([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTodos(todos)
            })
    },[]);

    function toggleTodo(id){
        const changedTodos = todos.map(item => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item
        })
        setTodos(changedTodos)
    }

    return(
        <div className='wrapper'>
            <h1 className='header'>To Do List:</h1>
            <TodoList todos={todos} onToggle={toggleTodo}/>
        </div>
    )
}

export default App