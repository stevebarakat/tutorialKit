import React from "react";
import { machine } from "./machine";
import { useMachine } from "@xstate/react";

function App() {
  const [state, send] = useMachine(machine);
  const isPlaying = state.matches({ Closed: "Playing" });
  const isClosing = state.matches("Closing");
  const isOpened = state.matches("Opened");
  const isStopped = state.matches({ Closed: "Stopped" });
  const isDisabled = isClosing || isOpened;
  return (
    <div>
      <h1>{JSON.stringify(state.value)}</h1>
      <button
        onClick={() =>
          send({
            type: isOpened ? "CLOSE" : "OPEN",
          })
        }
      >
        {isOpened ? "close" : "open"}
      </button>
      <button
        disabled={isDisabled}
        onClick={() =>
          send({
            type: isPlaying ? "PAUSE" : "PLAY",
          })
        }
      >
        {isPlaying ? "pause" : "play"}
      </button>
      <button
        disabled={isDisabled || isStopped}
        onClick={() => {
          send({ type: "STOP" });
        }}
      >
        stop
      </button>
    </div>
  );
}

export default App;
