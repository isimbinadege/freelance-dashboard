import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Counter() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="p-4 border rounded w-fit">
      <h1 className="text-xl mb-2">Count: {state.count}</h1>

      <button
        className="px-3 py-1 border mr-2"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +
      </button>

      <button
        className="px-3 py-1 border"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -
      </button>
    </div>
  );
}
