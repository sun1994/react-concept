import { useState, useReducer } from "react";
import { reducer, initialState } from "./Reducer";

function DemoReducer() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [toDo, setTodo] = useState(null);
  // const [toDoList, setTodoList] = useState([]);

  // const submitForm = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     id: Date.now(),
  //     text: toDo
  //   }
  //   setTodoList([...toDoList, data]);
  // }

  const submitForm = (e) => {
    e.preventDefault();
    const data = {
      data: {
        id: Date.now(),
        text: toDo,
        isComplete: false,
      },
      type: "ADD_TODO",
    };
    dispatch(data);
  };

  const marksComplete = (id) => {
    dispatch({ type: "COMPLETE_TODO", id: id });
  };

  return (
    <div className="DemoReducer">
      <form id="todo-list-form" onSubmit={submitForm}>
        <label>Enter your todo List</label>
        <input
          type="text"
          name="todolist"
          placeholder="Enter your ToDo List"
          onChange={(e) => setTodo(e.target.value)}
          required
          maxLength={30}
        />
        <button type="submit" name="submit">
          Submit
        </button>
      </form>
      <div id="todo-list-item">
        <ul>
          {todos &&
            todos.map((val, i) => {
              return (
                <li
                  key={i}
                  onClick={() => marksComplete(val.id)}
                  style={{
                    textDecoration: val.isComplete ? "line-through" : "",
                  }}
                >
                  {i + 1}. {val.text}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default DemoReducer;
