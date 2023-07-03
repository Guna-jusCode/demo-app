import { memo } from "react";

const Todos = ({ todos, addTodo,demo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={()=>demo("Hello")}>Demo</button>
    </>
  );
};

export default memo(Todos);