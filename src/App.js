import React from 'react';
import TodoList from "./Todo/TodoList";

function App() {
    const [todos, setTodos] = React.useState ([
        {id:1, completed:false, title: 'Купить хлеб'},
        {id:2, completed:true, title: 'Купить молоко'},
        {id:3, completed:false, title: 'Купить масло'},
    ])

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
            <h1>To Do List:</h1>
            <TodoList todos={todos} onToggle={toggleTodo}/>
        </div>
    )
}

export default App