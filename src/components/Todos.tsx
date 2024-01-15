import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { IRootState } from "../app/store";

const Todos: React.FC = () => {
  const todos = useSelector<IRootState, { id: string; text: string; }[]>(state => state.todos);
  const dispatch = useDispatch();

  const [editTodoId, setEditTodoId] = useState<string | null>(null);
  const [updatedText, setUpdatedText] = useState<string>("");

  const handleUpdate = (id: string) => {
    if (updatedText.trim() !== "") {
      dispatch(updateTodo({ id, newText: updatedText.trim() }));
      setEditTodoId(null);
      setUpdatedText("");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Todos List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center border-b py-2">
            {editTodoId === todo.id ? (
              <>
                <input
                  type="text"
                  value={updatedText}
                  onChange={(e) => setUpdatedText(e.target.value)}
                  className="border border-gray-300 rounded py-2 px-4 mr-2"
                />
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Update
                </button>
              </>
            ) : (
              <>
                <span className="text-lg">{todo.text}</span>
                <div>
                  <button
                    onClick={() => setEditTodoId(todo.id)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
