import { createActor } from "xstate";
import { machine } from "./firstMachine";
import "./src/index.css";

const button = document.querySelector("button");
const actor = createActor(machine).start();

actor.subscribe((state) => {
  button.innerText = state.value;
});

button.addEventListener("click", () => {
  actor.send({
    type: "switch",
  });
});
