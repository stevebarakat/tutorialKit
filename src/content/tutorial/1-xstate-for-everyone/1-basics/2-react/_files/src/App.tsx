import React from "react";
import { machine } from "./reactMachine";
import { useMachine } from "@xstate/react";

function App() {
  const [state, send] = useMachine(machine);

  return (
    <button onClick={() => send({ type: "switch" })}>
      {state.matches("On") ? "On" : "Off"}
    </button>
  );
}

export default App;
