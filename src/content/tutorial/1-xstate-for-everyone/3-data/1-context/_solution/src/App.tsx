import React from "react";
import { machine } from "./machine";
import { useMachine } from "@xstate/react";

function App() {
  const [state, send] = useMachine(machine);
  const { volume } = state.context;

  return (
    <div>
      <p>Volume: {volume}</p>
      <input type="range" value={volume} />
    </div>
  );
}

export default App;
