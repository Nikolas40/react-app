import React, { useState } from "react";
import todo from "../todo.json"
import ToDo from "./ToDo";

export const ToDoList = () => {
const [todoList,setToDoList] = useState(todo)

const handleCheckCompleted = (id) => {

setToDoList(() => 
     todoList.map( todo => todo.id === id ?{...todo,completed:!todo.completed}:todo)
 )

}

const handleDelete = (id) => {

    setToDoList(() => todoList.filter(todo => todo.id !== id))
}

  return (
    <>
      <h1> To-Do list</h1>
      <ul className="list-group list-group-flush">
        {todoList.map((todo) => (
          <ToDo
            key={todo.id}
            todo={todo}
            handleCheckCompleted={handleCheckCompleted}
            handleDelete={handleDelete}
            
          />
        ))}
      </ul>
    </>
  );
};
