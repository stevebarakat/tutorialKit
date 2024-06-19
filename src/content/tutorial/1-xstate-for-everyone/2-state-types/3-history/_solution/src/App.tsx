import React from "react";
import { machine } from "./machine";
import { useMachine } from "@xstate/react";

function App() {
  const [state, send] = useMachine(machine);
  const isEnteringName = state.matches("name");

  return (
    <>
      <div>
        {state.matches("subscription") && (
          <>
            <h2>
              <pre>{JSON.stringify(state.value, null, 2)}</pre>
            </h2>
            <span>Subscription Type: </span>
            <label htmlFor="free">Free</label>
            <input
              type="radio"
              name="free"
              id="free"
              value="free"
              checked={state.matches({ subscription: "free" })}
              onChange={() => send({ type: "set.free" })}
            />
            <label htmlFor="pro">Pro</label>
            <input
              type="radio"
              name="pro"
              id="pro"
              value="pro"
              checked={state.matches({ subscription: "pro" })}
              onChange={() => send({ type: "set.pro" })}
            />
          </>
        )}
      </div>
      <div>
        <label htmlFor="name"></label>
        <button
          onClick={() =>
            send({ type: isEnteringName ? "go.back" : "enter.name" })
          }
        >
          {isEnteringName ? "Go back" : "Enter name"}
        </button>
      </div>
    </>
  );
}

export default App;
