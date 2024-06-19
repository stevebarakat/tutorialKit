import React from "react";
import { machine } from "./machine";
import { useMachine } from "@xstate/react";

function App() {
  const [state, send] = useMachine(machine);
  const { volume } = state.context;

  return (
    <div>
      <p>Volume: {volume}</p>
      <input
        type="range"
        value={volume}
        onChange={(e) =>
          send({ type: "change.volume", volume: e.target.valueAsNumber })
        }
      />
    </div>
  );
}

export default App;
