import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos: React.FC = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Todos List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center border-b py-2">
            <span className="text-lg">{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
