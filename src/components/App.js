import React, {useState} from 'react';
import '../App.css';
import data from '../data/data.json';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import Footer from './Footer';


const App = () => {
  const [todos, setTodos] = useState(data);
  const [editTodo, setEditTodo] = useState(null);


  const updateTodo = (id, newComplete, task) => {
    const newTodos = todos.map(
        todo => todo.id === id? { ...todo, complete: newComplete, task:task }: todo
    )
    setTodos(newTodos)
}

  return (
    <div className="app">
      <section className="app_section">
        <ToDoForm
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          updateTodo={updateTodo}
        />
        <ToDoList
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
          updateTodo={updateTodo}
        />
        <Footer />
      </section>
    </div>
  )
}

export default App;
