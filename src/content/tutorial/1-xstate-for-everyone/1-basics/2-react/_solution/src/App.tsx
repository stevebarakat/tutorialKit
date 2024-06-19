import React from "react";
import { machine } from "./reactMachine";
import { useMachine } from "@xstate/react";

function App() {
  const [state, send] = useMachine(machine);

  return (
    <button onClick={() => send({ type: "toggle" })}>
      {state.matches("Active") ? "Active" : "Inactive"}
    </button>
  );
}

export default App;
