import { useMachine } from "@xstate/react";
import { machine } from "./machine";

function App() {
  const [state, send] = useMachine(machine);

  return (
    <button
      onClick={() => {
        send({ type: "switch" });
      }}
    >
      {state.value}
    </button>
  );
}

export default App;
