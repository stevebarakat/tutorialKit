import React from "react";
import { machine } from "./machine";
import { useMachine } from "@xstate/react";

function App() {
  const [state, send] = useMachine(machine);
  const isPlaying = state.matches({ track: "playing" });
  const isMuted = state.matches({ mute: "muted" });
  return (
    <div>
      <h2>
        <pre>{JSON.stringify(state.value, null, 2)}</pre>
      </h2>
      <button
        onClick={() => {
          send({ type: isMuted ? "UNMUTE" : "MUTE" });
        }}
      >
        {isMuted ? "unmute" : "mute"}
      </button>
      <button
        onClick={() =>
          send({
            type: isPlaying ? "PAUSE" : "PLAY",
          })
        }
      >
        {isPlaying ? "pause" : "play"}
      </button>
    </div>
  );
}

export default App;
