import React, {useEffect} from 'react';
import TodoList from './Todo/TodoList';
import Context from '../src/context';
import AddTodo from './Todo/AddTodo';

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

    function removeItem(id){
        setTodos(todos.filter(item => item.id !== id))
        }

    function addTodo(value) {

        const newTodos = todos.concat([
            {
                title: value,
                id: Date.now(),
                completed:false,
            }
            ])
        setTodos(newTodos)
    }

    return(
        <Context.Provider value = {{ removeItem }}>
            <div className='wrapper'>
                <h1 className='header'>To Do List:</h1>
                <AddTodo onCreate={addTodo}/>
                <TodoList todos={todos} onToggle={toggleTodo}/>
            </div>
        </Context.Provider>
    )
}

export default App