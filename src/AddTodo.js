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
                placeholder="Agregar una tarea"
            />
            <button type="submit">Agregar tarea</button>
        </form>
    );
}

export default AddTodo;
