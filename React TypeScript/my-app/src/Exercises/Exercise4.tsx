import React, { useReducer, useState } from "react";

interface State {
  todos: string[];
}

type Action =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "clear" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add":
      if (action.payload.trim() !== "") {
        return { ...state, todos: [...state.todos, action.payload] };
      } else {
        return state;
      }

    case "remove":
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload),
      };

    case "clear":
      return { ...state, todos: [] };

    default:
      return state;
  }
};

const TodoReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { todos: [] });
  const [inputText, setInputText] = useState<string>("");

  return (
    <div>
      <div>
        <label htmlFor="inp">Todo: </label>
        <input
          type="text"
          name="inp"
          id="inp"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch({ type: "add", payload: inputText });
            setInputText("");
          }}
        >
          Add
        </button>
      </div>
      <div>
        {state.todos.length > 0 && (
          <button onClick={() => dispatch({ type: "clear" })}>Clear All</button>
        )}
        <ul>
          {state.todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button
                onClick={() => dispatch({ type: "remove", payload: index })}
              >
                -
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoReducer;
