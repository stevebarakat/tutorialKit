import React from "react";
import { machine } from "./machine";
import { useMachine } from "@xstate/react";

function App() {
  const [state, send] = useMachine(machine);
  const isEnteringAddress = state.matches("address");

  return (
    <>
      <div>
        {state.matches("payment") && (
          <>
            <h2>
              <pre>{JSON.stringify(state.value, null, 2)}</pre>
            </h2>
            <span>Payment method: </span>
            <label htmlFor="card">Card</label>
            <input
              type="radio"
              name="card"
              id="card"
              value="card"
              checked={state.matches({ payment: "card" })}
              onChange={() => send({ type: "use.card" })}
            />
            <label htmlFor="paypal">Paypal</label>
            <input
              type="radio"
              name="paypal"
              id="paypal"
              value="paypal"
              checked={state.matches({ payment: "paypal" })}
              onChange={() => send({ type: "use.paypal" })}
            />
          </>
        )}
      </div>
      <div>
        <label htmlFor="address"></label>
        <button
          onClick={() =>
            send({ type: isEnteringAddress ? "go.back" : "enter.address" })
          }
        >
          {isEnteringAddress ? "Go back" : "Enter address"}
        </button>
      </div>
    </>
  );
}

export default App;
