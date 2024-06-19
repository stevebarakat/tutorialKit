import React from "react";
import { machine } from "./machine";
import { useMachine } from "@xstate/react";

function App() {
  const [state, send] = useMachine(machine);
  const isOn = state.matches({ fan: "on" });
  const isCooling = state.matches({ setting: "cooling" });
  return (
    <div>
      <h2>
        <pre>{JSON.stringify(state.value, null, 2)}</pre>
      </h2>
      <button
        onClick={() => {
          send({ type: isCooling ? "HEAT" : "COOL" });
        }}
      >
        {isCooling ? "AC" : "Heater"}
      </button>
      <button
        onClick={() =>
          send({
            type: isOn ? "FAN.AUTO" : "FAN.ON",
          })
        }
      >
        {isOn ? "On" : "Auto"}
      </button>
    </div>
  );
}

export default App;
