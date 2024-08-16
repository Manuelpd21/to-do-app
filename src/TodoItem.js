import React from 'react';

function TodoItem({ todo, index, toggleComplete, deleteTodo }) {
    return (
        <li>
            <span
                style={{ textDecoration: todo.completed ? 'line-through' : '' }}
                onClick={() => toggleComplete(index)}
            >
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Eliminar</button>
        </li>
    );
}

export default TodoItem;