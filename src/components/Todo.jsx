const Todo = ({ todo, todos, setTodos }) => {
  const onClickDone = () => {
    const newTodos = todos.map((v, i) => {
      if (todo.id === v.id)
        return { id: v.id, title: v.title, isDone: !v.isDone };
      else {
        return {
          id: v.id,
          title: v.title,
          isDone: v.isDone,
        }; /* 한번더 클릭하면 줄 삭제*/
      }
    });
    // newTodos라는 배열을 만들건데 그걸 map함수로 만든다.
    /*const newTodos = todos.map((v, i) => {
      if (todo.id === v.id) {
        return { id: v.id, title: v.title, isDone: !v.isDone };
      } else {
        return v;
      }
    });  이건 위 내용을 3항 연산자로 바꾼것*/

    setTodos(newTodos);
  };

  const onClickDelete = () => {
    const newTodos = todos.filter((v, i) => {
      if (todo.id !== v.id) {
        return v;
      }
    });

    setTodos(newTodos);
  };

  return (
    <li>
      <span>{todo.id}</span>
      <button
        className={`${todo.isDone && "line-through"}`}
        onClick={onClickDone}
      >
        {todo.title}
      </button>
      <button>Del</button>
    </li>
  );
};

export default Todo;
