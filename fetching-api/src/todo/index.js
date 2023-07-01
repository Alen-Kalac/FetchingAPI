import { useEffect, useState } from "react";
import { deleteTodo, fetchTodos } from "../api";
import { createTodo } from "../api";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue,setInputValue] = useState("")


  //Kreiranje novog podatka 
const handleCreateTodo = async () => {
    const newTodo = { title:inputValue, completed: false };
    const createdTodo = await createTodo(newTodo);
    setTodos([...todos, createdTodo]);
  };

  
  const handleDeleteTodo = async (todoId) => {
    const success = await deleteTodo(todoId);
    if (success) {
      const filteredTodos = todos.filter((t) => t.id !== todoId && t.id !==null)
      setTodos(filteredTodos)
    }

  };

  return(
    <div>
        <input onChange={(e) => (setInputValue(e.target.value))} type="text" name="" id="" />
        <button onClick={handleCreateTodo}>Add Todo</button>
        <ul>
            {
                todos.map((todo) => (
                    <li key={todo.id}> {todo.title} <button onClick={()=>handleDeleteTodo(todo.id)} className="handleDelete">Delete</button> </li>
                ))
            }
        </ul>
    </div>
  )
};

export default TodoList;