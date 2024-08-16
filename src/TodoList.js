import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo.js';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const newTodo = { text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div>
            <AddTodo addTodo={addTodo} />
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        index={index}
                        todo={todo}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
