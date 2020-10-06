import React, {useEffect, useState} from "react";
import EditTodo from "./EditTodo"

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = async id => {
    try {
      const deleteTodo = await fetch(`${process.env.REACT_APP_API_HOST}/todos/${id}`, {
        method: "Delete",
      });
      console.log(await deleteTodo.json());
      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  const getTodos = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_HOST}/todos`);
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  },[]);

  return (
    <>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td><EditTodo todo={todo} /></td>
              <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
            </tr>
          ))}
          {/*
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
        </tbody>
      </table>
    </>
  )
};

export default ListTodos;