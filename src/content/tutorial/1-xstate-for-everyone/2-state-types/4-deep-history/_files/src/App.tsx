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
        {state.matches({ payment: "card" }) && (
          <div>
            <label htmlFor="visa">Visa</label>
            <input
              type="radio"
              name="visa"
              id="visa"
              value="visa"
              checked={state.matches({ payment: { card: "visa" } })}
              onChange={() => send({ type: "use.visa" })}
            />
            <label htmlFor="masterCard">MasterCard</label>
            <input
              type="radio"
              name="masterCard"
              id="masterCard"
              value="masterCard"
              checked={state.matches({ payment: { card: "masterCard" } })}
              onChange={() => send({ type: "use.masterCard" })}
            />
          </div>
        )}
      </div>
      <div>
        <label htmlFor="address">Address: </label>
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
