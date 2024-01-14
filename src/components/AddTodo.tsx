import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

interface FormInput {
  todo: string;
}

const AddTodo: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>(); // Specify the type for useForm

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    dispatch(addTodo(data.todo.trim())); // Trim leading/trailing spaces
    reset(); // Reset the form after successful submission
  };

  return (
    <div className="my-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-lg mx-auto mt-8 p-4 justify-center bg-white shadow-md rounded-md items-center"
      >
        <input
          type="text"
          placeholder="Add a new todo..."
          {...register("todo", {
            required: "Todo is required",
            pattern: {
              value: /^[^\s].*$/, // Regex to disallow empty spaces at the start
              message: "Todo should not start with empty spaces",
            },
          })}
          className={`border border-gray-300 w-full rounded py-2 px-4 mr-2 ${
            errors.todo ? "border-red-500" : ""
          }`}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
