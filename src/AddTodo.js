import React, { useState } from 'react';

function AddTodo({ addTodo }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter a new todo"
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default AddTodo;
