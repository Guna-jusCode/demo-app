import React,{ useState, useCallback } from "react";
import Todos from "./Todo";

const DWithoutCallBackhook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback((s) => {
    setTodos((t) => [...t, s]);
  }, []);
  const disp=(s)=>console.log(s)
  return (
    <>
      <Todos todos={todos} addTodo={addTodo} demo={disp}/>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
export default DWithoutCallBackhook;