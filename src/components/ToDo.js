import React from 'react';

const ToDo = ({ todo, index, deleteTodo, editTodo, updateTodo }) => {
    const complete = todo.complete ? "todo_complete" : "";
    const completeButton = complete ? "button__toggle button__toggle_done" : "button__toggle button__toggle_not-done";

    const onTodoClick = () => {
        const todoCompleted = !todo.complete
        updateTodo(todo.id, todoCompleted, todo.task)
    }

    const handleDelete = () => {
        deleteTodo(todo.id);
    }

    const handleEdit = () => {
        editTodo(todo.id);
    }
    
    return (
        <div className="todo">
            <div className={complete}>
                {todo.task}
            </div>
            <div className="button__container">
                <button
                    className={completeButton}
                    onClick={() => onTodoClick(index)}
                >
                </button>
                <button
                    className="button button__delete"
                    onClick={() => handleDelete()}
                    >
                    </button>
                <button
                    className="button button__edit"
                    onClick={() => handleEdit()}
                    >
                    </button>
            </div>
        </div>
    )
}

export default ToDo;
