import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';

const ToDoForm = ({ todos, setTodos, editTodo, setEditTodo, updateTodo }) => {
    const [input, setInput] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    useEffect(() => {
        if(editTodo) {
            setInput(editTodo.task);
        } else {
            setInput('');
        }
    }, [setInput, editTodo]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!editTodo) {
            setTodos([
                {task: input, complete: false, id: uuid()}, ...todos
            ]);
    
            setInput('');
        } else {
            updateTodo(editTodo.id, false, input);
            setEditTodo('');
        }
    };

    return (
        <div className="todoform">
            <h1 className="todoform__title">To Do List</h1>
            <form>
                <div className="todoform__container">
                    <input className="todoform__input" value={input} onChange={handleChange} type="text" placeholder="add new todo"></input>
                    <button className="todoform__button" type="button" onClick={handleSubmit}>{editTodo ? 'Ok' : 'Add'}</button>
                </div>
            </form> 
        </div>
    );
};

export default ToDoForm;