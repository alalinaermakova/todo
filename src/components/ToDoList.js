import ToDo from './ToDo';

const ToDoList = ({ todos, setTodos, setEditTodo, updateTodo }) => {

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const editTodo = (id) => {
        setEditTodo(todos.find(todo => todo.id === id));
    }

    const todoList = todos.map((todo, index) => (
        <ToDo
            key={todo.id}
            todo={todo}
            index={index}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            updateTodo={updateTodo}
        />
    ));

    return (
        <div className="container">
            <div className="container__todo">
                {todoList}
            </div>
        </div>
    );
};

export default ToDoList;