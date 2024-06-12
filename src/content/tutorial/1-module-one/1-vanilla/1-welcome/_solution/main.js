import { createActor } from "xstate";
import { machine } from "./firstMachine";
import "./style.css";

const counterService = createActor(machine).start();

counterService.subscribe((state) => {
  const p = document.getElementById("state");
  p.innerHTML = state.value;
});

document.querySelector("button").addEventListener("click", () => {
  counterService.send({
    type: "next",
  });
});
