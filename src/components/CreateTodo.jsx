import { useState } from "react";

const CreateTodo = ({ todos, setTodos, todoId, setTodoId }) => {
  const [newTodo, setNewTodo] = useState("");

  const onSubmitCreateTodo = (e) => {
    e.preventDefault();

    if (!newTodo) return; /*값이 없으면 반환*/

    setTodos([...todos, { id: todoId, title: newTodo, isDone: false }]);
    setTodoId(todoId + 1);
    setNewTodo("");
    console.log(todos);
  };

  const onChangeNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <form onSubmit={onSubmitCreateTodo}>
      <input
        className="px-4 py-2 border-2 rounded-md focus:outline-none focus:border-pink-300"
        type="text"
        value={newTodo}
        onChange={onChangeNewTodo}
      />
      <input
        className="px-4 py-2 bg-pink-300 active:bg-pink-600 ml-4 rounded-md shadow-md"
        type="submit"
        value="추 가"
      />
    </form>
  );
};

export default CreateTodo;
