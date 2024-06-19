import { machine } from "./machine";
import { useMachine } from "@xstate/react";

function App() {
  const [state, send] = useMachine(machine);
  return (
    <div>
      <h1>{JSON.stringify(state.value)}</h1>
      <button onClick={() => send({ type: "weigh" })}>Weigh</button>
      <button onClick={() => send({ type: "grind" })}>Grind</button>
      <button onClick={() => send({ type: "brew" })}>Brew</button>
    </div>
  );
}

export default App;
