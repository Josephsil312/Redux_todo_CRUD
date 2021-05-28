import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import './TodoList.css'

function TodoList() {
  let todos = useSelector((state) => state);

  return (
    <div className="my-4">
      {todos.map((todo, idx) => {
        return <tr><th width = "10%"><TodoItem index={++idx} todo={todo} /></th></tr>;
      })}
    </div>
  );
}

export default TodoList;
