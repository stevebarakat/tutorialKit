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
            <label htmlFor="pro">Pro</label>
            <input
              type="radio"
              name="pro"
              id="pro"
              value="pro"
              checked={state.matches({ subscription: "pro" })}
              onChange={() => send({ type: "set.pro" })}
            />
            <label htmlFor="free">Free</label>
            <input
              type="radio"
              name="free"
              id="free"
              value="free"
              checked={state.matches({ subscription: "free" })}
              onChange={() => send({ type: "set.free" })}
            />
          </>
        )}
        {state.matches({ subscription: "pro" }) && (
          <div>
            <label htmlFor="monthly">Monthly</label>
            <input
              type="radio"
              name="monthly"
              id="monthly"
              value="monthly"
              checked={state.matches({ subscription: { pro: "monthly" } })}
              onChange={() => send({ type: "set.monthly" })}
            />
            <label htmlFor="yearly">Yearly</label>
            <input
              type="radio"
              name="yearly"
              id="yearly"
              value="yearly"
              checked={state.matches({ subscription: { pro: "yearly" } })}
              onChange={() => send({ type: "set.yearly" })}
            />
          </div>
        )}
      </div>
      <div>
        <label htmlFor="name">Address: </label>
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
